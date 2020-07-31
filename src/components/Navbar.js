import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../dex.png';
import {ButtonContainer} from './Button';
import styled from 'styled-components';


class Navbar extends Component {
    render() {
        return (
            <nav  class="navbar navbar-expand-lg navbar-light bg-light">
                 { /* https://www.iconfinder.com/icons/1243689/call_phone_icon
                Creative Commons (Attribution 3.0 Unported);
                https://www.iconfinder.com/Makoto_msk */
                 }

                 <Link to="/">
                     <img src={logo} alt="store" className="navbar-brand"/>

                 </Link>
                 <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span></button>

                
                 <ul class="navbar-nav mr-auto">
                 <li class="nav-item active">
                    <Link to="/" className="nav-link">
                        Pokemon
                    </Link>
                 </li>
                 <li class="nav-item dropdown">
       
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Selecionar Tipo
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Fogo</a>
          <a class="dropdown-item" href="#">Água</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Ver Todos</a>
        </div>
        </a>
      </li>
                 </ul>
                 <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      
      <ButtonContainer class="btn btn-outline-success my-2 my-sm-0 ml-auto" type="submit">Buscar</ButtonContainer>
    </form>

<Link to='/cart' className="ml-auto">
                    <ButtonContainer> 
                        <span className="mr-2">
                        <i className="fas fa-cart-plus"/>
                        </span>
                        Carrinho 
                    </ButtonContainer>
                 </Link>


            </nav>
        );
    }

}


export default Navbar;