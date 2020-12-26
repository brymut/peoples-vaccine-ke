import DirectusSDK from "@directus/sdk-js"
import useSWR from 'swr'
import { useState, useEffect } from 'react'
import { ArticleJsonLd } from 'next-seo';

import Layout from '../../components/Layout'
import Link from "next/link"

const fetcher = url => fetch(url).then(r => r.json())

const client = new DirectusSDK({
    url: "https://api.peoplesvaccine.co.ke/",
    project: "peoples-vaccine",
})


export async function getStaticProps({ params }) {
    let publication;
    await client.getItems('publications', {
        filter: {
            slug: {
                eq: params.slug
            }
        }
    })
        .then(data => {
            data.data.map(fetchedPublication => {
                publication = fetchedPublication
            })
        })
        .catch(error => console.log(error))
    return {
        props: {
            publication
        },
        revalidate: 1,
    }
}

export async function getStaticPaths() {

    let publications = []
    const client = new DirectusSDK({
        url: "https://api.peoplesvaccine.co.ke/",
        project: "peoples-vaccine",
    })
    await client.getItems('publications')
        .then(data => {
            data.data.map(publication => {
                console.log('the pibl', publication)
                publications.push(publication)
            })
        })
        .catch(error => console.log(error))

    const paths = publications.map((publication) => ({
        params: { slug: publication.slug }
    }))

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
}

const DownloadLink = ({ data, error }) => {
    if (error) return null
    if (!data) return <p className="lg:mx-32 mx-8 mb-32">loading download link</p>
    const downloadUrl = `https://api.peoplesvaccine.co.ke${data.data.data.asset_url}`
    return <div className="lg:mx-32 mx-8 mb-32"><a href={downloadUrl} target="_blank" style={{ color: "#993333", fontSize: "14px", fontFamily: 'Montserrat', fontWeight: '700', fontStyle: 'italic' }} >Click or tap here to get the pdf version of this publication.</a></div>
}


export default function PublicationPage({ publication, optOut, setOptOut, dismissPrivacyBanner, setDismissPrivacyBanner }) {
    const seo = {
        title: `${publication.title} by ${publication.author} - #PeoplesVaccineKE`,
        description: `${publication.summary}`,
        canonical: `https://peoplesvaccine.co.ke/publications/${publication.slug}`,
        openGraph: {
            url: `https://peoplesvaccine.co.ke/publications/${publication.slug}`,
            title: `${publication.title} by ${publication.author} - #PeoplesVaccineKE`,
            description: `${publication.summary}`,
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
    const { data, error } = useSWR(`https://api.peoplesvaccine.co.ke/peoples-vaccine/files/${publication.pdf}`, fetcher)
    const pdfFilename = `${publication.title}.pdf`
    return (
        <Layout seo={seo} optOut={optOut} setOptOut={setOptOut} dismissPrivacyBanner={dismissPrivacyBanner} setDismissPrivacyBanner={setDismissPrivacyBanner}>
            <ArticleJsonLd
                url={`https://peoplesvaccine.co.ke/publications/${publication.slug}`}
                title={publication.title}
                images={['https://peoplesvaccine.co.ke/images/logo-banner.jpg', 'https://peoplesvaccine.co.ke/images/logo-banner.png']}
                datePublished={publication.created_on}
                dateModified={publication.modified_on}
                authorName={publication.author}
                publisherName="#PeoplesVaccineKE"
                publisherLogo="https://peoplesvaccine.co.ke/images/logo-banner.jpg"
                description={publication.summary}
            />
            <div className="md:hidden">
                <h1 style={{ color: "#993333", fontSize: "24px", fontFamily: 'Montserrat', fontWeight: '700', fontStyle: 'italic' }} className="text-center mt-10">
                    {publication.title}
                </h1>
                <h2 style={{ color: "#993333", fontSize: "14px", fontFamily: 'Montserrat', fontWeight: '600' }} className="text-center mb-10 mt-5">
                    {publication.author}
                </h2>
            </div>
            <div className="hidden md:block">
                <h1 style={{ color: "#993333", fontSize: "36px", fontFamily: 'Montserrat', fontWeight: '700', fontStyle: 'italic' }} className="text-center mt-10">
                    {publication.title}
                </h1>
                <h2 style={{ color: "#993333", fontSize: "18px", fontFamily: 'Montserrat', fontWeight: '600' }} className="text-center mb-10">
                    {publication.author}
                </h2>
            </div>
            <div className="mt-10 lg:mt-4 lg:mx-32 mx-8 mb-5 lg:items-center publication" dangerouslySetInnerHTML={{ __html: publication.text }}></div>
            <DownloadLink data={data} error={error} pdfFilename={pdfFilename} />
        </Layout >
    )
}
