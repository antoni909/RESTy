import React from 'react';
import './app.scss';
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: null,
      requestParams: {},
    };
  }

  callApi = (requestParams) => {

    this.setState(
        {
          data: requestParams.data.data, 
          requestParams: requestParams
        }
      );
    }

  render() {
    return (
      <>
        <Header />
          <div>
            Request Method: {this.state.requestParams.method}
          </div>
          <div>
            URL: {this.state.requestParams.url}
          </div>
        <Form 
          handleApiCall={this.callApi} 
        />
        <Results 
          data={this.state.data} 
        />
        <Footer />
      </>
    );
  }
}

export default App;
