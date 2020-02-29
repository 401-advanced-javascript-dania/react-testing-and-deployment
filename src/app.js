
import React from 'react';
import Header from './modules/header.js'
import Footer from './modules/footer.js'
import Main from'./modules/main.js'
import './app.scss';
class App extends React.Component{
  render(){
    return(
      <React.Fragment>
        <Header/>
        <Main/>
        <Footer/>
      </React.Fragment>
    )
  }
}
export default App;