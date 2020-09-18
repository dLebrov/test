import React from 'react';
import './App.css';
import Header from './components/header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollProblems from './components/mainContent/ScrollProblems';

class App extends React.Component {

  render () {
    return (<>
      <Header />
      <ScrollProblems />
    </>);
  }
}
export default App;
