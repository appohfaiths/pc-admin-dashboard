import { Inter } from '@next/font/google';
import styles from './page.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className="bg-red-500">
      <div className="text-3xl">PC Admin Dashboard</div>
    </main>
  );
}
