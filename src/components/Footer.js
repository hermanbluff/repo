import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import dottedpattern from '../../public/assets/bottomDottedPattern.svg'

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
        <footer className='min-h-[50vh] relative mt-[40px] w-full'>
            <section className="md:w-[80%] w-[90%] footer md:mt-[80px] flex items-center justify-center min-h-[50vh] z-40">
                <div className="w-[80%] m-auto flex flex-col md:flex-row items-center justify-start gap-10 md:gap-20">
                    <h3>{brandName.brandTitle}</h3>
                    <div className="flex flex-col items-start justify-between gap-2 text-center">
                        <h5 className='font-semibold'>Wichtige Links</h5>
                        <div className="flex flex-col items-start justify-between gap-2">
                            <Link className='font-normal' href={'/impressum'}>Impressum</Link>
                            <Link className='font-normal' href={'/datenschutzerklarung'}>Datenschutzerklärung</Link>
                        </div>
                    </div>
                </div>
            </section>
            <div className='absolute right-0 top-[-80px] z-10 h-[300px] w-[300px]'>
                <Image src={dottedpattern} alt='dotted pattern'></Image>
            </div>
        </footer>
    )
}

export default Footer