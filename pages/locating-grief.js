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
    console.log(locatingGrief, 'foundi t =========')
    return {
        props: {
            locatingGrief
        },
        revalidate: 1,
    }
}


export default function LocatingGriefPage({ locatingGrief, optOut, setOptOut, dismissPrivacyBanner, setDismissPrivacyBanner }) {
    const seo = {
        title: `${locatingGrief.title} - #PeoplesVaccineKE`,
        description: `${locatingGrief.summary}`,
        canonical: "https://peoplesvaccine.co.ke/locating-grief",
        openGraph: {
            url: 'https://peoplesvaccine.co.ke/locating-grief',
            title: `${locatingGrief.title} - #PeoplesVaccineKE`,
            description: `${locatingGrief.summary}`,
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
            <div className=" mx-32 mb-32">
                <h1 style={{ color: "#993333", fontSize: "32px", fontFamily: 'Montserrat', fontWeight: '700', fontStyle: 'italic' }} className="text-center mt-16">{locatingGrief.title}</h1>
                <section id='summary' className='mt-10 flex flex-col items-center' >
                    <iframe className="" width="660" height="415" src="https://www.youtube.com/embed/NyZpIzcbxCs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <p className="mt-10">{locatingGrief.description}</p>
                </section>
                <section id='form' className='mt-5 flex flex-col items-center'>
                    <p className=" my-8">If you would like to access mental wellness and emotional support please fill the form below.</p>
                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScEZzU1N5yMPBab9AObsYxfbHmVNR1cED9mt5ehPfc9TpAvEg/viewform?embedded=true" width="740" height="1778" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                </section>
            </div>

        </Layout >
    )
}
