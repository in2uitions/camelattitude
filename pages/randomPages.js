/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import styles from '../styles/Home.module.css'
import { motion } from "framer-motion"
import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router'
import { useState, useEffect } from "react";
import parse from 'html-react-parser';
import { getById } from '/api/server'
import { getAllRecords } from '/api/server'

export default function PageFive() {
    const { query } = useRouter()
    console.log('zIddddd in randomPages')
    console.log(localStorage.getItem('zId'))
    useEffect(() => {
        getApiData();
    }, []);

    const [nouvelleHomeObj, setPageNouvelleObj] = useState([]);
    const nouvelleHomeObjArray = Array.from(nouvelleHomeObj);
    const [loaded, setLoaded] = useState(false);
    const getApiData = async () => {

        const nouvelleObj = await getById('questions', query.page_id);
        setPageNouvelleObj(nouvelleObj);
        setLoaded(true);
    }
    const router = useRouter()
    const getRandomInt = (max) => {
        return Math.floor(Math.random() * max);
    }
    const dorouter = useRouter()
    const getRand = (max) => {
        return Math.floor(Math.random() * max);
    }
    const randomB = async () => {
        const ansObj = await getAllRecords('questions');
        var ansInd = getRandomInt(ansObj.length);
        for (let i = 0; i < ansObj.length; i++) {
            if (i == ansInd) {
                router.push({ pathname: '/answers[0]', query: { page_id: ansObj[i].id } });
            }
        }
    }
    const rand = async () => {
        const ans2Obj = await getAllRecords('questions');
        var ans2ind = getRand(ans2Obj.length);
        for (let i = 0; i < ans2Obj.length; i++) {
            if (i == ans2ind) {
                dorouter.push({ pathname: '/answers[1]', query: { page_id: ans2Obj[i].id } });
            }
        }
    }

    const thirdrouter = useRouter()
    const getRandom = (max) => {
        return Math.floor(Math.random() * max);
    }

    const random = async () => {
        const questObj = await getAllRecords('lighter');
        var questfirst = getRandom(questObj.length);
        for (let i = 0; i < questObj.length; i++) {
            if (i == questfirst) {
                thirdrouter.push({ pathname: '/answers[0]', query: { page_id: questObj[i].id } });
            }
        }
    }
    const fourthrouter = useRouter()
    const getRandomANS = (max) => {
        return Math.floor(Math.random() * max);
    }

    // const randomans = async () => {
    //     const quest2Obj = await getAllRecords('lighter');
    //     var questscd = getRandomANS(quest2Obj.length);
    //     for (let i = 0; i < quest2Obj.length; i++) {
    //         if (i == questscd) {
    //             fourthrouter.push({ pathname: '/answers[1]', query: { page_id: quest2Obj[i].id } });
    //         }
    //     }
    // }
    const randomans = async (value) => {
        try {
            const quest2Obj = await getAllRecords('lighter');
        var questscd = getRandomANS(quest2Obj.length);
            const result = await validationSchema.validate(value)
            if (result) {
               // const user = await createanswer(result)
                for (let i = 0; i < quest2Obj.length; i++) {
                    if (i == questscd) {
                        fourthrouter.push({ pathname: '/answers[1]', query: { page_id: quest2Obj[i].id } });
                    }
                }
            }
            // alert(JSON.stringify(result));
        } catch (e) { }
        // router.push({ pathname: '/chooseOne' }); 
    }
    return (
        <div className="flex flex-col h-screen">
            <div className="grow">
                <div className="flex flex-row overflow-hidden">
                    <div className="flex flex-row height-screen overflow-hidden ">
                        {nouvelleHomeObj.map((item) => (
                            <>
                                <div className='flex flex-column w-screen'>
                                    <div className=" flex flex-row  w-screen">

                                        <div className="basis-1/2" style={{ background: item.answers[0].color }}>
                                            <div className="basis-full h-screen -skew-x-12" style={{ background: item.answers[0].color }}></div>
                                        </div>
                                        <div className="basis-1/2" style={{ background: item.answers[1].color }}>
                                            <div className="basis-full h-screen -skew-x-12" style={{ background: item.answers[1].color }}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute flex flex-row height-screen w-screen">

                                    <>
                                        <div className="absolute grid place-content-center w-screen height-screen" key={item.id}>
                                            <h2 className="quest text-6xl">{parse(`${item.questions}`)}</h2>
                                            {/* <h2 className=" text-6xl">{item.id}</h2> */}
                                            <div className=" flex flex-row  w-screen">
                                                <div className="basis-1/2 ">
                                                    <div onClick={() => { randomB(); randomans(); localStorage.setItem('zQst', item.id); localStorage.setItem('zAns', item.answers[0].answer) }}>
                                                        <h3 className=" place absolument echecs text-camel-darkblue transform -rotate-12 -translate-y-20">{item.answers[0].answer}</h3>
                                                    </div>
                                                    <img src="assets/images/attitude.svg" className="icon" />
                                                </div>
                                                <div className="basis-1/2 ">
                                                    <div onClick={() => { rand(); randomans(); localStorage.setItem('zQst',  item.id); localStorage.setItem('zAns', item.answers[1].answer) }}>
                                                        <h3 className="place mettre absolument text-camel-darkblue transform -rotate-12 -translate-y-20">{item.answers[1].answer}</h3>
                                                    </div>
                                                    <img src="assets/images/attitude.svg" className="icon-f" />
                                                </div>
                                            </div>
                                        </div>
                                    </>

                                </div>
                                <Script strategy="beforeInteractive" src="assets/js/custom-script.js" />
                            </>
                        ))}
                    </div>
                </div>
                <div className="flex-none h-14">
                    fumer nuit à votre entourage التدخين يضر بمحيطكم
                </div>
            </div>
        </div>

    )
}
