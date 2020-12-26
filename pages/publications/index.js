import DirectusSDK from "@directus/sdk-js"
import Layout from '../../components/Layout'
import Link from "next/link"


export async function getStaticProps() {
    let publications = []
    const client = new DirectusSDK({
        url: "https://api.peoplesvaccine.co.ke/",
        project: "peoples-vaccine",
    })
    await client.getItems('publications')
        .then(data => {
            data.data.map(publication => {
                publications.push(publication)
            })
        })
        .catch(error => console.log(error))
    return {
        props: {
            publications
        },
        revalidate: 1,
    }
}


export default function PublicationsPage({ publications, optOut, setOptOut, dismissPrivacyBanner, setDismissPrivacyBanner }) {
    const seo = {
        title: "Publications - #PeoplesVaccineKE",
        description: "Written and published material by the #PeoplesVaccineKE campaign and its partners.",
        canonical: "https://peoplesvaccine.co.ke/publications",
        openGraph: {
            url: 'https://peoplesvaccine.co.ke/publications',
            title: 'Publications - #PeoplesVaccineKE',
            description: 'Written and published material by the #PeoplesVaccineKE campaign and its partners.',
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
    const publicationsAttributionMarkup = { __html: '<p xmlns:dct="http://purl.org/dc/terms/" xmlns:cc="http://creativecommons.org/ns#" class="license-text"><a rel="cc:attributionURL" property="dct:title" href="peoplesvaccine.co.ke/">Publications for #PeoplesVaccineKE </a> by <a rel="cc:attributionURL dct:creator" property="cc:attributionName" href="peoplesvaccine.co.ke">The #PeoplesVaccineKE campaign</a> is licensed under <a style="display:flex;" rel="license" href="https://creativecommons.org/licenses/by-nc/4.0">CC BY-NC 4.0<img alt="creative commons logo" style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1" /><img alt="creative commons attribution logo" style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1" /><img alt="creative commons non-commercial logo" style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1" /></a></p>' }
    return (
        <Layout seo={seo} optOut={optOut} setOptOut={setOptOut} dismissPrivacyBanner={dismissPrivacyBanner} setDismissPrivacyBanner={setDismissPrivacyBanner}>
            <div className="grid grid-cols-1 mx-5 lg:mx-20">
                <h3 style={{
                    color: '#993333',
                    fontFamily: 'Montserrat',
                    fontWeight: '600',
                    fontStyle: 'italic',
                }} className="mt-10">Written and published material by the #PeoplesVaccineKE campaign and its partners.</h3>
                {publications.map(publication => {
                    return (
                        <div key={publication.id} className="my-10">
                            <Link href={`publications/${publication.slug}`}>
                                <a>
                                    <h1 style={{
                                        color: '#993333',
                                        fontFamily: 'Montserrat',
                                        fontWeight: '600',
                                        fontStyle: 'italic',
                                        textDecoration: 'underline'
                                    }} className="text-xl">{publication.title}</h1>


                                    <p className="mt-5">{publication.summary}</p>
                                    <h2 className="mt-5">Written by: <span style={{
                                        color: '#993333',
                                        fontFamily: 'Montserrat',
                                        fontWeight: '500',
                                    }}>{publication.author}</span></h2>
                                </a>
                            </Link>
                        </div>
                    )
                })}
                <section id='attribution' className='mb-32' >
                    <div className='flex justify-center my-6 mx-3' dangerouslySetInnerHTML={publicationsAttributionMarkup} />
                </section>
            </div>
        </Layout >
    )
}
