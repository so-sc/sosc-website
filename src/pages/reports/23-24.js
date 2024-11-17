import React from 'react'
import report23_24 from '../../reports/year-23-24.pdf'

export default function Report23_24() {
  return (
    <iframe
      src={report23_24}
      title="SOSC Annual Report AY 23-24"
      frameborder="0"
      style={{ width: '100%', height: '100vh' }}
    ></iframe>
  )
}
