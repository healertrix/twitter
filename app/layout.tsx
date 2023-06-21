import './globals.css'
import { Inter } from 'next/font/google'
import Layout from './custom_components/Layout'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Twitter',
  description: 'Better Twitter',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
