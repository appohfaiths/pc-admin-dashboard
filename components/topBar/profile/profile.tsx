'use client';

import Image from 'next/image';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../store/features/user/authSlice';
import { useEffect } from 'react';

export default function Profile() {
  const user = useSelector(selectUser)

  useEffect(() => {
    console.log(user)
  }, [user])

  return (
    <div className="flex flex-col">
      {user && (
        <div className="flex">
          <div className="h-10 w-10 rounded-xl relative">
            <Image
              src={user.photoURL}
              fill={true}
              className="rounded-full"
              alt="user google profile photo"
            />
          </div>
          <h4>{user.email}</h4>
        </div>
      )}
    </div>
  );
}
