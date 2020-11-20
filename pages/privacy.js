import Navigation from '../components/Navigation'
import Layout from  '../components/Layout'
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
    const seo = {
        title: "#PeoplesVaccineKE - Privacy",
        description: "The #PeoplesVaccineKE privacy policy statement.",
        canonical: "https://peoplesvaccine.co.ke/privacy",
        openGraph: {
            url: 'https://peoplesvaccine.co.ke/privacy',
            title: '#PeoplesVaccineKE - Privacy',
            description: 'The #PeoplesVaccineKE privacy policy statement.',
            images: [
                {
                    url: 'https://peoplesvaccine.co.ke/images/logo-banner.jpg',
                    width: 800,
                    height: 292,
                    alt: 'Og Image Alt',
                },
                {
                    url: 'https://peoplesvaccine.co.ke/images/logo-banner.png',
                    width: 1244,
                    height: 454,
                    alt: 'Og Image Alt Second',
                }
            ],
        }
    }
    return (
        <Layout seo={seo} optOut={optOut} setOptOut={setOptOut} dismissPrivacyBanner={dismissPrivacyBanner} setDismissPrivacyBanner={setDismissPrivacyBanner}>
            <div className='mt-12 lg:mt-4 lg:mx-32 mx-8 mb-12 '>
                {optOut ? <p>You have opted out of Google Analytics cookie tracking</p> : <p>Google Analytics tracking via cookies is currently enabled</p>}
                <p>This privacy policy takes effect on the 21st of September 2020</p>
                <p>There are currently no revisions, this is the first version.</p>
            </div>
            <div className="mt-8 lg:mt-4 lg:mx-32 mx-8 mb-32 lg:items-center privacy-policy" dangerouslySetInnerHTML={{ __html: privacyPolicyHtml }}></div>
        </Layout>
    )
}
