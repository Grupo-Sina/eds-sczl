import Header from '@/app/components/Header/Header'
import Footer from '@/app/components/Footer/Footer'

import Image from 'next/image'

import shirtgradienteffect from '../../../public/shirtgradienteffect.png'
import gradienteffectleft from '../../../public/gradienteffectleft.png'
import edsvectorleft from '../../../public/edsvectorleft.png'
import edsvectorright from '../../../public/edsvectorright.png'
import { Metadata } from 'next'
import GoogleAnalytics from '../components/GoogleAnalytics/GoogleAnalytics'

interface LayoutProps {
  children: React.ReactNode
}

const METRICS_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS

export default function Home({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body>
        {METRICS_ID && <GoogleAnalytics ga_id={METRICS_ID} />}
        <div className="bg-[#1F3694] bg-center bg-cover min-h-screen w-screen bg-no-repeat flex flex-col justify-between overflow-x-hidden relative items-center">
          <Header />
          <Image
            src={edsvectorleft}
            alt="shirtgradienteffect"
            className="absolute top-0 left-0"
          />
          <Image
            src={shirtgradienteffect}
            alt="shirtgradienteffect"
            className="absolute top-0 right-0 overflow-hidden h-screen w-screen object-cover"
          />
          <Image
            src={gradienteffectleft}
            alt="shirtgradienteffect"
            className="absolute left-0 bottom-0 overflow-hidden object-cover"
          />
          <Image
            src={edsvectorright}
            alt="shirtgradienteffect"
            className="absolute right-0 bottom-0 overflow-hidden"
          />
          <div className="flex flex-col justify-center md:flex-row w-screen md:justify-evenly items-center">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  )
}
