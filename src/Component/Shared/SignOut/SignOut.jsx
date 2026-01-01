"use client"
import { signOut } from 'next-auth/react';
import React from 'react';

const SignOut = () => {
    return (
        <div className='flex justify-center my-10'>
            <div onClick={()=>signOut()} className='bg-red-700 py-2 px-4 rounded-2xl text-white'> Sign Out</div>

        </div>
    );
};

export default SignOut;