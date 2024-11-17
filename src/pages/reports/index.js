import React from 'react'
import Card from '../../components/event_card'
import Layout from '../../components/indexLayout'
import GatsbyConfig from '../../../gatsby-config'
import CustomHelmet from '../../components/CustomHelmet'
import ay23_24Header from '../../images/sosc-ay-23-24-header.png'

const reports = [
  {
    id: 'AY-23-24',
    title: 'SOSC Annual Report AY 23-24',
    slug: '/reports/23-24',
    cover: ay23_24Header,
    date: '08-Oct-2024',
  },
]

export default function AllReports() {
  return (
    <Layout>
      <CustomHelmet page={GatsbyConfig.siteMetadata.reports} />
      <div className="page">
        <div className="container">
          <div className="event-card-container">
            {reports.map((report) => (
              <Card
                slug={report.slug}
                cover={report.cover}
                title={report.title}
                date={report.date}
                isNotMarkdown={true}
                key={report.id}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}
