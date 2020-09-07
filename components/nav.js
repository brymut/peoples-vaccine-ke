import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Nav() {
  const router = useRouter()
  return (
    <nav className="lg:mx-32 my-8">
      <h1 style={{
        color: 'white',
        fontFamily: 'Cubano-Regular',
        WebkitTextFillColor: 'white',
        WebkitTextStrokeWidth: '1px',
        WebkitTextStrokeColor: '#6930C3',
        textAlign: 'center'
      }} className="text-3xl lg:hidden">#PeoplesVaccineKE</h1>
      <h2 style={{
        color: 'white',
        fontFamily: 'Cubano-Regular',
        WebkitTextFillColor: 'white',
        WebkitTextStrokeWidth: '0.5px',
        WebkitTextStrokeColor: '#6930C3',
        textAlign: 'center'
      }} className="lg:hidden text-sm">No one is safe until we are all safe</h2>
      <ul className='lg:hidden flex justify-around mt-4'>

        {
          router.pathname === '/contact' ? null :
            <li>
              <Link href="/contact">
                <a style={{ color: '#7400B8', fontFamily: 'Pt Sans' }} className="no-underline">Contact</a>
              </Link>
            </li>
        }



        {
          router.pathname === '/shareyourvoice' ? null :
            <li>
              <Link href="/shareyourvoice">
                <a style={{ color: '#7400B8', fontFamily: 'Pt Sans' }} className="no-underline">Share your voice</a>
              </Link>
            </li>
        }



        {
          router.pathname === '/' ? null :
            <li>
              <Link href="/">
                <a style={{ color: '#7400B8', fontFamily: 'Pt Sans' }} className="no-underline">Read our Demands</a>
              </Link>
            </li>
        }


        {
          router.pathname === '/resources' ? null :
            <li>
              <Link href="/resources" >
                <a style={{ color: '#7400B8', fontFamily: 'Pt Sans' }} className="no-underline lg:hidden">Resources</a>
              </Link>
            </li>
        }
      </ul>
      <ul className="flex lg:justify-between lg:items-center">
        <li className='hidden lg:block'>
          {
            router.pathname === '/contact' ? null : <>
              <Link href="/contact">
                <a style={{ color: '#7400B8', fontFamily: 'Pt Sans' }} className="no-underline">Contact</a>
              </Link>
              <div className='hidden lg:block'>
                <br></br>
                <br></br>
              </div>
            </>
          }
          {
            router.pathname === '/shareyourvoice' ? null : <Link href="/shareyourvoice">
              <a style={{ color: '#7400B8', fontFamily: 'Pt Sans' }} className="no-underline">Share your voice</a>
            </Link>
          }
        </li>
        <li>
          <h1 style={{
            color: 'white',
            fontFamily: 'Cubano-Regular',
            WebkitTextFillColor: 'white',
            WebkitTextStrokeWidth: '2px',
            WebkitTextStrokeColor: '#6930C3'
          }} className="hidden lg:block text-5xl">#PeoplesVaccineKE</h1>
          <h2 style={{
            color: 'white',
            fontFamily: 'Cubano-Regular',
            WebkitTextFillColor: 'white',
            WebkitTextStrokeWidth: '1px',
            WebkitTextStrokeColor: '#6930C3',
            textAlign: 'center'
          }} className="hidden lg:block text-xl">No one is safe until we are all safe</h2>
          {
            router.pathname === '/' ? null : <Link href="/">
              <a style={{ color: '#7400B8', fontFamily: 'Pt Sans', margin: '35%' }} className="no-underline mt-10 hidden lg:block">Read our Demands</a>
            </Link>}

        </li>
        <ul className="flex justify-between items-center space-x-4">
          {
            router.pathname === '/resources' ? null :
              <Link href="/resources">
                <a style={{ color: '#7400B8', fontFamily: 'Pt Sans' }} className="no-underline hidden lg:block">Resources</a>
              </Link>
          }
        </ul>
      </ul>
    </nav >
  )
}
