import Card from 'react-bootstrap/Card'

const Header = ({title, method, url}) => {
  return(
    <>
      <header>
        <h1 
          data-testid="header-1"
          className="header">{title}</h1>
        <h2 
          title="subtitle" 
          className="header2"
        >by: antoni909
        </h2>
      </header>
      {
        method && url
        ?<Card style={{ width: "30rem"}}>
          <Card.Body>
            <Card.Text>
              Method: {(method)}
            </Card.Text>
            <Card.Text>
              URL: {(url)}
            </Card.Text>
          </Card.Body>
         </Card>
        :null
      }
    </>
  )

}

export default Header;
