import React, {Component} from 'react';
import api from '../../services/api'
import "./styles.css";

export default class Product extends  Component {

    state = {
        product: {},
    }

    componentDidMount() {

        const { id } = this.props.match.params;
        if(id) {
            this.loadProduct(id);
        }

    }

    loadProduct =  async (id) => {
        const res = await api.get(`/products/${id}`);
        if(res) {
            this.setState({product: res.data});
        }
   }

    render() {

        const { product } = this.state;

        return (
            <div className="Product">
                <div className="product-container">
                    <div className="product-details">
                    <h1>{product.title}</h1>
                    <p>{product.description}</p>
                    <a target="_blank" href={product.url}>Acessar Projeto</a>
                    </div>
                    </div>
            </div>
        )
    }

}
