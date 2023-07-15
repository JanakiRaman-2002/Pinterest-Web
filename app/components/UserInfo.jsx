import React from 'react'
import Image from 'next/image'
import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const UserInfo = ({userInfo}) => {

    const router = useRouter();
    const {data:session} = useSession();
    const onLogoutClick = () => {
        signOut();
        router.push('/');
    }
    console.log(userInfo)
  return (
    <div className='flex flex-col items-center'>
        <Image src={userInfo.userImage} alt="User Image" width={100} height={100} className='rounded-full' />
        <h2 className='text-[30px] mt-6 font-semibold'>{userInfo.userName}</h2>
        <h2 className='text-gray-400 mt-3'>{userInfo.email}</h2>
        <div className='flex gap-3'>
            <button className='bg-gray-300 p-2 px-3 rounded-full font-semibold mt-6'>Share</button>
            {session?.user.email == userInfo.email?
            <button onClick={()=>onLogoutClick()} className='bg-gray-300 p-2 px-3 rounded-full font-semibold mt-6'>Logout</button>:null}
        </div>
        
    </div>
  )
}

export default UserInfo