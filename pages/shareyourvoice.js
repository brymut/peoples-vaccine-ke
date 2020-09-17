import Nav from '../components/nav'
import Head from 'next/head'


export default function ShareYourVoicePage({ optOut, setOptOut, dismissPrivacyBanner, setDismissPrivacyBanner }) {
    return (
        <>
            <Head>
                <title>#PeoplesVaccineKE - Share your voice</title>
                <meta name="twitter:title" content=">#PeoplesVaccineKE - Share your voice" />
                <meta name="twitter:description" content="Share your voice for #PeoplesVaccineKE" />
                <meta property="og:title" content="#PeoplesVaccineKE - Share your voice" />
                <meta property="og:description" content="Share your voice for #PeoplesVaccineKE" />
                <meta name="twitter:url" content="https://peoplesvaccine.co.ke/shareyourvoice" />
                <meta property="og:url" content="https://peoplesvaccine.co.ke/shareyourvoice" />
                <meta property="og:type" content="website" />

            </Head>
            <Nav optOut={optOut} setOptOut={setOptOut} dismissPrivacyBanner={dismissPrivacyBanner} setDismissPrivacyBanner={setDismissPrivacyBanner} />
            <div className="mx-32 mt-16 flex items-center">
                <p style={{ width: '410px' }} className="ml-32">Share your voice page</p>
            </div>
        </>
    )
}
