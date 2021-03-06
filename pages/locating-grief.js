import DirectusSDK from "@directus/sdk-js"
import Layout from '../components/Layout'
import Link from "next/link"
import { ArticleJsonLd } from 'next-seo';


export async function getStaticProps() {
    let locatingGrief;
    const client = new DirectusSDK({
        url: "https://api.peoplesvaccine.co.ke/",
        project: "peoples-vaccine",
    })
    await client.getItems('shareyourvoice', {
        filter: {
            id: { eq: 2 }
        }
    })
        .then(data => {
            data.data.map(locatingGriefData => {
                locatingGrief = locatingGriefData;
            })
        })
        .catch(error => console.log(error))
    return {
        props: {
            locatingGrief
        },
        revalidate: 1,
    }
}


export default function LocatingGriefPage({ locatingGrief, optOut, setOptOut, dismissPrivacyBanner, setDismissPrivacyBanner }) {
    const seo = {
        title: `${locatingGrief.title} - Peoples Vaccine Kenya - #PeoplesVaccineKE`,
        description: `${locatingGrief.summary}`,
        canonical: "https://peoplesvaccine.co.ke/locating-grief",
        openGraph: {
            url: 'https://peoplesvaccine.co.ke/locating-grief',
            title: `${locatingGrief.title} - Peoples Vaccine Kenya - #PeoplesVaccineKE`,
            description: `${locatingGrief.summary}`,
            images: [
                {
                    url: 'https://peoplesvaccine.co.ke/images/locating-grief-as-a-community.png',
                    width: 560,
                    height: 300,
                    alt: 'Og Image Alt',
                },
                {
                    url: 'https://peoplesvaccine.co.ke/images/locating-grief-as-a-community.png',
                    width: 560,
                    height: 300,
                    alt: 'Og Image Alt Second',
                }
            ],
        }
    }
    return (
        <Layout seo={seo} optOut={optOut} setOptOut={setOptOut} dismissPrivacyBanner={dismissPrivacyBanner} setDismissPrivacyBanner={setDismissPrivacyBanner}>
            <ArticleJsonLd
                url='https://peoplesvaccine.co.ke/locating-grief'
                title={locatingGrief.title}
                images={['https://peoplesvaccine.co.ke/images/logo-banner.jpg', 'https://peoplesvaccine.co.ke/images/logo-banner.png']}
                datePublished={locatingGrief.created_on}
                dateModified={locatingGrief.created_on}
                authorName="#PeoplesVaccineKE"
                publisherName="#PeoplesVaccineKE"
                publisherLogo="https://peoplesvaccine.co.ke/images/logo-banner.jpg"
                description={locatingGrief.summary}
            />
            <div className="lg:mx-32 mb-32">
                <h1 style={{ color: "#993333", fontSize: "28px", fontFamily: 'Montserrat', fontWeight: '700', fontStyle: 'italic' }} className="text-center mt-8 lg:hidden">{locatingGrief.title}</h1>
                <h1 style={{ color: "#993333", fontSize: "32px", fontFamily: 'Montserrat', fontWeight: '700', fontStyle: 'italic' }} className="text-center mt-16 hidden lg:block">{locatingGrief.title}</h1>
                <section id='summary' className='mt-5 lg:mt-10 flex flex-col items-center' >
                    <div id='mobile-video' className="lg:hidden">
                        <iframe width="360" height="215" src="https://www.youtube.com/embed/NyZpIzcbxCs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div id='desktop-video' className="hidden lg:block">
                        <iframe width="660" height="415" src="https://www.youtube.com/embed/NyZpIzcbxCs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <p className="mt-10 mx-3 lg:mx-0">{locatingGrief.description}</p>
                </section>
                <section id='form' className='mt-5 flex flex-col items-center'>
                    <p className=" my-8 mx-3 lg:mx-0">If you would like to access mental wellness and emotional support please fill the form below.</p>
                    <div id="mobile-form" className="lg:hidden">
                        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScEZzU1N5yMPBab9AObsYxfbHmVNR1cED9mt5ehPfc9TpAvEg/viewform?embedded=true" width="375" height="2278" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                    </div>
                    <div id="desktop-form" className="hidden lg:block">
                        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScEZzU1N5yMPBab9AObsYxfbHmVNR1cED9mt5ehPfc9TpAvEg/viewform?embedded=true" width="740" height="1778" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                    </div>
                </section>
            </div>

        </Layout >
    )
}
