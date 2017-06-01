import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      productsLoaded: false
    };

    document.title = 'ecommerce - the best deals are here!';
  }

  componentWillMount() {
    fetch('https://tuga.pro/api/ecommerce-demo')
      .then(r => r.json())
      .then(data => {
        this.setState({
          products: data,
          productsLoaded: true
        });

        document.title = `eCommerce - ${data.length} products found`;
        document.querySelector('meta[property="og:title"]').content = document.title;
        document.querySelector('meta[name="twitter:title"]').content = document.title;
        document.querySelector('meta[name="description"]').content = `This is a page displaying ${data.length}`;
        document.querySelector('meta[property="og:description"]').content = `This is a page displaying ${data.length}`;
        document.querySelector('meta[name="twitter:description"]').content = `This is a page displaying ${data.length}`;
      });
  }

  render() {
    return (
      <div className="Home">
        {this.state.productsLoaded && this.state.products.map(product => (
          <div className="productRow" key={product._id}>
            <Link to={`/${product.slug}`}>
              <h1>{product.title}</h1>
            </Link>

            <img className="mainImage" src={product.mainImage} alt={product.title} />
            <div>
              <div className="images">
                {product.images.map(imgSrc => (
                  <img src={imgSrc}  key={imgSrc} alt={product.title} />
                ))}
              </div>
              <p>{product.description}</p>
            </div>

            <hr/>
          </div>
        ))}
      </div>
    );
  }
}

export default Home;
