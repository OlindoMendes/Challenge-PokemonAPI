import React, { Component } from 'react';
import Product from './Product'
import style from './Product'
import Title from './Title';
import {ProductConsumer} from '../Context';

class ProductList extends Component {
  
    render() {
        return (
           <React.Fragment>
               <div className="py-5">
                   <div className="container">
                      
                       <div className="row">
                           <ProductConsumer>
                               {Objeto => {
                                  return Objeto.products.map(product => {
                                      return <Product key={product.id} product = {product} style={style}/>;
                                      }
);
                                }

                               }
                           </ProductConsumer>


                       </div>

                   </div>

               </div>
           </React.Fragment>
        );
    }
}

export default ProductList;