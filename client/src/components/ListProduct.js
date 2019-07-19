import React from 'react';
import './style.css'
import { NavLink } from 'react-router-dom';


const ListProduct = (props) => {
    return (
        <div className="card">
            <div className="col-md-3 col-sm-6">
                <div className="product-grid5">
                    <div className="product-image5">
                        <a href="#">
                            <img className="pic-1" src="https://img20.jd.id/Indonesia/s800x800_/nHBfsgAAZwAAAAoAGkvS6AADdlM.jpg" alt="a"></img>
                            <img className="pic-2" src="https://img20.jd.id/Indonesia/s800x800_/nHBfsgAArgAAABAAF9y1ZAACmos.jpg" alt="a"></img>
                        </a>

                        <ul className="social">
                            <li><a data-tip="Quick View"><i className="fa fa-search"></i></a></li>
                            <li><a data-tip="Add to Wishlist"><i className="fa fa-shopping-bag"></i></a></li>
                            <li><a data-tip="Add to Cart"><i className="fa fa-shopping-cart"></i></a></li>
                        </ul>

                        <NavLink className="select-options" to='/DetailProduct' onClick={() => { props.onSelected(props.data) }}><i className="fa fa-arrow-right"></i> Detail Product</NavLink>
                    </div>

                    <div className="product-content">
                        <h3 className="title text-center">{props.data.title}</h3>
                        <div className="price text-center"><strong>Rp{props.data.price}</strong></div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ListProduct
