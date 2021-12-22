import React, { useState } from 'react';
import './app.scss';
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';

const App = () => {

  const [data , setData ] = useState(null)
  const [requestParams , setReqParams ] = useState({})

  const callApi = (reqParams) => { 

    setData(reqParams.data.data)
    setReqParams(reqParams)

  }

  return (
      <>
        <Header />
          <div>
            Request Method: {requestParams['method']}
          </div>
          <div>
            URL: {requestParams['url']}
          </div>
        <Form 
          handleApiCall={callApi} 
        />
        <Results 
          data={data} 
        />
        <Footer />
      </>
  );

}

export default App;
