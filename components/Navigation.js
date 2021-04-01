import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'

export default function Navigation() {
  const router = useRouter()
  if (router.pathname === "/swahili") return (
    <>
      <nav style={{ color: "#993333", fontSize: "14px", fontFamily: 'Montserrat', fontWeight: '700', fontStyle: 'italic', textDecoration: 'underline' }} className=" flex flex-col items-center md:hidden">
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
      <nav style={{ color: "#993333", fontSize: "18px", fontFamily: 'Montserrat', fontWeight: '700', fontStyle: 'italic', textDecoration: 'underline' }} className="hidden md:flex md:mx-32 mt-5 h-40 justify-center" >

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
    </>
  )
  else
    return (
      <>
        <nav style={{ color: "#993333", fontSize: "14px", fontFamily: 'Montserrat', fontWeight: '700', fontStyle: 'italic', textDecoration: 'underline' }} className=" flex flex-col items-center md:hidden">
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
          <div className="grid grid-cols-2 gap-5 justify-center text-center">
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

        <nav style={{ color: "#993333", fontSize: "18px", fontFamily: 'Montserrat', fontWeight: '700', fontStyle: 'italic', textDecoration: 'underline' }} className="hidden md:flex md:mx-32 mt-5 justify-between h-40" >
          <div className="flex flex-col justify-around">
            <Link href="/shareyourvoice">
              <a>Share your voice</a>
            </Link>
            <Link href="/contact">
              <a>Contact us</a>
            </Link>
          </div>
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
            <Link href="/swahili">
              <a className="text-center">Soma kwa kiswahili</a>
            </Link>
          </div>
          <div className="flex flex-col justify-around text-right">
            <Link href="/resources">
              <a>Resources & FAQs</a>
            </Link>
            <Link href="/publications">
              <a>Publications</a>
            </Link>
          </div>
        </nav>
      </>
    )
}
