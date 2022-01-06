import History from '../history/index'
import Card from 'react-bootstrap/Card'

const Results = ({history, response, isLoading}) => {

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
                  <History history={history}/>
                    Your JSON :
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
