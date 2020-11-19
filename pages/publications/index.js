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
        title: "#PeoplesVaccineKE - Publications",
        description: "Publications the #PeoplesVaccineKE campaign collaborators have authored.",
        canonical: "https://peoplesvaccine.co.ke/publications",
        openGraph: {
            url: 'https://peoplesvaccine.co.ke/publications',
            title: '#PeoplesVaccineKE - Publications',
            description: 'Publications the #PeoplesVaccineKE campaign collaborators have authored.',
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
            <div className="grid grid-cols-1 mx-5 lg:mx-20">
                {publications.map(publication => {
                    return (
                        <div className="my-10 ml-6">
                            <Link key={publication.id} href={`publications/${publication.slug}`}>
                                <a>
                                    <h3 style={{
                                        color: '#993333',
                                        fontFamily: 'Montserrat',
                                        fontWeight: '500',
                                    }} className="text-xl">{publication.title}</h3>


                                    <p className="mt-5">{publication.summary}</p>
                                    <p className="mt-5">Written by: <span style={{
                                        color: '#993333',
                                        fontFamily: 'Montserrat',
                                        fontWeight: '500',
                                    }}>{publication.author}</span></p>
                                </a>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </Layout >
    )
}
