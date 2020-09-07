import Nav from '../components/nav'
import Head from 'next/head'


export default function ContactPage() {
    return (
        <>
            <Head>
                <title>#PeoplesVaccine - Contact</title>
            </Head>
            <Nav />
            <div className="mx-32 mt-16 flex items-center">
                <p style={{ width: '410px' }} className="ml-32">Contact page</p>
            </div>
        </>
    )
}
