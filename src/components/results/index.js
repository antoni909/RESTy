import Card from 'react-bootstrap/Card'

const Results = ({data, isLoading}) => {
  console.log('results isLoading: ',isLoading)
  if(data&&isLoading){ return (
        <Card body style={ {width: "50rem"} } >
            <pre>
              Headers: {data ? JSON.stringify(data.headers, undefined, 2) : null}
            </pre>
            <pre>
              Response: {data ? JSON.stringify(data.data, undefined, 2) : null}
            </pre>
        </Card>
    );
  }else{ return (
      <Card body style={ {width: "50rem"} } >
        <Card.Text>
          Awaiting Input
        </Card.Text>
      </Card>
    );
  }
}

export default Results;
