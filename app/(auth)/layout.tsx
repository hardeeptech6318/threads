export const metedata={
    title:'Threads',
    description:'Thread login'
}

import { ClerkProvider } from '@clerk/nextjs'
import { Inter } from 'next/font/google'
import '../globals.css';


const inter = Inter({ subsets: ['latin'] })

function Rootlayout({children}:{children:React.ReactNode}) {
  return (
    <ClerkProvider>
    <html lang='en'>
            <body className={`${inter.className} bg-dark-1`}>
                <div className='w-full flex justify-center items-center min-h-screen'>
                    {children}
                    </div>
            </body>
    </html>
    </ClerkProvider>
  )
}

export default Rootlayout