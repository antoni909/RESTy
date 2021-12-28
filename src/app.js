import React, { useState } from 'react';
import './app.scss';
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const App = () => {

  const [data , setData ] = useState(null)
  const [requestParams , setReqParams ] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  const callApi = async (reqParams) => {
    setIsLoading(true)
    setTimeout(() => {
      setData(reqParams.data)
      setReqParams(reqParams)
      setIsLoading(false) 
    }, 2000);
  }

  return (
      <Container fluid>

        <Row className="justify-content-md-center">
          <Header 
            title="RESTy"
            url={requestParams['url']}
            method={requestParams['method']}
          />
        </Row>

        <Row className="justify-content-md-center">
          <Col md="auto">
            <Form 
              handleApiCall={callApi} 
            />
          </Col>
          <Col md="auto">
            <Results
              isLoading={isLoading} 
              data={data} 
            />
          </Col>
        </Row>

        <Footer />

      </Container>
  );

}

export default App;
