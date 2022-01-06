import React, {useState} from 'react'
// import Card from 'react-bootstrap/Card'
import './history.scss';

const History = ({history}) => {

  // should contain: method, url, resutls in json

  const handleClick = (targetURL) => {
    console.log('clicked: ',targetURL)
    // const action = {
    //   type: 'SEARCH_history',
    //   payload: targetURL
    // }
    // dispatch(action)
  }

  return(
    <div>
      Your History: 
      <ol>
        {history.map((item,idx) => (
          <li
            onClick={()=> {handleClick(item.url)}} 
            key={idx}
          >
              {item.method} / {item.url}
          </li>
        ))}
      </ol>
    </div>
  )
}

export default History;
