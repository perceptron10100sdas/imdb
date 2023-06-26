import './globals.css'
import { Inter } from 'next/font/google'
import Header from "./components/header"
import Providers from "./providers";
const inter = Inter({ subsets: ['latin'] })
import Navbar from "./components/navbar"
export const metadata = {
  title: 'imdb',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
       <Providers> {/* Header */}
        <Header/>
        {/* navbar */}
        <Navbar/>
        
        {/* searchbox */}
        
        
       {children}




       </Providers>
       
       
       
       
       </body>
    </html>
  )
}
