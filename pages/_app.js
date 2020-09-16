import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import * as gtag from '../lib/gtag'
import '../styles/index.css'

function MyApp({ Component, pageProps }) {
  const [optOut, setOptOut] = useState(null)
  const [dismissPrivacyBanner, setDismissPrivacyBanner] = useState(null)
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  useEffect(() => {
    if (window.localStorage.getItem('optOut') === 'true' && optOut === null) setOptOut(true)
    if (optOut === null) setOptOut(false)
    window[`ga-disable-${gtag.GA_TRACKING_ID}`] = optOut || false;
    window.localStorage.setItem('optOut', optOut)
  }, [optOut])

  useEffect(() => {
    if (window.localStorage.getItem('dismissPrivacyBanner') === 'true' && dismissPrivacyBanner === null) setDismissPrivacyBanner(true)
    window.localStorage.setItem('dismissPrivacyBanner', dismissPrivacyBanner)
  }, [dismissPrivacyBanner])


  return <Component {...pageProps} optOut={optOut} setOptOut={setOptOut} dismissPrivacyBanner={dismissPrivacyBanner} setDismissPrivacyBanner={setDismissPrivacyBanner} />
}

export default MyApp
