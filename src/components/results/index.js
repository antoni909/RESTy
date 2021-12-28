import Card from 'react-bootstrap/Card'

const Results = ({data, isLoading}) => {
  return(
    <div>{
      isLoading
        ?<Card body style={ {width: "50rem"} } >
          <Card.Text>
            Fetching ...
          </Card.Text>
        </Card>
        :<Card body style={ {width: "50rem"} }>{
            data
              ?<div>
                <pre data-testid="json-headers">
                  Headers: {data ? JSON.stringify(data.headers, undefined, 2) : null}
                </pre>
                <pre data-testid="json-res-body">
                  Response: {data ? JSON.stringify(data.data, undefined, 2) : null}
                </pre>
                </div>
              : null
          }</Card>
      }
    </div>
  )
}

export default Results;
