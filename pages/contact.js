import Nav from '../components/nav'
import { useForm } from "react-hook-form";
import { useState } from 'react';

import DirectusSDK from "@directus/sdk-js";
import Head from 'next/head'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faInstagram, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons'

export async function getStaticProps() {
    const contacts = []
    const client = new DirectusSDK({
        url: "https://api.peoplesvaccine.co.ke",
        project: "peoples-vaccine",
    })

    await client.getItems('contactlinks')
        .then(data => {
            data.data.map(contactMethod => {
                contacts.push(contactMethod)
            })
        })
        .catch(error => console.log(error))
    return {
        props: {
            contacts
        },
        revalidate: 1,
    }
}

export default function ContactPage({ contacts, optOut, setOptOut, dismissPrivacyBanner, setDismissPrivacyBanner }) {
    const { register, handleSubmit, errors } = useForm();
    const [submitted, setSubmitted] = useState(false)
    const client = new DirectusSDK({
        url: "https://peoples-vaccine-ke-directus-sbw4jzw6ja-uc.a.run.app",
        project: "peoples-vaccine",
    })

    const onSubmit = formData => {
        console.log(formData)
        client.createItem("contactformresponses", {
            name: formData.name,
            contact: formData.contact,
            location: formData.location,
            message: formData.message
        })
            .then(setSubmitted(true))
            .catch(error => console.log(error))
    }

    return (
        <>
            <Head>
                <title>#PeoplesVaccineKE - Contact</title>
                <meta name="title" content="#PeoplesVaccineKE - Contact" />
                <meta name="description" content="Reach out to the #PeoplesVaccineKE campaign" />
                <meta name="twitter:title" content="#PeoplesVaccineKE - Contact" />
                <meta name="twitter:description" content="Reach out to the #PeoplesVaccineKE campaign" />
                <meta property="og:title" content="#PeoplesVaccineKE - Contact" />
                <meta property="og:description" content="Reach out to the #PeoplesVaccineKE campaign" />
                <meta name="twitter:url" content="https://peoplesvaccine.co.ke/contact" />
                <meta property="og:url" content="https://peoplesvaccine.co.ke/contact" />
                <meta property="og:type" content="website" />
            </Head>
            <Nav optOut={optOut} setOptOut={setOptOut} dismissPrivacyBanner={dismissPrivacyBanner} setDismissPrivacyBanner={setDismissPrivacyBanner} />
            <section id='contact-us-socials' className="mx-24 mt-10">
                <h3 style={{
                    color: '#993333',
                    fontFamily: 'Montserrat',
                    fontWeight: '900',
                }} className=" hidden lg:block text-4xl">Contact us via:</h3>
                <h3 style={{
                    color: '#993333',
                    fontFamily: 'Montserrat',
                    fontWeight: '900',
                }} className=" text-xl lg:hidden">Contact us via:</h3>
                <ul style={{ color: '#993333' }} className="flex flex-col lg:flex-row justify-around mx-6 lg:mx-40 mt-5">
                    {contacts.map(contactMethod => {
                        if (contactMethod.contact_method === 'Email') {
                            return <li className='my-2 lg:my-0' key={contactMethod.id}><FontAwesomeIcon icon={faEnvelope} /><a className='ml-5' href={`mailto:${contactMethod.link}`}>{contactMethod.contact_method}</a></li>
                        } else {
                            switch (contactMethod.contact_method) {
                                case 'Facebook':
                                    return <li className='my-2 lg:my-0' key={contactMethod.id}><FontAwesomeIcon icon={faFacebook} /><a className='ml-5' href={contactMethod.link}>{contactMethod.contact_method}</a></li>
                                case 'Instagram':
                                    return <li className='my-2 lg:my-0' key={contactMethod.id}><FontAwesomeIcon icon={faInstagram} /><a className='ml-5' href={contactMethod.link}>{contactMethod.contact_method}</a></li>
                                case 'Twitter':
                                    return <li className='my-2 lg:my-0' key={contactMethod.id}><FontAwesomeIcon icon={faTwitter} /><a className='ml-5' href={contactMethod.link}>{contactMethod.contact_method}</a></li>
                                default:
                                    return <li className='my-2 lg:my-0' key={contactMethod.id}><a href={contactMethod.link}>{contactMethod.contact_method}</a></li>
                            }
                        }
                    })
                    }
                </ul>
            </section>
            <section id='contact-form'>
                {submitted ? <p className="text-center mt-10">Thank you for reaching out, we'll get back to you as soon as we can.</p> :
                    <>
                        <p className="text-center mt-10">You can also contact us directly via the following form and we'll get back to you.</p>
                        <form id="contact-form" onSubmit={handleSubmit(onSubmit)} className='mx-4 lg:mx-48 mt-5 mb-32 flex flex-col p-3 lg:p-6'>
                            <label style={{ color: '#993333' }} className='mt-4' htmlFor="name">What is your name?</label>
                            <input type='text' name="name" id="name" ref={register({ required: true })}></input>
                            {errors.name && <span className='text-red-600'>required</span>}
                            <label style={{ color: '#993333' }} className='mt-4' htmlFor="contact">How can we reach you?</label>
                            <input type='text' name="contact" id="contact" ref={register({ required: true })}></input>
                            {errors.contact && <span className='text-red-600'>required</span>}
                            <label style={{ color: '#993333' }} className='mt-4' htmlFor="location">County of residence</label>
                            <input type='text' name="location" id="location" ref={register({ required: true })}></input>
                            {errors.location && <span className='text-red-600'>required</span>}
                            <label style={{ color: '#993333' }} className='mt-4' htmlFor="message">What would you like to tell/ask us?</label>
                            <textarea name="message" id="message" ref={register({ required: true })} rows='5'></textarea>
                            {errors.message && <span className='text-red-600'>required</span>}
                            <button style={{ border: 2, borderColor: '#993333', borderStyle: 'solid' }} type='submit' className='w-3/4 mx-auto my-5 '>Send your message</button>
                        </form>
                    </>
                }
            </section>
        </>
    )
}
