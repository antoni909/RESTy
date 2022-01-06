import axios from 'axios'

export default function(url,method){
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
