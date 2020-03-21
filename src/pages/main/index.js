import React, {Component} from 'react';
import api from '../../services/api';
import ProductsList from '../main/components/products-list/index'
import './styles.css';

export default class Main extends Component {

    state = {
        products: [],
        pageInfo: {},
        currentPage: 1
    }

    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async (page = 1) => {
        const products = await api.get(`/products?page=${page}`);
        const {docs, ...pageInfo} = products.data;
        this.setState({products: docs, pageInfo, currentPage: page});
    }

    setAnteriorPage = () => {
        const {currentPage} = this.state;
        if (currentPage === 1) return;
        this.loadProducts(currentPage - 1)
    }

    setProximoPage = () => {
        const {currentPage, pageInfo} = this.state;
        if (currentPage === pageInfo.pages) return;
        this.loadProducts(currentPage + 1)
    }

    render() {
        return (
            <div className='Main'>
              <ProductsList anterior={this.setAnteriorPage} proximo={this.setProximoPage} products={this.state.products}></ProductsList>
            </div>
        );
    }

}
