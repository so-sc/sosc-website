import React from 'react'
import Helmet from 'react-helmet';


const CustomHelmet = ({ page, image }) => (
    <Helmet>
        <title>{page.title}</title>
        <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover"
        />
        <meta name="twitter:site" content="@sosc" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="SOSC" />
        <link
            rel="canonical"
            href={page.siteUrl}
        />
        {image && (
            <meta
                property="og:image"
                content={image}
            />
        )}
        <html lang="en" />
    </Helmet>
)


export default CustomHelmet