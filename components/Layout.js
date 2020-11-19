// import Alert from './alert'
// import Footer from './footer'
import { NextSeo } from 'next-seo';
import Navigation from './Navigation'
import PrivacyPolicyBanner from './privacyPolicyBanner'


// import Meta from './meta'

export default function Layout({ children, seo, optOut, setOptOut, dismissPrivacyBanner, setDismissPrivacyBanner }) {
    return (
        <>
            <NextSeo
                title={seo.title}
                description={seo.description}
                canonical={seo.canonical}
                openGraph={{
                    url: seo.openGraph.url,
                    title: seo.openGraph.title,
                    description: seo.openGraph.description,
                    images: seo.openGraph.images,
                    site_name: '#PeoplesVaccineKE',
                }}
                twitter={{
                    handle: '@VaccineKe',
                    site: '@VaccineKe',
                    cardType: 'summary_large_image',
                }}
            />
            <Navigation />
            <PrivacyPolicyBanner optOut={optOut} setOptOut={setOptOut} dismissPrivacyBanner={dismissPrivacyBanner} setDismissPrivacyBanner={setDismissPrivacyBanner} />
            <div className="min-h-screen md:mt-24">
                <main>{children}</main>
            </div>
        </>
    )
}