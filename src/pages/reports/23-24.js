import React from 'react'
import { withPrefix } from 'gatsby-link'

export default function Report23_24() {
  return (
    <>
      <iframe
        src={withPrefix('/reports/year-23-24.pdf')}
        title="SOSC Annual Report AY 23-24"
        frameborder="0"
        style={{ width: '100%', height: '100vh' }}
      ></iframe>
    </>
  )
}
