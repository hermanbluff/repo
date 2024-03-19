import { useState, useEffect } from "react"
import React from 'react'
import Image from 'next/image'

import sideBlob from '../../public/assets/sideBlob.svg'

const VideoEmbedding = () => {
    const [values, setValues] = useState([])

    useEffect(() => {
        const getValuesFromDB = async () => {
            const response = await fetch('/api/getVideoEmbedding')
            const data = await response.json();
            if (data) {
                setValues(data);
            }
        }
        getValuesFromDB()
    }, [])

    useEffect(() => {
        console.log(values);
    }, [values])


    return (
        <section className="flex flex-col items-center justify-between gap-5 relative my-10 m-auto w-[100%]">
            <h3>{values.heading}</h3>
            <p>{values.paragraph}</p>
            <iframe className='z-50 mt-5 min-h-[300px] md:min-h-[600px] w-full' src={values.videoLink} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <Image src={sideBlob} alt='dotted pattern' className="absolute h-[500px] w-[500px] md:right-[-15%] top-[-15%] z-20 overflow-x-hidden"></Image>
        </section>
    )
}

export default VideoEmbedding