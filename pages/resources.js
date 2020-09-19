import Nav from '../components/nav'
import Head from 'next/head'
import DirectusSDK from "@directus/sdk-js"
import { useEffect } from 'react'


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
    useEffect(() => {
        window.twttr.widgets.load()
    })
    return (
        <>
            <Head>
                <title>#PeoplesVaccineKE - Resources</title>
                <meta name="twitter:title" content="#PeoplesVaccineKE - Resources" />
                <meta name="twitter:description" content="Resources you can use to learn more." />
                <meta property="og:title" content="#PeoplesVaccineKE - Resources" />
                <meta property="og:description" content="Resources you can use to learn more." />
                <meta name="twitter:url" content="https://peoplesvaccine.co.ke/resources" />
                <meta property="og:url" content="https://peoplesvaccine.co.ke/resources" />
                <meta property="og:type" content="website" />
            </Head>
            <Nav optOut={optOut} setOptOut={setOptOut} dismissPrivacyBanner={dismissPrivacyBanner} setDismissPrivacyBanner={setDismissPrivacyBanner} />
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


        </>
    )
}
