import React from 'react';
import './App.css';
import Header from './components/header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from './components/mainContent/slider/Slider';
import Tables from './components/mainContent/Tables/Tables';
import Slider2 from './components/mainContent/oneMoreSlider/Slider2';
import Footer from './components/footer/Footer';
import { Route, withRouter } from 'react-router-dom';
import StubLink from './components/stubLink/StubLink';

class App extends React.Component {
  
  render () {
    return (<>
    <Route exact path='/' render={() => {
     return(<>
      <Header />
      <Slider />
      <Tables />
      <Slider2 />
      <Footer />
      </>)
    }} />
      <Route exact path='/box' render={() => {
        return <StubLink />
      }} />
      
      
      </>);
  }
}
export default withRouter(App);
