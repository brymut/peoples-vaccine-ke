import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'

export default function Navigation() {
  const router = useRouter()
  if (router.pathname === "/swahili")
    return (
      <header>
        <nav aria-label='mobile navigation' style={{ color: "#993333", fontSize: "14px", fontFamily: 'Montserrat', fontWeight: '700', fontStyle: 'italic', textDecoration: 'underline' }} className=" flex flex-col items-center md:hidden">
        <Link href="/">
          <a>
            <Image
              src="/images/logo-transparent.png"
              alt="Peoples vaccine KE logo"
              width={150}
              height={150}
            />
          </a>
        </Link>
        <Link href="/">
            <a className="text-center mt-5">Read in English</a>
        </Link>
      </nav>
        <nav aria-label='desktop navigation' style={{ color: "#993333", fontSize: "18px", fontFamily: 'Montserrat', fontWeight: '700', fontStyle: 'italic', textDecoration: 'underline' }} className="hidden md:flex md:mx-32 mt-5 h-40 justify-center" >
        <div className="-my-10 flex flex-col" >
          <Link href="/">
            <a>
              <Image
                src="/images/logo-transparent.png"
                alt="Peoples vaccine KE logo"
                width={200}
                height={200}
              />
            </a>
          </Link>
          <Link href="/">
            <a className="text-center">Read in English</a>
          </Link>
        </div>
      </nav>
      </header>
  )
  else
    return (
      <header>
        <nav aria-label='mobile navigation' style={{ color: "#993333", fontSize: "14px", fontFamily: 'Montserrat', fontWeight: '700', fontStyle: 'italic', textDecoration: 'underline' }} className="flex flex-col items-center md:hidden">

          <div className="grid grid-cols-2 gap-5 justify-center text-center">
          <Link href="/">
              <a className="col-start-1 col-span-2 -mt-6 -mb-4">
              <Image
                src="/images/logo-transparent.png"
                alt="Peoples vaccine KE logo"
                width={150}
                height={150}
              />
            </a>
            </Link>
            <Link href="/shareyourvoice">
              <a>Share your voice</a>
            </Link>
            <Link href="/swahili">
              <a>Soma kwa kiswahili</a>
            </Link>
            <Link href="/resources">
              <a>Resources & FAQs</a>
            </Link>
            <Link href="/contact">
              <a>Contact us</a>
            </Link>
          </div>
          <Link href="/publications">
            <a className="mt-5">Publications</a>
          </Link>
        </nav>

        <nav aria-label='desktop navigation' style={{ color: "#993333", fontSize: "18px", fontFamily: 'Montserrat', fontWeight: '700', fontStyle: 'italic', textDecoration: 'underline' }} className="hidden md:grid grid-cols-6 gap-4 md:mx-32 mt-5 justify-between h-48">
          <Link href="/shareyourvoice">
            <a title="Share your voice" className="col-start-1 col-span-2" >Share your voice</a>
          </Link>
          <Link href="/">
            <a title="Go to homepage" className="hidden md:block col-start-3 col-span-2 -mt-10 -mb-48" style={{ justifySelf: 'center' }}>
            <Image
              src="/images/logo-transparent.png"
              alt="Peoples vaccine KE logo"
              width={200}
              height={200}
            />
            </a>
          </Link>
          <Link href="/resources">
            <a title="Resources and FAQs" className="col-start-5 col-span-2 " style={{ justifySelf: 'end' }}>Resources & FAQs</a>
          </Link>
          <Link href="/contact">
            <a title="Contact us" className="col-start-1 col-span-2">Contact us</a>
          </Link>
          <Link href="/swahili">
            <a title="Soma kwa kiswahili" className="col-start-3 col-span-2 mt-20" style={{ justifySelf: 'center' }}>Soma kwa kiswahili</a>
          </Link>
          <Link href="/publications">
            <a title="Publications" className="col-start-5 col-span-2 " style={{ justifySelf: 'end' }}>Publications</a>
          </Link>
        </nav>
      </header>
    )
}
