import Nav from '../components/nav'
import Head from 'next/head'

export default function Custom404({ optOut, setOptOut, dismissPrivacyBanner, setDismissPrivacyBanner }) {

    return (
        <>
            <Nav optOut={optOut} setOptOut={setOptOut} dismissPrivacyBanner={dismissPrivacyBanner} setDismissPrivacyBanner={setDismissPrivacyBanner} />
            <p className='text-center mt-2'>The page you're looking for isn't available. Click <a href='/'><span style={{ color: '#993333' }}>here</span></a> to go to the campaign homepage to read about our demands.</p>
        </>
    )
}
