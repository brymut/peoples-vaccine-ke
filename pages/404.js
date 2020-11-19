import Layout from '../components/Layout'
import Navigation from '../components/Navigation'

export default function Custom404({ optOut, setOptOut, dismissPrivacyBanner, setDismissPrivacyBanner }) {
    const seo = {
        title: "#PeoplesVaccineKE - Demands",
        description: "Share your voice for #PeoplesVaccineKE",
        canonical: "https://peoplesvaccine.co.ke/",
        openGraph: {
            url: 'https://peoplesvaccine.co.ke/',
            title: '#PeoplesVaccineKE - Share your voice',
            description: 'Share your voice for #PeoplesVaccineKE',
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
            <p className='text-center mt-48 mx-4 lg:mx-0 lg:mt-2'>The page you're looking for isn't available. Click <a href='/'><span style={{ color: '#993333' }}>here</span></a> to go to the campaign homepage to read about our demands.</p>
        </Layout>
    )
}
