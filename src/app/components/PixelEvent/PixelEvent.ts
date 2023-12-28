'use client'
import React, { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

export const FacebookPixelEvents: React.FC = () => {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const pixelId = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID || ''
  useEffect(() => {
    import('react-facebook-pixel')
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init(pixelId) // don't forget to change this
        ReactPixel.pageView()
      })
  }, [pathname, searchParams, pixelId])

  return null
}
