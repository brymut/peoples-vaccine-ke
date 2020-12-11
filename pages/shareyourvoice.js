import Nav from '../components/Navigation'
import Head from 'next/head'
import { useState } from 'react'
import Layout from '../components/Layout'


export default function ShareYourVoicePage({ optOut, setOptOut, dismissPrivacyBanner, setDismissPrivacyBanner }) {
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
    const [questionnaireOpen, setQuestionnaireOpen] = useState(false)
    const questionnairePreamble = 'We have a  questionnaire to help us understand the needs, worries and influences of Kenyans to why the need for a #peoplesVaccine is urgent and necessary. The findings of this research will be compiled into a consolidated report and published for sharing and further education.'
    return (
        <Layout seo={seo} optOut={optOut} setOptOut={setOptOut} dismissPrivacyBanner={dismissPrivacyBanner} setDismissPrivacyBanner={setDismissPrivacyBanner}>
            <div className={` ${questionnaireOpen ? 'mx-0' : 'mx-6'} mb-40 lg:mx-32 mt-10 flex items-center justify-center`}>
                {questionnaireOpen ?
                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeVaBa0cYzjfUAmXuec4kTC2mRDiFcTHXcyV7BrybbxJet5MQ/viewform?embedded=true" width="100%" height="1800" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                    :
                    <p>{questionnairePreamble}<br /><button className='pt-2' type='button' onClick={e => setQuestionnaireOpen(true)}> Click <span style={{ color: '#993333' }}>here</span> to start the questionnaire</button></p>
                }
            </div>
        </Layout>
    )
}
