import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import dottedpattern from '../../public/assets/dottedPattern.svg'

const Footer = () => {
    const [brandName, setBrandName] = useState([])

    useEffect(() => {
        const getBrandNameFromDB = async () => {
            const response = await fetch('/api/getBrandNameFromDB')
            const data = await response.json();
            if (data) {
                setBrandName(data);
            }
        }
        getBrandNameFromDB()
    }, [])
    return (
        <footer className='min-h-[50vh] relative mt-[40px] w-full md:w-[90%] md:mt-[80px] flex items-center'>
            <section className="w-[80%] m-auto flex flex-col md:flex-row items-center justify-start gap-10 md:gap-20 z-40">
                <h3>{brandName.brandTitle}</h3>
                <div className="flex flex-col items-start justify-between gap-2 text-center">
                    <h5 className='font-semibold'>Wichtige Links</h5>
                    <div className="flex flex-col items-start justify-between gap-2">
                        <Link className='font-normal' href={'/impressum'}>Impressum</Link>
                        <Link className='font-normal' href={'/datenschutzerklarung'}>Datenschutzerklärung</Link>
                    </div>
                </div>
            </section>
            <div className='absolute md:top-[-40%] md:right-[-20%] md:h-[50vh] md:w-[400px] z-10 md:z-40'>
                <Image src={dottedpattern} alt='dotted pattern'></Image>
            </div>
        </footer>
    )
}

export default Footer