import Head from 'next/head'

interface SEOProps {
  title: string
  description?: string
  image?: string
  shouldExcludeTitleSuffix?: boolean
  shouldIndexPage?: boolean
}

export default function SEO({
  title,
  description,
  image,
  shouldExcludeTitleSuffix = false,
  shouldIndexPage = true,
}: SEOProps) {
  const pageTitle = `EDS - ${!shouldExcludeTitleSuffix ? title : ''} `

  const defaultDescription =
    description || 'Esportes da Sorte, EDS, Super Copa Zona Leste.'

  const pageImage = image
    ? `${process.env.NEXT_PUBLIC_DOMAIN}/${image}`
    : undefined

  return (
    <Head>
      <title>{pageTitle}</title>
      {description && (
        <meta name="description" content={defaultDescription}></meta>
      )}
      {image && <meta name={image} content={pageImage} />}

      {!shouldIndexPage && <meta name="robots" content="noindex, nofollow" />}

      <meta httpEquiv="x-ua-compatible" content="IE=edge,chrome=1" />
      <meta name="MobileOptimized" content="320" />
      <meta name="HandheldFriendly" content="True" />
      <meta name="theme-color" content="#020C25" />
      <meta name="msapplication-TileColor" content="#020C25" />
      <meta name="referrer" content="no-referrer-when-downgrade" />
      <meta name="google" content="notranslate" />

      <meta name="keywords" content="Live Game,gaming platform"></meta>

      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={defaultDescription} />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={pageTitle} />
      <meta property="og:image" content={pageImage} />
      <meta property="og:image:secure_url" content={pageImage} />
      <meta property="og:image:alt" content="Thumbnail" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@user" />
      <meta name="twitter:creator" content="@user" />
      <meta name="twitter:image" content={pageImage} />
      <meta name="twitter:image:src" content={pageImage} />
      <meta name="twitter:image:alt" content="Thumbnail" />
      <meta name="twitter:image:width" content="1200" />
      <meta name="twitter:image:height" content="620" />
    </Head>
  )
}
