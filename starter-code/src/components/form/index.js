import React, {useState} from 'react'
import axios from 'axios'
import './form.scss';

const Form = (props) => {
  // const baseURL = 'https://pokeapi.co/api/v2/pokemon?limit=5'
  const [url, setURL] = useState('')
  const [method, setMethod] = useState('')

  const handleURL = e =>{
    e.preventDefault();
    const inputURL = e.target.value
    setURL(inputURL)
  }

  const handleMethod = e => {
    e.preventDefault();
    const methodSelected = e.target.id
    setMethod(methodSelected)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    let data = null
    if(url === ''){
      data = await axios
        .get('https://pokeapi.co/api/v2/pokemon?limit=15')
        .then(res => res)
    }else{
      data = await axios  
        .get(url)
        .then(res => res)
    }

    props.handleApiCall({ data: data, method: method, url: url });

  }

    return (
      <>
        <form onSubmit={handleSubmit}>
          <label >
            <span> URL: </span>
            <input
              onChange={handleURL} 
              name='url' 
              type='text' />
            <button 
              type="submit"> GO </button>
          </label>
          <label 
            onClick={handleMethod}
            className="methods">
            <span id="get">GET</span>
            <span id="post">POST</span>
            <span id="put">PUT</span>
            <span id="delete">DELETE</span>
          </label>
        </form>
      </>
    );
}

export default Form;
