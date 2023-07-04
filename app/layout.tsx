import './globals.css';
import { Providers } from '../store/provider';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body>
        <main
          className="container mx-auto
        "
        >
          <Providers>
            {children}
      </Providers>
            
        </main>
      </body>
    </html>
  );
}
