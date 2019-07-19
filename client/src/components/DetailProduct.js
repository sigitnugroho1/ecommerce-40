import React, { Component } from 'react';
import './styledetailproduct.css';
// import * as redux from 'redux';
import { connect } from 'react-redux';



class DetailProduct extends Component {

    render() {
        console.log(this.props.item);
        return (

            <div className="container" style={{ marginBottom: "30px", marginTop: "30px" }}>
                <div className="card">
                    <div className="container">
                        <div className="wrapper row">
                            <div className="preview col-md-6">

                                <div className="preview-pic tab-content">
                                    <div className="tab-pane active" id="pic-1"><img className="pic-1" src="https://img20.jd.id/Indonesia/s800x800_/nHBfsgAAZwAAAAoAGkvS6AADdlM.jpg" style={{ height: '600px', width: '600px' }} alt="gambar" /></div>
                                </div>
                            </div>

                            <div className="details col-md-6">
                                <h3 className="product-title">{this.props.item.title}</h3>
                                <div className="rating">
                                    <div className="stars">
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                    </div>
                                    <span className="review-no">41 reviews</span>
                                </div>

                                <p className="product-description">{this.props.item.description}</p>
                                <h4 className="price">price: <span><strong>Rp.{this.props.item.price}</strong></span></h4>
                                <p className="vote"><strong>91%</strong> of buyers enjoyed this product! <strong>(87 votes)</strong></p>

                                <h5 className="sizes">Capacity :
							        <span className="btn btn-outline-secondary mx-sm-1" data-toggle="tooltip" title="small">32</span>
                                    <span className="btn btn-outline-secondary mx-sm-1" data-toggle="tooltip" title="medium">64</span>
                                    <span className="btn btn-outline-secondary mx-sm-1" data-toggle="tooltip" title="large">128</span>
                                    <span className="btn btn-outline-secondary mx-sm-1" data-toggle="tooltip" title="xtra large">256</span>
                                </h5>

                                <h5 className="colors">colors:
							        <span className="color orange not-available" data-toggle="tooltip" title="Not In store"></span>
                                    <span className="color green"></span>
                                    <span className="color blue"></span>
                                </h5>
                                <br />

                                <div>
                                    <button className="btn btn-info" type="button">add to cart</button>
                                    <button className=" btn btn-default" type="button"><span className="fa fa-heart fa-2x" style={{ color: "red" }}></span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        item: state.item
    }
}


export default connect(mapStateToProps)(DetailProduct)
