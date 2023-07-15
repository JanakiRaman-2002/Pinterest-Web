"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import {HiSearch, HiBell, HiChat} from 'react-icons/hi'
import { useSession, signIn, signOut } from "next-auth/react"
import { doc, setDoc, getFirestore } from "firebase/firestore"; 
import app from '../Shared/firebaseConfig'
import { useRouter } from 'next/navigation'

function Header() {
    const { data: session, status } = useSession()
    console.log(session)

    const router = useRouter();

    const db = getFirestore(app);

    useEffect(() =>{
        saveUserInfo();
    },[session])

    const onCreateClick = () => {
        if(session?.user){
            router.push('/pin-builder')
        }else{
            signIn();
        }
    }

    const saveUserInfo = async() => {
        if(session?.user){
            await setDoc(doc(db, "user", session.user.email), {
                userName: session.user.name,
                email: session.user.email,
                userImage: session.user.image
            });
        }
    }

    return (
        <div className='flex gap-3 md:gap-2 items-center p-6'>
            <Image src='/logo.png' onClick={()=>router.push('/')} alt="logo" width={50} height={50} className='hover:bg-gray-300 p-2 rounded-full cursor-pointer'/>
            <button className='bg-black text-white p-2 rounded-full px-4' onClick={()=>router.push('/')}>Home</button>
            <button className='font-semibold p-2 rounded-full px-4' onClick={()=>onCreateClick()}>Create</button>
            <div className='bg-[#e9e9e9] p-3 flex gap-3 items-center rounded-full w-full hidden md:flex'>
                <HiSearch className='text-[25px] text-gray-500 md:hidden'/>
                <input type="text" placeholder='search' className='bg-transparent outline-none'/>
            </div>
            <HiBell className='text-[40px] text-gray-500' />
            <HiChat className='text-[40px] text-gray-500' />
            {session?.user? <Image onClick={()=>router.push('/'+session.user.email)} src={session?.user?.image} alt="user" width={50} height={50} className='hover:bg-gray-300 p-2 rounded-full cursor-pointer'/>:
            <button className='font-semibold p-2 rounded-full px-4' onClick={() => signIn()}>Login</button>}
        </div>
    )
}

export default Header