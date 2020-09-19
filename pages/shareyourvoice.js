import Nav from '../components/nav'
import Head from 'next/head'
import { useState } from 'react'


export default function ShareYourVoicePage({ optOut, setOptOut, dismissPrivacyBanner, setDismissPrivacyBanner }) {
    const [questionnaireOpen, setQuestionnaireOpen] = useState(false)
    const questionnairePreamble = 'We have a  questionnaire to help us understand the needs, worries and influences of Kenyans to why the need for a #peoplesVaccine is urgent and necessary. The findings of this research will be compiled into a consolidated report and published for sharing and further education.'
    return (
        <>
            <Head>
                <title>#PeoplesVaccineKE - Share your voice</title>
                <meta name="twitter:title" content="#PeoplesVaccineKE - Share your voice" />
                <meta name="twitter:description" content="Share your voice for #PeoplesVaccineKE" />
                <meta property="og:title" content="#PeoplesVaccineKE - Share your voice" />
                <meta property="og:description" content="Share your voice for #PeoplesVaccineKE" />
                <meta name="twitter:url" content="https://peoplesvaccine.co.ke/shareyourvoice" />
                <meta property="og:url" content="https://peoplesvaccine.co.ke/shareyourvoice" />
                <meta property="og:type" content="website" />
            </Head>
            <Nav optOut={optOut} setOptOut={setOptOut} dismissPrivacyBanner={dismissPrivacyBanner} setDismissPrivacyBanner={setDismissPrivacyBanner} />
            <div className={` ${questionnaireOpen ? 'mx-0' : 'mx-6'} mb-40 lg:mx-32 mt-10 flex items-center justify-center`}>
                {questionnaireOpen ?
                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeVaBa0cYzjfUAmXuec4kTC2mRDiFcTHXcyV7BrybbxJet5MQ/viewform?embedded=true" width="100%" height="1800" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                    :
                    <p>{questionnairePreamble}<br /><button className='pt-2' type='button' onClick={e => setQuestionnaireOpen(true)}> Click <span style={{ color: '#993333' }}>here</span> to start the questionnaire</button></p>
                }
            </div>

        </>
    )
}
