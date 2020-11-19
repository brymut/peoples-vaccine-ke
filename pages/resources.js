import Nav from '../components/Navigation'
import Head from 'next/head'
import DirectusSDK from "@directus/sdk-js"
import { useEffect } from 'react'
import Layout from '../components/Layout'


export async function getStaticProps() {
    let resources = []
    const client = new DirectusSDK({
        url: "https://api.peoplesvaccine.co.ke/",
        project: "peoples-vaccine",
    })
    await client.getItems('resources')
        .then(data => {
            data.data.map(resource => {
                resources.push(resource)
            })
        })
        .catch(error => console.log(error))
    return {
        props: {
            resources
        },
        revalidate: 1,
    }
}


export default function ResourcesPage({ resources, optOut, setOptOut, dismissPrivacyBanner, setDismissPrivacyBanner }) {
    const seo = {
        title: "#PeoplesVaccineKE - Resources",
        description: "Resources you can use to learn more about the #PeoplesVaccineKE campaign.",
        canonical: "https://peoplesvaccine.co.ke/resources",
        openGraph: {
            url: 'https://peoplesvaccine.co.ke/resources',
            title: '#PeoplesVaccineKE - Resources',
            description: 'Resources you can use to learn more about the #PeoplesVaccineKE campaign.',
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
    useEffect(() => {
        window.twttr.widgets.load()
    })
    return (
        <Layout seo={seo} optOut={optOut} setOptOut={setOptOut} dismissPrivacyBanner={dismissPrivacyBanner} setDismissPrivacyBanner={setDismissPrivacyBanner}>
            <div className="grid grid-cols-1 lg:grid-cols-2 mx-5 lg:mx-20">
                {resources.map(resource => {
                    if (resource.resource_link.startsWith("https://twitter.com")) {
                        return (
                            <blockquote key={resource.resource_id} className="twitter-tweet">
                                <a href={resource.resource_link} />
                            </blockquote>
                        )
                    }
                    return (
                        <div key={resource.resource_id} className="my-10 ml-6">
                            <a href={resource.resource_link}><h3 style={{
                                color: '#993333',
                                fontFamily: 'Montserrat',
                                fontWeight: '500',
                            }} className="text-xl mt-5">{resource.resource_title}</h3></a>
                            <p>{resource.resource_description}</p>
                        </div>
                    )
                })}
            </div>
        </Layout>
    )
}
