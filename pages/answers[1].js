/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import styles from '../styles/Home.module.css'
import { motion } from "framer-motion"
import React from 'react';
import ReactDOM from 'react-dom';
import { useRouter } from 'next/router'
import Link from 'next/link';
import { useState, useEffect } from "react";
import { getById } from '/api/server'
import { image_url } from '../global'
import parse from 'html-react-parser';
import { createsmoker } from '../api/server'

export default function Orange() {
    const { query } = useRouter()



    useEffect(() => {

        getApiData();
        getData();


    }, []);
    const [nouvelleansObj, setPageansObj] = useState([]);
    const [questHomeObj, setPageQuestObj] = useState([]);
    const questHomeObjArray = Array.from(questHomeObj);
    const nouvelleansObjArray = Array.from(nouvelleansObj);
    const [loaded, setLoaded] = useState(false);
    const getApiData = async () => {

        const ansObj = await getById('questions', query.page_id);
        setPageansObj(ansObj);
        setLoaded(true);

        console.log('UpdateStart');
        createsmoker();
        console.log('UpdateEnd');
    }
    const getData = async () => {
        const questObj = await getById('lighter', query.page_id);
        setPageQuestObj(questObj);
        setLoaded(true);
    }
    return (
        <div className="flex flex-col">
            <div className="grow">
                <div className="flex flex-row overflow-hidden">
                    <div className="flex flex-row h-screen overflow-hidden">

                        {questHomeObj.map((item) => (
                            <>
                                <div className="relative flex flex-row h-screen w-screen" >
                                    <div className="basis-full h-screen  " style={{ background: item.background_color }} key={item.id}></div>
                                    <div className="absolute grid place-content-center w-screen h-screen">
                                        {/* <img src="assets/img/splash-yellow-blue.svg" className="splash h-screen"/> */}
                                        <motion.img
                                            src={`${image_url}${item.background_image}`}
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



                                <div className="absolute grid place-content-center w-screen h-screen">
                                    <motion.img
                                        src={`${image_url}${item.lighter}`}
                                        className="h-4/6 rotate-12"
                                        initial={{ x: 100, y: -1000, rotate: 0 }}
                                        animate={{ x: 250, y: 100, rotate: 0 }}
                                        transition={{
                                            type: "spring",
                                            duration: 0.5,
                                            delay: 1
                                        }}
                                    />
                                    {/* <img src="assets/img/camel-yellow-pack.png" className="h-4/6 transform rotate-12 translate-y-44"/> */}
                                </div>
                            </>
                        ))}
                        <div className="absolute flex flex-row h-screen w-screen">
                            <div className="basis-1/2">
                                {questHomeObj.map((item) => (
                                    <>
                                        <h1 className="mt-6 ml-6 text-5xl text-white">{parse(`${item.text_one}`)}</h1>
                                    </>
                                ))}
                                {nouvelleansObj.map((item) => (
                                    <>
                                        <div>
                                            <>
                                                <h2 className="margin-top attitude ml-6 text-7xl  transform -rotate-12 -translate-y-20" style={{ color: item.answers[1].text_color }} key={item.id}>{item.answers[1].attitude}</h2>
                                            </>
                                        </div>
                                    </>
                                ))}
                                {questHomeObj.map((item) => (
                                    <>
                                        <img src={`${image_url}${item.line}`} className="img" />
                                        <h1 className="mt-6 ml-6 text-5xl text-white">{parse(`${item.text_two}`)}</h1>
                                    </>
                                ))}
                            </div>
                            {questHomeObj.map((item) => (
                                <>
                                    <div className="basis-1/2 flex flex-wrap content-end">
                                        {/* <span class="absolute right-0 bottom-0">sdfsfsd</span> */}
                                        <a href='thankyou'>
                                            <img src={`${image_url}${item.lets_image}`} className="absolute h-1/6 right-20 lets" />
                                        </a>

                                    </div>
                                </>
                            ))}
                        </div>

                        <Script strategy="beforeInteractive" src="assets/js/custom-script.js" />
                    </div>

                </div>
            </div>
            <div className="flex-none h-14">
                FUMER NUIT À VOTRE ENTOURAGE التدخين يضر بمحيطكم
            </div>
        </div>
    )
}
