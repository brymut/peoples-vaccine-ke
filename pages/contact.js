import Nav from '../components/nav'
import Head from 'next/head'
import DirectusSDK from "@directus/sdk-js";
import { useForm } from "react-hook-form";
import { useState } from 'react';



export default function ContactPage() {
    const { register, handleSubmit, watch, errors } = useForm();
    const [submitted, setSubmitted] = useState(false)
    const client = new DirectusSDK({
        url: "https://peoples-vaccine-ke-directus-sbw4jzw6ja-uc.a.run.app",
        project: "peoples-vaccine",
    })
    // client.getItems("contactformresponses")
    //     .then(data => {
    //         console.log(data)
    //     })
    //     .catch(error => console.error(error));

    const onSubmit = formData => {
        console.log(formData)
        client.createItem("contactformresponses", {
            name: formData.name,
            contact: formData.contact,
            message: formData.message
        }).then(data => {
            console.log(data)
            setSubmitted(true)
        }).catch(error => console.log(error))
    }
    return (
        <>
            <Head>
                <title>#PeoplesVaccine - Contact</title>
            </Head>
            <Nav />
            <section id='contact-us-socials' className="mx-24 mt-10">
                <h3 style={{
                    color: 'white',
                    fontFamily: 'Cubano-Regular',
                    WebkitTextFillColor: 'white',
                    WebkitTextStrokeWidth: '1px',
                    WebkitTextStrokeColor: '#6930C3',
                    // textAlign: 'center'
                }} className="text-4xl">Contact us via:</h3>
                <ul className="flex flex-col lg:flex-row justify-around mx-32 lg:mx-40 mt-10">
                    <li>Twitter</li>
                    <li>Instagram</li>
                    <li>Facebook</li>
                    <li>Email</li>
                </ul>
            </section>
            <section id='contact-form'>
                {submitted ? <p className="text-center mt-10">Thank you for reaching out, we'll get back to you as soon as we can.</p> :
                    <>
                        <p className="text-center mt-10">You can also contact us directly via the following form and we'll get back to you.</p>
                        <form onSubmit={handleSubmit(onSubmit)} className='border-black border-4 mx-16 lg:mx-48 my-5 flex flex-col min'>
                            <label for="name">Name</label>
                            <input type='text' name="name" id="name" ref={register({ required: true })}></input>
                            {errors.name && <span className='text-red-600'>required</span>}
                            <label for="contact">How can we reach you?</label>
                            <input type='text' name="contact" id="contact" ref={register({ required: true })}></input>
                            {errors.contact && <span className='text-red-600'>required</span>}
                            <label for="message">What would you like to tell/ask us?</label>
                            <textarea name="message" id="message" ref={register({ required: true })}></textarea>
                            {errors.message && <span className='text-red-600'>required</span>}
                            <button type='submit' className='border-black border-2 mx-5 my-5 '>Send message</button>
                        </form>
                    </>
                }
            </section>
        </>
    )
}
