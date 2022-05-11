/* eslint-disable @next/next/link-passhref */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import styles from '../styles/Home.module.css'
import { motion } from "framer-motion"
import Link from 'next/link'

export default function Home() {
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
                                    className="height-screen"
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
                                    <h1 className="mt-6 ml-6 text-5xl text-camel-blue">MERCI<br />POUR VOTRE</h1>
                                    <h2 className="margin-top-last attitude ml-6 text-7xl text-camel-darkblue transform -rotate-12 -translate-y-20">PARTICIPATION</h2>
                                    <img src="assets/images/attitude.svg" className="thankyou-icon" />
                                </div>
                        <div className="category-item flex flex-wrap content-end">
                        <Link href="/">
                                            <div className="absolute box h-1/6 left-20 lets">
                                            RETOUR<br></br> PAGE<br></br> INITIALE
                                            </div>
                                            </Link>
                                        </div>
                            </div>
                            <div className="basis-1/2 flex flex-wrap content-end">
                                {/* <span className="absolute right-0 bottom-0">sdfsfsd</span> */}
                                    <img src="assets/images/lets-camel.svg" className="absolute h-1/6 right-20 lets" />

                            </div>
                        </div>
                        <Script strategy="beforeInteractive" src="assets/js/custom-script.js" />
                    </div>
                </div>
            </div>
            <div className="flex-none w-screen h-14">FUMER NUIT À VOTRE ENTOURAGE التدخين يضر بمحيطكم
            </div>
        </div>
    )
}









