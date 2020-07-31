import React, { Component } from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {ProductConsumer} from "../Context";
import sprites from '../assets/sprites.png';
import PropTypes from "prop-types";

class Product extends Component {
    render() {
        const {id, title, img, price, inCart, backgroundPosition} = this.props.product;
        const style = { backgroundImage: `url(${sprites})`, backgroundPosition};
        return (
            <ProductWrapper classname="col-9 mx-auto col-md-6 col-lg-3 my-3">
               <div className="card m-2">
                   <ProductConsumer>
                       {(value) => (<div className="img-container p-5 m-5" onClick={() => 
                       value.handleDetail(id)}
                   >
                   
                    <Link to="/details">
                    <img style={style} className="img-container p-5"></img>
                    </Link>
                    <button className="cart-btn" disabled={inCart ? true : false}
                    onClick={()=>{
                        value.addToCart(id);
                        value.openModal(id);
                    }
                }>
                    {inCart ? (
                    <p className="text-capitalize mb-0" disabled>{""}Adicionado</p>) : (< i className="fas fa-cart-plus"/>)}
                    </button>
                    </div>)}
                   </ProductConsumer>
                    <div className="card-footer d-flex justify-content-between">
                        <p className="align-self-center mb-0">{title}</p>
                        <h5 className="text-blue font-italic mb-0">
                            <span className="mr-1">R$</span>
                            {price}
                        </h5>
 
                    </div>

               </div>

               
            </ProductWrapper>
        );
    }
}

Product.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number, 
        inCart: PropTypes.bool
    }).isRequired
};


const ProductWrapper = styled.div`
.card {
    border-color: transparent;
    transition: all 1s linear;
   
}

.card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 1s linear;
}

&:hover {
    .card {
        border: solid rgba(0,0,0,0.2);
        box-shadow:2px 2px 5px 0px rgba(0,0,0,0.2);
        transition: all 1s linear;
    }
    .card-footer {
        background: #c3c3c3;
    }
}
.img-container {
    position: relative;
    overflow: hidden;
}
.card-img-top {
    transition: all 1s linear;
}
.img-container:hover .card-img-top {
    transform: scale(1.2);
}

.cart-btn {
    position: absolute;
    background: var(--lightBlue);
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem
    border: none;
    color: var(--mainWhite);
    font-size:1.4rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%);
}

.img-container:hover .cart-btn {
    transform: translate(0,0);
    transition: all 1s linear;

}

.cart-btn:hover {
    color: var(--mainBlue);
    cursor: pointer;
}
`;

export default Product;