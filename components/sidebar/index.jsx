'use client';

import Link from 'next/link';
import { MdMenu, MdHome, MdCalendarToday, MdDashboard } from 'react-icons/md';
import { FaChartPie } from 'react-icons/fa';
import { useState } from 'react';
import { useAuth } from '../../utilities/contexts/userAuthentication';

export default function Sidebar() {
  const [showFull, setShowFull] = useState(true);
  const { logout } = useAuth();

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
            <button onClick={logout}>Logout</button>
          </div>
        </li>
      </ul>
    </section>
  );
}
