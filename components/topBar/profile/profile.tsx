'use client';

import Image from 'next/image';
import { useAuth } from '../../../utilities/contexts/userAuthentication';

export default function Profile() {
  const { user } = useAuth();
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
          <h4>{user.displayName}</h4>
        </div>
      )}
    </div>
  );
}
