import './globals.css';
import UserAuthenticationContextProvider from '@/utilities/contexts/userAuthentication';

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
          <UserAuthenticationContextProvider>
            {children}
          </UserAuthenticationContextProvider>
        </main>
      </body>
    </html>
  );
}
