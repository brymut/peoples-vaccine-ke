import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function PrivacyPolicyBanner() {
    const [showPolicyBanner, setShowPolicyBanner] = useState(false)
    const [syncedWithLocalStorage, setSyncedWithLocalStorage] = useState(false)
    useEffect(() => {
        if (!syncedWithLocalStorage) {
            if (localStorage.getItem('dismissedPrivacyBanner') === null) {
                setShowPolicyBanner(true)
                localStorage.setItem('dismissedPrivacyBanner', false)
                setSyncedWithLocalStorage(true)
            } else {
                setShowPolicyBanner(!localStorage.getItem('dismissedPrivacyBanner'))
                setSyncedWithLocalStorage(true)
            }
        }
        localStorage.setItem('dismissedPrivacyBanner', !showPolicyBanner)
    }, [showPolicyBanner])

    return (
        <>
            {showPolicyBanner ?
                <div id='privacy-policy-banner' style={{ backgroundColor: '#6930C3' }} className='w-full border-2 border-black fixed bottom-0 flex justify-around'>
                    <p>This is the privacy policy banner.</p>
                    <Link href='/privacy'>
                        <a className="no-underline">Privacy Policy</a>
                    </Link>
                    <button type='button' onClick={e => { setShowPolicyBanner(false) }}>Dismiss</button>
                </div> :
                null
            }
        </>

    )
}
