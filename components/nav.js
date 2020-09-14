import Link from 'next/link'
import { useRouter } from 'next/router'
// import PrivacyPolicyBanner from './privacyPolicyBanner'


export default function Nav() {
  const router = useRouter()
  return (
    <>
      <nav className="lg:mx-32 my-2" >
        <picture>
          <source type="image/webp" srcset="/images/logo-transparent.webp" />
          <img src='/images/logo-transparent.png' width='140px' height='140px' alt='Peoples vaccine ke main logo' className="mx-auto lg:hidden" />
        </picture>

        <ul className='flex justify-around lg:hidden mt-4'>
          {
            router.pathname === '/contact' ? null :
              <li>
                <Link href="/contact">
                  <a style={{ color: '#993333', fontFamily: 'Montserrat', fontWeight: '500' }} className="no-underline">Contact</a>
                </Link>
              </li>
          }
          {
            router.pathname === '/shareyourvoice' ? null :
              <li>
                <Link href="/shareyourvoice">
                  <a style={{ color: '#993333', fontFamily: 'Montserrat', fontWeight: '500' }} className="no-underline">Share your voice</a>
                </Link>
              </li>
          }
          {
            router.pathname === '/' ? null :
              <li>
                <Link href="/">
                  <a style={{ color: '#993333', fontFamily: 'Montserrat', fontWeight: '500' }} className="no-underline">Read our Demands</a>
                </Link>
              </li>
          }
          {
            router.pathname === '/resources' ? null :
              <li>
                <Link href="/resources" >
                  <a style={{ color: '#993333', fontFamily: 'Montserrat', fontWeight: '500' }} className="no-underline lg:hidden">Resources</a>
                </Link>
              </li>
          }
        </ul>
        <ul className="hidden lg:flex lg:justify-between lg:items-center">
          <li className=' w-40'>
            {
              router.pathname === '/contact' ? null : <>
                <Link href="/contact">
                  <a style={{ color: '#993333', fontFamily: 'Montserrat', fontWeight: '600' }} className="no-underline">Contact</a>
                </Link>
                <br></br>
                <br></br>
              </>
            }
            {
              router.pathname === '/shareyourvoice' ? null : <Link href="/shareyourvoice">
                <a style={{ color: '#993333', fontFamily: 'Montserrat', fontWeight: '600' }} className="no-underline">Share your voice</a>
              </Link>
            }
          </li>
          <li>
            <picture>
              <source type="image/webp" srcset="/images/logo-transparent.webp" />
              <img src='/images/logo-transparent.png' width='175px' height='175px' alt='Peoples vaccine ke main logo' />
            </picture>
            {
              router.pathname === '/' ? null :
                <Link href="/">
                  <a style={{ color: '#993333', fontFamily: 'Montserrat', fontWeight: '600' }} className="no-underline mt-5 text-center hidden lg:block">Read our Demands</a>
                </Link>
            }

          </li>
          <ul className="flex justify-between items-center w-24 space-x-1 ">
            {
              router.pathname === '/resources' ? null :
                <li>
                  <Link href="/resources">
                    <a style={{ color: '#993333', fontFamily: 'Montserrat', fontWeight: '600' }} className="no-underline hidden lg:block">Resources</a>
                  </Link>
                </li>
            }
          </ul>
        </ul>
      </nav >
    </>

  )
}
