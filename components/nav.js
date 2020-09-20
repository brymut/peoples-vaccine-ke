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
        <ul className={`${router.pathname === '/swahili' ? 'h-4' : 'h-24'} flex flex-col justify-between text-center underline lg:hidden`}>
          {
            router.pathname === '/contact' || router.pathname === '/swahili' ? null :
              <li className='pt-1'>
                <Link href="/contact">
                  <a style={{ color: '#993333', fontFamily: 'Montserrat', fontWeight: '500' }} className="no-underline">Contact</a>
                </Link>
              </li>
          }
          {
            router.pathname === '/shareyourvoice' || router.pathname === '/swahili' ? null :
              <li className='pt-1'>
                <Link href="/shareyourvoice">
                  <a style={{ color: '#993333', fontFamily: 'Montserrat', fontWeight: '500' }} className="no-underline">Share your voice</a>
                </Link>
              </li>
          }
          {
            router.pathname === '/' ? null :
              <li className='pt-1'>
                <Link href="/">
                  <a style={{ color: '#993333', fontFamily: 'Montserrat', fontWeight: '500' }} className="no-underline">{`Read our Demands ${router.pathname === '/swahili' ? 'in English' : ''}`}</a>
                </Link>
              </li>
          }
          {
            router.pathname === '/resources' || router.pathname === '/swahili' ? null :
              <li className='pt-1'>
                <Link href="/resources" >
                  <a style={{ color: '#993333', fontFamily: 'Montserrat', fontWeight: '500' }} className="no-underline lg:hidden">Resources</a>
                </Link>
              </li>
          }
          {
            router.pathname === '/swahili' ?
              null
              :
              <li className='pt-1'>
                <Link href="/swahili" >
                  <a style={{ color: '#993333', fontFamily: 'Montserrat', fontWeight: '500' }} className="no-underline lg:hidden">Soma kwa kiswahili</a>
                </Link>
              </li>
          }
        </ul>
        <ul className="hidden lg:flex lg:justify-between lg:items-center">
          <li className=' w-40'>
            {
              router.pathname === '/contact' || router.pathname === '/swahili' ? null : <>
                <Link href="/contact">
                  <a style={{ color: '#993333', fontFamily: 'Montserrat', fontWeight: '600' }} className="no-underline">Contact</a>
                </Link>
                <br></br>
                <br></br>
              </>
            }
            {
              router.pathname === '/shareyourvoice' || router.pathname === '/swahili' ? null : <Link href="/shareyourvoice">
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
                  <a style={{ color: '#993333', fontFamily: 'Montserrat', fontWeight: '600' }} className="no-underline text-center hidden lg:block">{`Read our Demands ${router.pathname === '/swahili' ? 'in English' : ''}`}</a>
                </Link>
            }

          </li>
          <li>
            <ul className="flex flex-col justify-between items-center w-24 space-x-1 ">
              {
                router.pathname === '/resources' || router.pathname === '/swahili' ? null :
                  <li>
                    <Link href="/resources">
                      <a style={{ color: '#993333', fontFamily: 'Montserrat', fontWeight: '600' }} className="no-underline hidden lg:block">Resources</a>
                    </Link>
                    <br />
                  </li>
              }
              {
                router.pathname === '/swahili' ?
                  null
                  :
                  <li>
                    <Link href="/swahili">
                      <a style={{ color: '#993333', fontFamily: 'Montserrat', fontWeight: '600' }} className="no-underline hidden lg:block whitespace-no-wrap">Soma kwa kiswahili</a>
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
