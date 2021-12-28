import React, {useState} from 'react'
import Card from 'react-bootstrap/Card'
// import Spinner from 'react-bootstrap/Spinner'
import axios from 'axios'
import './form.scss';

const Form = ({handleApiCall}) => {

  const [url, setURL] = useState('')
  const [method, setMethod] = useState('')

  const axiosGet = async () => {
    let data = null
    if( url === '' ){
      return data = await axios
        .get('https://pokeapi.co/api/v2/pokemon?limit=5')
        .then( res => res)
        .catch(e => console.log('error: ', e.message))
    }else{
      return data = await axios  
        .get(url)
        .then(res => res)
        .catch( e => console.log('error: ', e.message))
    }
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await axiosGet()
    handleApiCall({ 
      data: data, 
      method: method, 
      url: url
    });
    e.target.reset()
    setURL('')
    setMethod('')
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
              onClick={ (e) => setMethod(e.target.id) } 
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
