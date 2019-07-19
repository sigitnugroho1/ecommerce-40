import React, { Component } from "react"
import { NavLink } from 'react-router-dom'
import * as AppActions from '../actions'
import * as redux from 'redux'
import { connect } from 'react-redux'


class AddForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            title: this.props.title || '',
            rate: this.props.rate || '',
            description: this.props.description || '',
            price: this.props.price || '',
            brand: this.props.brand || '',
            detailProduct: this.props.detailProduct || ''
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        let title = this.state.title.trim()
        let rate = this.state.rate.trim()
        let description = this.state.description.trim()
        let price = this.state.price.trim()
        let brand = this.state.brand.trim()
        let detailProduct = this.state.detailProduct.trim()

        if (!title || !rate || !description || !price || !brand || !detailProduct) {
            return
        }
        // console.log(this.props);

        this.props.actions.FormAdd(title, rate, description, price, brand, detailProduct);
        this.setState({ title: '', rate: '', description: '', price: '', brand: '', detailProduct: '' })
    }


    render() {
        return (
            <div className="container" style={{ marginTop: '10px' }}><br />
                <div className="card">
                    <div className="card-header text-white bg-info">
                        <h4><b>Add Ads</b></h4>
                    </div>

                    <div className="card-body">
                        <form className="form-horizontal" onSubmit={this.handleSubmit.bind(this)}>

                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label"><b>Title : </b></label>
                                <div className="co-sm-10">
                                    <input type="text" className="form-control" placeholder="Title"
                                        value={this.state.title} onChange={(e) => this.setState({ title: e.target.value })} />
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label"><b>Rate : </b></label>
                                <div className="co-sm-10">
                                    <input type="number" className="form-control" placeholder="Rate"
                                        value={this.state.rate} onChange={(e) => this.setState({ rate: e.target.value })} />
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label"><b>Description : </b></label>
                                <div className="co-sm-10">
                                    <textarea type="text" className="form-control" rows="3" placeholder="Description"
                                        value={this.state.description} onChange={(e) => this.setState({ description: e.target.value })}></textarea>
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label"><b>Price : </b></label>
                                <div className="co-sm-10">
                                    <input type="text" className="form-control" placeholder="Price"
                                        value={this.state.price} onChange={(e) => this.setState({ price: e.target.value })} />
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label"><b>Brand : </b></label>
                                <div className="co-sm-10">
                                    <input type="text" className="form-control" placeholder="Brand"
                                        value={this.state.brand} onChange={(e) => this.setState({ brand: e.target.value })} />
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label"><b>Detail Product : </b></label>
                                <div className="co-sm-10">
                                    <textarea rows="8" className="form-control" placeholder="Detail Product"
                                        value={this.state.detailProduct} onChange={(e) => this.setState({ detailProduct: e.target.value })}></textarea>
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label">Image</label>
                                <div className="col-sm-10">
                                    <input type="file" placeholder="file" />
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label"></label>
                                <div className="col-sm-10">
                                    <button type="submit" className="btn btn-info mr-2">Add</button>
                                    <NavLink to={{ pathname: '/' }} className="btn btn-warning mr-2">Cancel</NavLink>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        data: state.products
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: redux.bindActionCreators(AppActions, dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AddForm)