
const Header = ({title}) => {

  return(
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
  )

}

export default Header;
