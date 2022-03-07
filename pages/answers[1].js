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
import { createsmoker } from '../api/server'

export default function Orange() {
    const { query } = useRouter()

    useEffect(() => {
        getApiData();
        getData();
        console.log('---------------------------------')
        console.log('zIddddd in AnsZero')
        console.log(localStorage.getItem('zId'))
        console.log('zQst')
        console.log(localStorage.getItem('zQst'))
        console.log('zAns')
        console.log(localStorage.getItem('zAns'))
    
        console.log('---------------------------------')

    }, []);
    const [nouvelleAnsObj, setPageAns2Obj] = useState([]);
    const [questHome2Obj, setPageQuest2Obj] = useState([]);
    const questHome2ObjArray = Array.from(questHome2Obj);
    const nouvelleAnsObjArray = Array.from(nouvelleAnsObj);
    const [loaded, setLoaded] = useState(false);
    const getApiData = async () => {
        
    const ans2Obj = await getById('questions',query.answers_id);
    setPageAns2Obj(ans2Obj);
    setLoaded(true);
    console.log('UpdateStart');
    createsmoker();
    console.log('UpdateEnd');
}
const getData = async () => {
const quest2Obj = await getById('lighter',query.page_id);
setPageQuest2Obj(quest2Obj);
setLoaded(true);
}
    return (
        <div className="flex flex-col">
            <div className="grow">
                <div className="flex flex-row overflow-hidden">
                    <div className="flex flex-row height-screen overflow-hidden">
                    <div className="relative flex flex-row height-screen w-screen">   
                    {questHome2Obj.map((item) => (
                    <>
                            <div className="basis-full height-screen bg-camel-orange " style={{background:item.background_color}}></div>
                            <div className="absolute grid place-content-center w-screen height-screen">
                                {/* <img src="assets/img/splash-yellow-blue.svg" className="splash h-screen"/> */}
                                <motion.img
                                    src={`${image_url}${item.background_image}`}
                                    className="ht-screen"
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{
                                        type: "spring",
                                        duration: 0.5,
                                    }}
                                />
                            </div>
                            </>
                    ))}
                        </div>
                        {questHome2Obj.map((item) => (
                    <>
                        <div className="absolute grid place-content-center w-screen height-screen">
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
                        <div className="absolute flex flex-row height-screen w-screen">
                            <div className="basis-1/2">
                            {nouvelleAnsObj.map((item) => (
                                <>
                                <div>
                                    <h1 className="mt-6 ml-6 text-5xl text-white">VOUS<br />êtes</h1>
                                    <h2 className="margin-top color attitude ml-6 text-7xl text-camel-darkblue transform -rotate-12 -translate-y-20">{item.answers[1].attitude}</h2>
                                    <img src="assets/images/bg-blue-answers.svg" className="img" />
                                    <h1 className="mt-6 ml-6 text-5xl text-white">comme<br></br>CAMEL!</h1>
                                </div>
                                </>
                                ))}
                            </div>
                        </div>
                        
                        <Script strategy="beforeInteractive" src="assets/js/custom-script.js" />
                    </div>
                </div>
            </div>
            <div className="flex-none h-14">
                fumer nuit à votre entourage التدخين يضر بمحيطكم
            </div>
        </div>
    )
}
