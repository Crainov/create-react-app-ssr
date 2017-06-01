import React, { Component } from 'react';

class ProductDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: {},
      productLoaded: false
    };
  }

  componentWillMount() {
    fetch(`https://tuga.pro/api/ecommerce-demo/${this.props.match.params.productSlug}`)
      .then(r => r.json())
      .then(data => {
        this.setState({
          product: data,
          productLoaded: true
        });

        document.title = `eCommerce - Buy ${data.title} at the best price`;
        document.querySelector('meta[property="og:title"]').content = document.title;
        document.querySelector('meta[name="twitter:title"]').content = document.title;
        document.querySelector('meta[name="description"]').content = data.description;
        document.querySelector('meta[property="og:description"]').content = data.description;
        document.querySelector('meta[name="twitter:description"]').content = data.description;
      });
  }

  render() {
    return (
      <div className="ProductDetail">
        {this.state.productLoaded && (
          <div>
            <h1>{this.state.product.title}</h1>

            <img className="mainImage" src={this.state.product.mainImage} alt={this.state.product.title} />
            <div>
              <div className="images">
                {this.state.product.images.map(imgSrc => (
                  <img src={imgSrc}  key={imgSrc} alt={this.state.product.title} />
                ))}
              </div>
              <p>{this.state.product.description}</p>
            </div>
          </div>
        )}

      </div>
    );
  }
}

export default ProductDetail;
