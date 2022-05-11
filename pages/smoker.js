/* eslint-disable react-hooks/exhaustive-deps */
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
import { Router, useRouter } from 'next/router'
import { createsmoker } from '../api/server'

export default function Home() {
    const router = useRouter()
    const validationSchema = Yup.object().shape({
        ba_id: Yup.string()
        .required('BA ID est obligatoire'),
        name: Yup.string()
            .required('Nom est obligatoire'),
        region: Yup.string()
            .required('Région est obligatoire'),
            wilaya: Yup.string()
            .required('Wilaya est obligatoire'),
        age: Yup.string().required('doit etre 18 ans'),

    });
    const formOptions = { resolver: yupResolver(validationSchema) };
    const { register, handleSubmit, formState: { errors }, reset } = useForm(formOptions);

    const onSubmitForm = async (value) => {
        try {
            // console.log(value)
            const result = await validationSchema.validate(value)
            if (result) {
                const cameluser = 1;// = await createsmoker(value)
                localStorage.setItem('zBID', value.ba_id);
                localStorage.setItem('zName', value.name);
                localStorage.setItem('zAge', value.age);
                localStorage.setItem('zGender', value.is_gnd);
                localStorage.setItem('zRegion', value.region);
                localStorage.setItem('zWilaya', value.wilaya);
                localStorage.setItem('zIsSmoker', value.is_smoker);
                localStorage.setItem('zPhone', value.phone);

                // console.log(JSON.stringify(cameluser))
                router.push({ pathname: '/color', query: { cameluser: cameluser } });
            }
            // alert(JSON.stringify(result));
        } catch (e) {
            // console.log(e)
        }
        // router.push({ pathname: '/chooseOne' }); 

    }


    return (
        <div className="flex flex-col fixed h-screen  overflow-hidden">
            <div className="grow">
                <div className="flex flex-row overflow-hidden">
                    <div className="flex flex-row h-screen overflow-hidden">
                        <div className='flex flex-column w-screen'>
                            <div className="relative flex flex-row  w-screen">
                                <div className="basis-1/2 bg-camel-yellow">
                                    <div className="basis-full h-screen bg-camel-yellow -skew-x-12"></div>
                                </div>
                                <div className="basis-1/2 bg-camel-purple">
                                    <div className="basis-full h-screen bg-camel-purple -skew-x-12"></div>
                                </div>
                                <div className="absolute grid place-content-center placing w-screen h-screen ">
                                    {/* <img src="assets/img/splash-yellow-blue.svg" className="splash height-screen"/> */}
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
                        <div className="absolute flex flex-row h-screen w-screen">
                            <form onSubmit={handleSubmit(onSubmitForm)} id="contact-form" method="get" action="/chooseOne" className={errors ? 'form-errors-cust' : ''}>
                                <div className="basis-1/2">
                                    <div className="page-contact-inner">
                                        <div className="mt-10 text-white container mx-auto">
                                        <div className='flex flex-row mt-10'>
                                        <div className="flex flex-col  ml-10">
                                                <label className="label-text">BA ID</label>
                                                <input className='input-text' type="text" {...register('ba_id', { required: { value: true, message: "Nom is required" } })} />
                                                <span className="text-red-400 text-sm">{errors?.ba_id?.message}</span>
                                            </div>
                                            <div className="flex flex-col">
                                                <label className="label-text">Nom</label>
                                                <input className='input-text' type="text" {...register('name', { required: { value: true, message: "Nom is required" } })} />
                                                <span className="text-red-400 text-sm">{errors?.name?.message}</span>
                                            </div>
                                            </div>
                                            <div className="mt-10">
                                            <div className='flex flex-row'>
                                                <div className="flex-radioitems ml-10">
                                                    <label className="label-text ">AGE*</label>
                                                        <input className='input-text' type="text" {...register('age', { required: { value: true, message: "Nom is required" } })} />
                                                        <span className="text-red-400 text-sm">{errors?.age?.message}</span>
                                                        <label className='txt-p'>*SI 18 + ON CONTINUE AVEC LE JEU</label>
                                                </div>
                                                <div className="flex flex-col">
                                                    <label className="label-text ">sexe</label>
                                                    <form className="boxed">
                                                        <input type="radio" id="female-gender" {...register('is_gnd')} name="is_gnd" value="female" />
                                                        <label className='radio-label' htmlFor="female-gender">F</label>

                                                        <input type="radio" id="male-gender" name="is_gnd" {...register('is_gnd')} value="male" />
                                                        <label className='radio-label' htmlFor="male-gender">H</label>
                                                    </form>
                                                </div>
                                                
                                                </div>
                                            </div>
                                            <div className="mt-10 ml-10">
                                            <div className='flex flex-row'>
                                                <div className="flex-radioitems">
                                                    <label className="label-text ">Région</label>
                                                    <input className='input-text' type="text" {...register('region', {
                                                        required: { value: true, message: "Région est obligatoire" }
                                                    })} />
                                                    <span className="text-red-400 text-sm">{errors?.region?.message}</span></div>
                                                    <div className="flex-radioitems">
                                                    <label className="label-text ">Wilaya</label>
                                                    <input className='input-text' type="text" {...register('wilaya', {
                                                        required: { value: true, message: "Wilaya est obligatoire" }
                                                    })} />
                                                    <span className="text-red-400 text-sm">{errors?.wilaya?.message}</span></div>
                                                    </div>
                                            </div>
                                            <div className="mt-10 ">
                                                <div className="flex flex-col ml-10">
                                                <div className='flex-labels'>
                                                    <label className="label-text ">Numero de tel</label>
                                                    <input className='input-txt' type="text" {...register('phone')} /></div>
                                                    </div>
                                            </div>

                                            <div className="mt-10">
                                                <div className="flex-radioitems ml-10">
                                                    <label className="label-text ">êtes-vous fumeur?</label>
                                                    <div className='radio-flex-2'>
                                                        <label className="">
                                                            <div className='flex-scd'>
                                                                <input className='checkmark' id="smoker-yes" type="radio" {...register('is_smoker')} name='is_smoker' value="yes" />
                                                                <label className="yes">oui</label>
                                                            </div>
                                                        </label>
                                                        <label className="">
                                                            <div className='flex-scd'>
                                                                <input className='checkmark' id="smoker-no" type="radio" {...register('is_smoker')} name='is_smoker' value="no" />
                                                                <label className='yes'>non</label>
                                                            </div>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className=''>
<p className='p-form ml-10'> *Les informations recueillies dans le cadre de ce jeu ne seront collectées que pour les besoins du jeu Camel Attitude,<br></br> aucune informationfournie par vous dans le cadre de ce jeu ne sera utilisée à d'autres fins que celle relatives à la<br></br> participation au jeu et aucune information vous concernant ou ayant un lien avec la participation au jeu Camel Attitude<br></br> ne sera conservée, archivée sur quelque support que ce soit ou transmise à un tiers que ce soit sur le territoire algérien<br></br> ou à l'étranger.

Nous portons également à votre connaissance que les résultats fournis aux participants au jeu sont à<br></br> caractère purement divertissant et ne reposent sur aucune base scientifique.</p>
</div>
                                    </div>
                                    
                                </div>
                                
                                <div className="basis-1/2 flex flex-wrap content-end">
                                
                                    <a onClick={() => { onSubmitForm() }}>
                                        <input type="image" className="absolute h-1/6 right-20 bottom-10 lets" src="assets/images/lets-camel.svg" />
                                    </a>
                                </div>
                            </form>
                            
                        </div>
                        
                        <Script strategy="beforeInteractive" src="assets/js/custom-script.js" />
                    </div>
                </div>

            </div>
            <div className=" w-screen fixed flex-none h-14">
                                FUMER NUIT À VOTRE ENTOURAGE التدخين يضر بمحيطكم
                            </div>
        </div>
    )
}
