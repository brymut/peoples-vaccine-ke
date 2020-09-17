import Nav from '../components/nav'
import Head from 'next/head'


export default function ResourcesPage({ optOut, setOptOut, dismissPrivacyBanner, setDismissPrivacyBanner }) {
    return (
        <>
            <Head>
                <title>#PeoplesVaccine - Resources</title>
                <meta name="twitter:title" content=">#PeoplesVaccineKE - Resources" />
                <meta name="twitter:description" content="Resources you can use to learn more." />

            </Head>
            <Nav optOut={optOut} setOptOut={setOptOut} dismissPrivacyBanner={dismissPrivacyBanner} setDismissPrivacyBanner={setDismissPrivacyBanner} />
            <div className="mx-32 mt-16 flex items-center">
                <p style={{ width: '410px' }} className="ml-32">Resources page</p>
            </div>
        </>
    )
}
