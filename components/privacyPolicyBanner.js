import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function PrivacyPolicyBanner({ optOut, setOptOut, dismissPrivacyBanner, setDismissPrivacyBanner }) {
    return (
        <>
            {!dismissPrivacyBanner ?
                <div id='privacy-policy-banner' style={{ backgroundColor: '#a0d6dc', borderColor: '#993333' }} className='w-auto flex justify-evenly fixed bottom-0 left-0 right-0 mb-2 border-2 mx-2 lg:mx-40 py-2 px-2 lg:px-0'>
                    <Link href='/privacy'>
                        <a className="no-underline">This website uses cookies. To read more about our Privacy Policy, click <span style={{ color: '#993333' }}>here.</span></a>
                    </Link>
                    <div className='flex justify-around'>
                        <button type='button' onClick={e => { setOptOut(true); setDismissPrivacyBanner(!dismissPrivacyBanner) }} className="mr-2 lg:mr-10" style={{ color: '#993333' }}>Reject</button>
                        <button type='button' onClick={e => { setOptOut(false); setDismissPrivacyBanner(!dismissPrivacyBanner) }} style={{ color: '#993333' }}>Accept</button>
                    </div>
                </div> :
                <button type='button' onClick={e => { setDismissPrivacyBanner(!dismissPrivacyBanner) }} style={{ backgroundColor: '#a0d6dc', borderColor: '#993333' }} className='border-2 fixed bottom-0 right-0 mr-2 lg:mr-12 mb-5 text-xs p-1' > Review Privacy Policy</button>
            }
        </>

    )
}
