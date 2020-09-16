import Link from 'next/link'
import { useRouter } from 'next/router'
import PrivacyPolicyBanner from './privacyPolicyBanner'

export default function Nav({ optOut, setOptOut, dismissPrivacyBanner, setDismissPrivacyBanner }) {
  const router = useRouter()
  return (
    <>
      <PrivacyPolicyBanner optOut={optOut} setOptOut={setOptOut} dismissPrivacyBanner={dismissPrivacyBanner} setDismissPrivacyBanner={setDismissPrivacyBanner} />
      <nav className="lg:mx-32" >
        <Link href="/">
          <picture>
            <source type="image/webp" srcSet="/images/logo-transparent.webp" />
            <a href="#" aria-label="Peoples vaccine Kenya logo">
              <img src='/images/logo-transparent.png' width='200px' height='200px' alt='Peoples vaccine ke main logo' className="mx-auto lg:hidden" />
            </a>
          </picture>
        </Link>
        <ul className='h-24 flex flex-col justify-between text-center underline lg:hidden'>
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
            <Link href="/">
              <picture>
                <source type="image/webp" srcSet="/images/logo-transparent.webp" />
                <a href="#" aria-label="Peoples vaccine Kenya logo">
                  <img src='/images/logo-transparent.png' width='275px' height='275px' alt='Peoples vaccine ke main logo' />
                </a>
              </picture>
            </Link>
            {
              router.pathname === '/' ? null :
                <Link href="/">
                  <a style={{ color: '#993333', fontFamily: 'Montserrat', fontWeight: '600' }} className="no-underline text-center hidden lg:block">Read our Demands</a>
                </Link>
            }

          </li>
          <li>
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
          </li>
        </ul>
      </nav >
    </>

  )
}
