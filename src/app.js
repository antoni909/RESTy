import React, { useState, useEffect, useReducer } from 'react';
import axios from 'axios'
import './app.scss';
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const iState = {
  response: null,
  requestParams: {},
  isLoading: false
}
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
const reducer = (state = iState,{type,payload}) => {
  switch(type){
    case 'TOGGLE_isLoading': return {...state, ...payload}
    case 'NEW_requestParams': return {...state, requestParams:{...payload}}
    case 'FETCH_SUCCESS': return {...state, ...payload }
    default: return state
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, iState)
  const callAPI = async (reqParams) => { 
    dispatch({type:'TOGGLE_isLoading',payload: {isLoading: true} })
    setTimeout(() => {
      dispatch({type:'NEW_requestParams', payload: {...reqParams} })
      dispatch({type:'TOGGLE_isLoading',payload: {isLoading: false} })
    }, 1000);
  }
  
  useEffect( async () => {
    if(Object.keys(state.requestParams).length > 0){
      const response = await fetchAPI(
        state.requestParams.url, 
        state.requestParams.method
      )
      dispatch({type:'FETCH_SUCCESS', payload:{response: response}})
    }
  },[state.requestParams])

  return (
    <div>
        <Container fluid>
          <Row className="justify-content-md-center">
            <Header 
              title="RESTy"
              url={state.requestParams['url']}
              method={state.requestParams['method']}
            />
          </Row>
          <Row className="justify-content-md-center">
            <Col md="auto">
              <Form 
                handleApiCall={callAPI} 
              />
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            {
              state.response
              ?<Col md="auto">
              <Results
                isLoading={state.isLoading} 
                response={state.response} 
              />
            </Col>
              :null
            }
          </Row>
        </Container>
        <Footer />
      </div>
  );
//end
}

export default App;
