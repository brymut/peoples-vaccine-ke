import Navigation from '../components/Navigation'
import { useForm } from "react-hook-form";
import { useState } from 'react';

import DirectusSDK from "@directus/sdk-js";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faInstagram, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons'
import Layout from '../components/Layout';

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
    const seo = {
        title: "Contact us",
        description: "Reach out to the #PeoplesVaccineKE campaign via our social media pages, instagram or twitter , email or though our website contact form.",
        canonical: "https://peoplesvaccine.co.ke/contact",
        openGraph: {
            url: 'https://peoplesvaccine.co.ke/contact',
            title: 'Contact us',
            description: 'Reach out to the #PeoplesVaccineKE campaign via our social media pages, instagram or twitter , email or though our website contact form.',
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
    const { register, handleSubmit, errors } = useForm();
    const [submitted, setSubmitted] = useState(false)
    const client = new DirectusSDK({
        url: "https://peoples-vaccine-ke-directus-sbw4jzw6ja-uc.a.run.app",
        project: "peoples-vaccine",
    })

    const onSubmit = formData => {
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
        <Layout seo={seo} optOut={optOut} setOptOut={setOptOut} dismissPrivacyBanner={dismissPrivacyBanner} setDismissPrivacyBanner={setDismissPrivacyBanner}>
            <section id='contact-us-socials' className="mx-24 mt-10">
                <h1 style={{
                    color: '#993333',
                    fontFamily: 'Montserrat',
                    fontWeight: '900',
                    fontStyle: 'italic'
                }} className=" hidden lg:block text-4xl">Contact us via:</h1>
                <h1 style={{
                    color: '#993333',
                    fontFamily: 'Montserrat',
                    fontWeight: '900',
                    fontStyle: 'italic'
                }} className=" text-xl lg:hidden">Contact us via:</h1>
                <ul style={{ color: '#993333' }} className="flex flex-col lg:flex-row justify-around mx-6 lg:mx-40 mt-5">
                    {contacts.map(contactMethod => {
                        if (contactMethod.contact_method === 'Email') {
                            return <li className='my-2 lg:my-0' key={contactMethod.id}><FontAwesomeIcon icon={faEnvelope} /><a className='ml-5' href={`mailto:${contactMethod.link}`}><h2>{contactMethod.contact_method}</h2></a></li>
                        } else {
                            switch (contactMethod.contact_method) {
                                case 'Facebook':
                                    return <li className='my-2 lg:my-0' key={contactMethod.id}><FontAwesomeIcon icon={faFacebook} /><a className='ml-5' href={contactMethod.link}><h2>{contactMethod.contact_method}</h2></a></li>
                                case 'Instagram':
                                    return <li className='my-2 lg:my-0' key={contactMethod.id}><FontAwesomeIcon icon={faInstagram} /><a className='ml-5' href={contactMethod.link}><h2>{contactMethod.contact_method}</h2></a></li>
                                case 'Twitter':
                                    return <li className='my-2 lg:my-0' key={contactMethod.id}><FontAwesomeIcon icon={faTwitter} /><a className='ml-5' href={contactMethod.link}><h2>{contactMethod.contact_method}</h2></a></li>
                                default:
                                    return <li className='my-2 lg:my-0' key={contactMethod.id}><a href={contactMethod.link}><h2>{contactMethod.contact_method}</h2></a></li>
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
        </Layout>
    )
}
