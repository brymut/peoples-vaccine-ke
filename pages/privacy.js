import Nav from '../components/nav'
import Head from 'next/head'
import DirectusSDK from "@directus/sdk-js";

export async function getStaticProps() {
    let privacyPolicyHtml = ''
    const client = new DirectusSDK({
        url: "https://api.peoplesvaccine.co.ke/",
        project: "peoples-vaccine",
    })
    await client.getItems('privacypolicy')
        .then(data => {
            data.data.map(privacyPolicy => {
                privacyPolicyHtml = privacyPolicy.privacy_policy_text
                console.log(privacyPolicyHtml)
            })
        })
        .catch(error => console.log(error))
    return {
        props: {
            privacyPolicyHtml
        },
        revalidate: 1,
    }
}

export default function PrivacyPolicyPage({ privacyPolicyHtml, optOut, setOptOut, dismissPrivacyBanner, setDismissPrivacyBanner }) {
    return (
        <>
            <Head>
                <title>#PeoplesVaccineKE - Privacy</title>
                <meta name="twitter:title" content="#PeoplesVaccineKE - Privacy" />
                <meta name="twitter:description" content="The #PeoplesVaccineKE privacy policy statement." />
                <meta property="og:title" content="#PeoplesVaccineKE - Privacy" />
                <meta property="og:description" content="The #PeoplesVaccineKE privacy policy statement." />
                <meta name="twitter:url" content="https://peoplesvaccine.co.ke/privacy" />
                <meta property="og:url" content="https://peoplesvaccine.co.ke/privacy" />
                <meta property="og:type" content="website" />
            </Head>
            <Nav optOut={optOut} setOptOut={setOptOut} dismissPrivacyBanner={dismissPrivacyBanner} setDismissPrivacyBanner={setDismissPrivacyBanner} />
            <div className="mt-8 lg:mt-4 lg:mx-32 mx-8 mb-32 lg:items-center privacy-policy" dangerouslySetInnerHTML={{ __html: privacyPolicyHtml }}></div>
        </>
    )
}
