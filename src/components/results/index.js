import Card from 'react-bootstrap/Card'

const Results = ({response, isLoading}) => {
  return(
    <div>
      {
        isLoading
          ?<Card body style={ {width: "50rem"} } >
            <Card.Text>
              Fetching ...
            </Card.Text>
          </Card>
          :<Card body style={ {width: "50rem"} }>{
              response
                ?<div>
                  <pre data-testid="json-headers">
                    Headers: {response ? JSON.stringify(response.headers, undefined, 2) : null}
                  </pre>
                  <pre data-testid="json-res-body">
                    Response: {response ? JSON.stringify(response.data, undefined, 2) : null}
                  </pre>
                  </div>
                : null
          }</Card>
      }
    </div>
  )
}

export default Results;
