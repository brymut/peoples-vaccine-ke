import Nav from '../components/nav'
import Head from 'next/head'


export default function ResourcesPage({ optOut, setOptOut, dismissPrivacyBanner, setDismissPrivacyBanner }) {
    return (
        <>
            <Head>
                <title>#PeoplesVaccineKE - Resources</title>
                <meta name="twitter:title" content=">#PeoplesVaccineKE - Resources" />
                <meta name="twitter:description" content="Resources you can use to learn more." />
                <meta property="og:title" content="#PeoplesVaccineKE - Resources" />
                <meta property="og:description" content="Resources you can use to learn more." />
                <meta name="twitter:url" content="https://peoplesvaccine.co.ke/resources" />
                <meta property="og:url" content="https://peoplesvaccine.co.ke/resources" />
                <meta property="og:type" content="website" />


            </Head>
            <Nav optOut={optOut} setOptOut={setOptOut} dismissPrivacyBanner={dismissPrivacyBanner} setDismissPrivacyBanner={setDismissPrivacyBanner} />
            <div className="mx-32 mt-16 flex items-center">
                <p style={{ width: '410px' }} className="ml-32">Resources page</p>
            </div>
        </>
    )
}
