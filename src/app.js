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
    }, 1000);
  }
  return (
    <div>
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
          </Row>
          <Row className="justify-content-md-center">
            {
              data
              ?<Col md="auto">
              <Results
                isLoading={isLoading} 
                data={data} 
              />
            </Col>
              :null
            }
          </Row>

        </Container>
        <Footer />
      </div>

  );

}

export default App;
