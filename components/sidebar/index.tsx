'use client';

import Link from 'next/link';
import { MdMenu, MdHome, MdCalendarToday, MdDashboard } from 'react-icons/md';
import { FaChartPie } from 'react-icons/fa';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../../utilities/firebase/firebaseconfig';
import { logout, selectUser } from '../../store/features/user/authSlice';
import { useRouter } from 'next/navigation';

export default function Sidebar() {
  const [showFull, setShowFull] = useState(true);
  const dispatch = useDispatch()
  const router = useRouter()

  const logoutofApp = () => {
    dispatch(logout());

    auth.signOut();
    router.push('/')
  }

  const user = useSelector(selectUser)

  return (
    <section
      className={`${
        showFull ? 'w-[18vw]' : 'w-[5vw]'
      } border-4 border-blue-400`}
    >
      <div>
        <MdMenu onClick={() => setShowFull(!showFull)} />
      </div>
      <ul>
        <li>
          <Link href="/admin" className="flex">
            <button>
              <MdHome />
            </button>
            {showFull && <p>Home</p>}
          </Link>
        </li>
        <li>
          <Link href="/admin/dashboard" className="flex">
            <button>
              <MdDashboard />
            </button>
            {showFull && <p>Dashboard</p>}
          </Link>
        </li>
        <li>
          <Link href="/admin/calendar" className="flex">
            <button>
              <MdCalendarToday />
            </button>
            {showFull && <p>Calendar</p>}
          </Link>
        </li>
        <li>
          <Link href="/admin/charts" className="flex">
            <button>
              <FaChartPie />
            </button>
            {showFull && <p>Charts</p>}
          </Link>
        </li>
        <li>
          <div>
            <button onClick={() =>  logoutofApp()}>Logout</button>
          </div>
        </li>
      </ul>
    </section>
  );
}
