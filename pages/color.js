
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
import { getAllRecords } from '/api/server'

export default function ChooseOne() {
    const { query } = useRouter()
    // console.log('zIddddd in ChooseOne')
    // console.log(localStorage.getItem('zId'))
    const router = useRouter()
    const getRandomInt = (max) => {
        console.log('zIddddd')
        console.log(localStorage.getItem('zId'))
        return Math.floor(Math.random() * max);
    }
const cameluser = query.cameluser;
console.log(cameluser)
    const randomBatikh = async () => {


        const nouvelleObj = await getAllRecords('questions');
        var imageindedx = getRandomInt(nouvelleObj.length);
        for(let i=0; i<nouvelleObj.length; i++){
if (i==imageindedx){
    router.push({ pathname: '/question', query: { page_id: nouvelleObj[i].id }});
}
        }
    }
    // useEffect(() => {
        
    //     window.location.href = url;
    // });
    return (
        <div className="flex flex-col fixed">
            <div className="grow">
                <div className="flex flex-row overflow-hidden">
                    <div className="flex flex-row h-screen overflow-hidden">
                        <div className="relative flex flex-row h-screen w-screen">
                            <div className="basis-1/2 bg-camel-yellow">
                                <div className="basis-full h-screen bg-camel-yellow -skew-x-12"></div>
                            </div>
                            <div className="basis-1/2 bg-camel-blue">
                                <div className="basis-full h-screen bg-camel-blue -skew-x-12"></div>
                            </div>
                            <div className="absolute grid place-content-center w-screen h-screen">
                                {/* <img src="assets/img/splash-yellow-blue.svg" className="splash h-screen"/> */}
                                <motion.img
                                    src="assets/images/splash-yellow-blue-3.svg"
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
                        <div className="absolute flex flex-row h-screen w-screen">
                            <div className="basis-1/2">
                                <div>
                                    <h1 className="mt-4 ml-6 text-4xl text-camel-blue textCouleurs">les<br />couleurs<br />r??v??lent</h1>
                                    <h2 className="margin-top-at attitude ml-6 text-7xl text-camel-darkblue transform -rotate-12 -translate-y-20">L'ATTITUDE!</h2>
                                    <img src="assets/images/attitude.svg" className="color-icon" />
                                    <h1 className=" ml-6 text-4xl text-camel-blue textCouleurs">Quelle couleur<br></br> es-tu?</h1>
                                </div>
                            </div>
                            <div className="absolute flex place-content-center flex-squares mb-20 w-screen h-screen">
                                <div className="row no-gutters">
                                    <div className="course-categories">
                                        <div className="category-item category-bg-1">
                                            <div className="colors">
                                                Bleu
                                            </div>
                                        </div>
                                        <div className="category-item category-bg-2">
                                            <div className="colors">
                                                Orange
                                            </div>
                                        </div>
                                        <div className="category-item category-bg-3">
                                            <div className="colors">
                                                Rose
                                            </div>
                                        </div>

                                        <div className="category-item category-bg-4">
                                            <div className="colors">
                                                Jaune
                                            </div>
                                        </div>
                                        <div className="category-item category-bg-5">
                                            <div className="colors">
                                                Vert
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="basis-1/2 flex flex-wrap content-end">
                                <div onClick={() => { randomBatikh() }}>
                                    <img src="assets/images/lets-camel.svg" id="" className="absolute h-1/6 right-20 lets" />
                                </div>

                            </div>
                        </div>
                        <Script strategy="beforeInteractive" src="assets/js/custom-script.js" />
                    </div>
                </div>
            </div>
            <div className="flex-none w-screen">
            FUMER NUIT ?? VOTRE ENTOURAGE ?????????????? ?????? ??????????????
            </div>
        </div>
    )
}
