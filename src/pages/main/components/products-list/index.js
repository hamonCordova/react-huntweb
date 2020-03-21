import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

const ProductsList = (props) => {

    let actionsButtons = null;
    if(props.products && props.products.length) {
        actionsButtons = (<div className="actions" >
            <button onClick={props.anterior}>Anterior</button>
            <button onClick={props.proximo}>Próximo</button>
        </div>);
    }

    return (

      <div className="ProductsList">
          <div className="list">
          {props.products.map(product => {
              return(
                  <div className="product" key={product._id}>
                    <h1 className="product__title">{product.title}</h1>
                    <p className="product__description">{product.description}</p>
                    <Link to={`/product/${product._id}`} className="product__button-access">Acessar</Link>
                  </div>
              )
          })}

          </div>
              {actionsButtons}
      </div>
    );

}

export default ProductsList;
