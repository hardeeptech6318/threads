"use client"
import { sidebarLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname ,useRouter} from 'next/navigation'
import React from 'react'

function Bottombar() {
  const router=useRouter()
  const pathname=usePathname()
  return (
   <section className='bottombar'>
      <div className='bottombar_container'>
      {sidebarLinks.map((link)=>{

const isActive=(pathname.includes(link.route) && link.route.length>0 ) && link.route===pathname
        

       return   <Link 
          href={link.route} 
          className={`leftsidebar_link ${isActive && 'bg-primary-500'} bottombar_link` }
          key={link.label} >
           <Image height={24} width={24} alt='links' src={link.imgURL}/> 
           <p className='text-subtle-medium text-light-1  max-sm:hidden'>
            {link.label.split(/\s+/)[0]}</p>
          </Link>
})}
      </div>
   </section>
  )
}

export default Bottombar