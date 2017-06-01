import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import Home from './Home';
import ProductDetail from './ProductDetail';

import './App.css';

class App extends Component {

  render() {
    // return (
    //   <div className="App">
    //     <div className="App-header">
    //       <img src={logo} className="App-logo" alt="logo" />
    //       <h2>Welcome to React</h2>
    //     </div>
    //     <div className="App-intro">
    //       {this.state.productsLoaded && (
    //         {this.state.products.map(product => (
    //           <h1>{product.title}</h1>
    //
    //         ))}
    //       )}
    //     </div>
    //   </div>
    // );

    return (
      <Router>
        <div className="App">
          <Link to="/"><span role="img" aria-label="Home">🏠</span> Home</Link>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/:productSlug" component={ProductDetail} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
