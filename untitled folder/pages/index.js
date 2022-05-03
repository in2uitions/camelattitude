/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import styles from '../styles/Home.module.css'
import { motion } from "framer-motion"

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="grow">
        <div className="flex flex-row overflow-hidden">
          <div className="flex flex-row height-screen overflow-hidden">
            <div className="relative flex flex-row height-screen w-screen">
              <div className="basis-1/2 bg-camel-yellow">
                <div className="basis-full height-screen bg-camel-yellow -skew-x-12"></div>
              </div>
              <div className="basis-1/2 bg-camel-blue">
                <div className="basis-full height-screen bg-camel-blue -skew-x-12"></div>
              </div>
              <div className="absolute grid place-content-center w-screen height-screen">
                {/* <img src="assets/img/splash-yellow-blue.svg" className="splash height-screen"/> */}
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
              <div className="absolute flex place-content-center w-screen h-screen">
                <motion.img
                  src="assets/images/camel-yellow-pack.png"
                  className="h-4/6 rotate-12"
                  initial={{ x: 100, y: -1000, rotate: 0 }}
                  animate={{ x: 10, y: 150, rotate: 12 }}
                  transition={{
                    type: "spring",
                    duration: 0.5,
                    delay: 1
                  }}
                />
                {/* <img src="assets/img/camel-yellow-pack.png" className="h-4/6 transform rotate-12 translate-y-44"/> */}
              </div>
              <div className="absolute flex place-content-center w-screen h-screen">
                <motion.img
                  src="assets/images/camel-blue-pack.png"
                  className="h-4/6 rotate-12"
                  initial={{ x: 100, y: 1000, rotate: 0 }}
                  animate={{ x: 280, y: 180, rotate: 12 }}
                  transition={{
                    type: "spring",
                    duration: 0.5,
                    delay: 1
                  }}
                />
                {/* <img src="assets/img/camel-blue-pack.png" className="h-4/6 transform rotate-12 translate-x-72 translate-y-44"/> */}
              </div>
            </div>
            <div className="absolute flex flex-row height-screen w-screen">
              <div className="basis-1/2">
                <div>
                  <h1 className="mt-6 ml-6 text-6xl text-camel-blue">TOUT<br />EST<br />DANS</h1>
                  <h2 className="margin-top attitude ml-6 text-7xl text-camel-darkblue transform -rotate-12 -translate-y-20">L'ATTITUDE!</h2>
                  <img src="assets/images/attitude.svg" className="img" />
                </div>
              </div>
              <div className="basis-1/2 flex flex-wrap content-end">
                {/* <span class="absolute right-0 bottom-0">sdfsfsd</span> */}
                <a href='smoker'>
                  <img src="assets/images/lets-camel.svg" className="absolute h-1/6 right-20 lets" />
                </a>

              </div>
            </div>
            <Script strategy="beforeInteractive" src="assets/js/custom-script.js" />
          </div>
        </div>
      </div>
      <div className="flex-none h-14">FUMER NUIT À VOTRE ENTOURAGE التدخين يضر بمحيطكم
      </div>
    </div>
  )
}
