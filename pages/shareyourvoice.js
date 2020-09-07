import Nav from '../components/nav'
import Head from 'next/head'


export default function ShareYourVoicePage() {
    return (
        <>
            <Head>
                <title>#PeoplesVaccine - Share your voice</title>
            </Head>
            <Nav />
            <div className="mx-32 mt-16 flex items-center">
                <p style={{ width: '410px' }} className="ml-32">Share your voice page</p>
            </div>
        </>
    )
}
