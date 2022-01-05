import React, { useState, useEffect } from 'react';
import axios from 'axios'
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
  const [requestParams , setRequestParams ] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  const fetchAPI = async (url,method) => {
    let response = null
    if( url && (method === 'GET') ){
      return response = await axios({
          method: method, 
          url: url,
        })  
          .then(res => res)
          .catch( e => console.log('error: ', e.message))
    }else if(url && (method === 'POST')){
      return response = await axios({
        method: method, 
        url: 'https://jsonplaceholder.typicode.com/posts',
        data: {title:'fake title', body:'fake body', userId: 2}
      })  
        .then(res => res)
        .catch( e => console.log('error: ', e.message))
    }else if(url && (method === 'PUT')){
      return response = await axios({
        method: method, 
        url: 'https://jsonplaceholder.typicode.com/posts/1',
        data: {
          id: 1,
          title: 'foo',
          body: 'bar',
          userId: 1,
        }
      })  
        .then(res => res)
        .catch( e => console.log('error: ', e.message))
    }else if(url && (method === 'DELETE')){
      return response = await axios({
        method: method, 
        url: 'https://jsonplaceholder.typicode.com/posts/1'
      })  
        .then( res => res )
        .catch( e => console.log('error: ', e.message))
    }else{ return response }
  }

  const callApi = async (reqParams) => {
    setIsLoading(true)
    setTimeout(() => {
      // setData(reqParams.data)
      setRequestParams(reqParams)
      setIsLoading(false) 
    }, 1000);
  }
  
  useEffect(async () => {
    if(Object.keys(requestParams).length > 0){
      const response = await fetchAPI(requestParams.url, requestParams.method)
      setData(response)
    }
  },[requestParams])

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
