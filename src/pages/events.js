import React from 'react'
import Card from '../components/card';
import Footer from '../components/footer';

const imgUrl = 'https://zocada.com/wp-content/uploads/2018/07/HLS_EXO-740x370.png';

const EventsPage = () => (
  <div className="page">
    <div className="container">
      <Card imgUrl={imgUrl} title="Android Workshop (Java)" date="24-Jul-2018"/>
    </div>
  </div>
)

export default EventsPage
