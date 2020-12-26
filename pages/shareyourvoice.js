import DirectusSDK from "@directus/sdk-js"
import Link from "next/link"
import { useState } from 'react'
import Layout from '../components/Layout'

export async function getStaticProps() {
    let shareyourvoiceItems = []
    const client = new DirectusSDK({
        url: "https://api.peoplesvaccine.co.ke/",
        project: "peoples-vaccine",
    })
    await client.getItems('shareyourvoice')
        .then(data => {
            data.data.map(shareyourvoice => {
                console.log(shareyourvoice)
                console.log('hererere')
                shareyourvoiceItems.push(shareyourvoice)
            })
        })
        .catch(error => console.log(error))
    return {
        props: {
            shareyourvoiceItems
        },
        revalidate: 1,
    }
}

export default function ShareYourVoicePage({ shareyourvoiceItems, optOut, setOptOut, dismissPrivacyBanner, setDismissPrivacyBanner }) {
    const seo = {
        title: "Share your voice",
        description: "Share your voice to help support the #PeoplesVaccineKE campaign efforts",
        canonical: "https://peoplesvaccine.co.ke/shareyourvoice",
        openGraph: {
            url: 'https://peoplesvaccine.co.ke/shareyourvoice',
            title: 'Share your voice',
            description: 'Share your voice to help support the #PeoplesVaccineKE campaign efforts',
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
            {shareyourvoiceItems.map(shareyourvoiceItem => {
                return (
                    <div key={shareyourvoiceItem.id} className="mx-24 mt-10">
                        <Link href={`/${shareyourvoiceItem.url}`}><a>
                            <h2 style={{
                                color: '#993333',
                                fontFamily: 'Montserrat',
                                fontWeight: '600',
                                fontStyle: 'italic',
                                textDecoration: 'underline'
                            }} className="text-xl">
                                {shareyourvoiceItem.title}
                            </h2>
                            <p className="mt-3 mb-1">{shareyourvoiceItem.summary}</p>
                            <span style={{
                                color: '#993333',
                                fontFamily: 'Montserrat',
                                fontWeight: '600',
                                fontStyle: 'italic',
                            }} className="text-sm">Click to learn more...</span>
                        </a></Link>
                    </div>
                )
            })}
        </Layout>
    )
}
