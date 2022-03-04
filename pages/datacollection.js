/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import styles from '../styles/Home.module.css'
import { motion } from "framer-motion"
import React from 'react'
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import axios from 'axios';

export default function Home() {
    const validationSchema = Yup.object().shape({
        nom_prenom: Yup.string()
            .required('Nom is required'),
        tel: Yup.string()
            .required('Tel is required'),
        emailaddress: Yup.string()
            .required('Email is required')
            .email('Email is invalid'),
        age: Yup.string().required('must be 18 years old'),
        jesuis: Yup.array().min(1, "one must be selected").nullable(),
        message: Yup.string()
            .required('Message is required'),
    });
    const formOptions = { resolver: yupResolver(validationSchema) };
    const { register, handleSubmit, formState: { errors }, reset } = useForm(formOptions);
    async function onSubmitForm(values) {
        let config = {
            method: 'post',
            url: URL_FRONT + 'api/submitContctForm',
            headers: {
                'Content-Type': 'application/json'
            },
            data: values,
        }
        try {
            const response = await axios(config)

            console.log(response)
            if (response.data.status == 200) {

                console.log('Success')
                reset()
            }
        } catch (err) {
            console.error(err)
        }
    }
    return (
        <div className="flex flex-col h-screen">
            <div className="grow">
                <div className="flex flex-row overflow-hidden">
                    <div className="flex flex-row height-screen overflow-hidden">
                        <div className='flex flex-column w-screen'>
                            <div className="relative flex flex-row  w-screen">
                                <div className="basis-1/2 bg-camel-yellow">
                                    <div className="basis-full height-screen bg-camel-yellow -skew-x-12"></div>
                                </div>
                                <div className="basis-1/2 bg-camel-purple">
                                    <div className="basis-full height-screen bg-camel-purple -skew-x-12"></div>
                                </div>
                                <div className="absolute grid place-content-center placing w-screen h-screen ">
                                    {/* <img src="assets/img/splash-yellow-blue.svg" className="splash h-screen"/> */}
                                    <motion.img
                                        src="assets/images/splash-yellow-purple.svg"
                                        className="h-screen"
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{
                                            type: "spring",
                                            duration: 0.5,
                                        }}
                                    />
                                </div>
                            </div>

                        </div>
                        <div className="absolute flex flex-row height-screen w-screen">
                            <div className="basis-1/2">

                                <div className="page-contact-inner">
                                    <div className="mt-10 text-white container mx-auto">
                                        <div className="flex-items">
                                            <label className="label-text">Nom</label>
                                            <input className='input-text' type="text" {...register('nom_prenom', { required: { value: true, message: "Nom is required" } })} />
                                            <span className="text-red-400 text-sm">{errors?.nom_prenom?.message}</span>
                                        </div>
                                        <div className="mt-10">
                                            <div className="flex-items">
                                                <label className="label-text ">AGE*</label>
                                                <div className='flex-labels'>
                                                    <input className='input-txt' type="text" {...register('age', { required: { value: true, message: "Nom is required" } })} />
                                                    <span className="text-red-400 text-sm">{errors?.age?.message}</span>
                                                    <label className='txt-p'>*SI 18 + ON CONTINUE AVEC LE JEU</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-10">
                                            <div className="flex-radioitems ml-10">
                                                <label className="label-text ">sexe</label>
                                                <form class="boxed">
                                                    <input {...register('jesuis')} type="radio" id="android" name="skills" value="F" />
                                                    <label className='radio-label' for="android">F</label>

                                                    <input  {...register('jesuis')} type="radio" id="ios" name="skills" value="H" />
                                                    <label className='radio-label' for="ios">H</label>
                                                </form>
                                            </div>
                                            <div><span className="text-red-400 text-sm">{errors?.jesuis?.message}</span></div>
                                        </div>
                                        <div className="mt-10 ml-10">
                                            <div className="flex-radioitems">
                                                <label className="label-text ">Addresse Electronique</label>
                                                <input className='input-text' type="text" {...register('emailaddress', {
                                                    required: { value: true, message: "Email is required" },
                                                    pattern: { value: "^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$", message: "Invalid emailaddress format" }
                                                })} />
                                                <span className="text-red-400 text-sm">{errors?.emailaddress?.message}</span></div>
                                        </div>
                                        <div className="mt-10 ml-10">
                                            <div className="flex-radioitems">
                                                <label className="label-text ">Numero de tel</label>
                                                <input className='input-text' type="text" {...register('tel', { required: { value: true, message: "Numéro de portable is required" } })} />
                                                <span className="text-red-400 text-sm">{errors?.tel?.message}</span></div>
                                        </div>

                                        <div className="mt-10">
                                            <div className="flex-radioitems ml-10">
                                                <label className="label-text ">êtes-vous fumeur?</label>
                                                <div className='radio-flex-2'>
                                                    <label class="">
                                                        <div className='flex-scd'>
                                                            <input className='checkmark' {...register('jesuis')} id="parents" type="radio" name='radio' value="oui" />
                                                            <label className="yes">oui</label>
                                                        </div>
                                                    </label>
                                                    <label class="">
                                                        <div className='flex-scd'>
                                                        <input className='checkmark' {...register('jesuis')} id="parents" type="radio" name='radio' value="non" />
                                                            <label className='yes'>non</label>
                                                        </div>
                                                    </label>
                                                </div>
                                                <p className='p-form'> *Les informations recueillies dans le cadre de ce jeu ne seront<br></br> collectées que pour les besoins du jeu Camel Attitude, aucune<br></br> information fournie par vous dans le cadre de ce jeu ne sera<br></br> utilisée à d'autres fins que celle relatives à la participation au jeu<br></br> et aucune information vous concernant ou ayant un lien avec la<br></br> participation au jeu Camel Attitude ne sera conservée, archivée<br></br> sur quelque support que ce soit ou transmise à un tiers que ce<br></br> soitsur le territoire algérien ou à l'étranger.

                                                    Nous portons<br></br> également à votre connaissance que les résultats fournis aux<br></br> participants au jeu sont à caractère purement divertissant et ne<br></br> reposent sur aucune base scientifique.</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="basis-1/2 flex flex-wrap content-end">
                                {/* <span class="absolute right-0 bottom-0">sdfsfsd</span> */}
                                <a href='chooseOne'>
                                    <img src="assets/images/lets-camel.svg" className="absolute h-1/6 right-20 bottom-10" />
                                </a>

                            </div>
                        </div>
                        <Script strategy="beforeInteractive" src="assets/js/custom-script.js" />
                    </div>
                </div>
                <div className="flex-none h-14">
                    fumer nuit à votre entourage التدخين يضر بمحيطكم
                </div>
            </div>
        </div >
    )
}
