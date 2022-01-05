import React, {useState} from 'react'
import Card from 'react-bootstrap/Card'
import './form.scss';

const Form = ({handleApiCall}) => {

  const [url, setURL] = useState('')
  const [method, setMethod] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();
      const payload = { 
        method: method, 
        url: url
      }
    handleApiCall(payload);
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
                required 
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
