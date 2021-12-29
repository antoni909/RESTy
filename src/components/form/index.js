import React, {useState} from 'react'
import Card from 'react-bootstrap/Card'
// import Spinner from 'react-bootstrap/Spinner'
import axios from 'axios'
import './form.scss';

const Form = ({handleApiCall}) => {

  const [url, setURL] = useState('')
  const [method, setMethod] = useState('')

  // const fetchData = async () => {
  //   fetch(
  //     url, 
  //     {method: method, 
  //       headers: 
  //         {'Content-type': 'application/json; charset=UTF-8'}
  //     })
  //     .then(res =>{
  //       const arr = res.headers.entries()
  //       const headers = Object.fromEntries(arr)
  //       setHeaders(headers)
  //       return res.json()
  //     })
  //     .then(results => setResults(results))
  //     ,(error) => setError(error)
  // }

  const fetchAPI = async () => {
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
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await fetchAPI()
    handleApiCall({ 
      data: data, 
      method: method, 
      url: url
    });
    e.target.reset()
  }
    return (
      <Card style={{ width: "30rem" }}>
        <Card.Body>
          <form testid="formsubmit" onSubmit={handleSubmit}>
            <label>
              <span> URL </span>
              <input
                onChange={ (e) =>  setURL(e.target.value) }
                placeholder="enter url here ..."
                name='url' 
                type='text' 
              />
              <button 
                type="submit"> GO </button>
            </label>
            <label 
              onClick={ (e) => setMethod(e.target.id.toUpperCase()) } 
              className="methods">
              <span id="get">GET</span>
              <span id="post">POST</span>
              <span id="put">PUT</span>
              <span id="delete">DELETE</span>
            </label>
          </form>
        </Card.Body>
      </Card>
    );
}

export default Form;
