import React from 'react';
import Layout from '../components/indexLayout';

const GoogleFormPage = () => (
  <Layout>
    <div className="container mx-auto p-4 flex flex-col items-center">
      {/* <h1 className="text-center text-2xl font-bold mb-6">SOSC Next-Gen'25</h1> */}
      <div className="w-full max-w-2xl">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSdWbSmvhiTLzbK0MJiJVicWgkk3IxsU8LsNF-w1HBtuGXYa5A/viewform?embedded=true"
          width="100%"
          height="1000"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="SOSC Next-Gen'25"
          className="w-full rounded-lg shadow-md"
          style={{
            minHeight: '700px',
            marginTop: '150px',
          }}
        >
          Loading…
        </iframe>
      </div>
    </div>
  </Layout>
);

export default GoogleFormPage;
