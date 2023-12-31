import Link from 'next/link'
import Image from 'next/image'
import { OrganizationSwitcher, SignOutButton, SignedIn } from '@clerk/nextjs'
import { dark } from '@clerk/themes'

function Topbar() {
  return (
    <nav className='topbar'>
        <Link href='/' className='flex items-center gap-4'>
            <Image  alt='logo' height={28} width={28}  src='/assets/logo.svg'/>
            <p className='text-heading3-bold text-light-1 max-xs:hidden'>Threads</p>
        </Link>
        <div className='flex items-center gap-1'>
          <div className='block md:hidden'>
              <SignedIn>
                <SignOutButton>
                  <div className='flex  cursor-pointer'>
                      <Image 
                      alt='logout'
                      width={24}
                      height={24}
                      src='/assets/logout.svg'/>
                  </div>
                  
                </SignOutButton>
              </SignedIn>
          </div>
          <div>
            <OrganizationSwitcher
            appearance={{
              baseTheme:dark,
              elements:{
                organizationSwitcherTrigger:'py-2 px-4'
              }
            }}
            />
          </div>
        </div>
    </nav>
  )
}

export default Topbar