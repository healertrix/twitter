import './globals.css'
import { Inter } from 'next/font/google'
import Layout from './custom_components/Layout'
import LoginModal from './custom_components/modals/LoginModal'
import RegisterModal from './custom_components/modals/RegisterModal'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Twitter',
  description: 'Better Twitter',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
  })
{
  
  return (
    <html lang='en'>
      <body className={inter.className}>
        <RegisterModal />
        <LoginModal />
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
