import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
// import './style.css'
import * as AppActions from '../actions'
import * as redux from 'redux'
import { connect } from 'react-redux'
import ListProduct from './ListProduct';



class ListPage extends Component {

    componentDidMount() {
        this.props.actions.loadData()
    }

    render() {
        const data = this.props.data
        const { onSelected } = this.props.actions
        let showProduct = data.map((item, index) => {
            return (
                <ListProduct
                    key={index}
                    data={item}
                    onSelected={onSelected}
                />
            )
        })

        return (
            <div className="container"><br />
                <NavLink className="btn btn-primary" to='/FormAdd' style={{ marginTop: "50px" }}><i className="fa fa-arrow-righ"></i><b> Add Ads</b></NavLink><br /><br />

                <div className="card-header bg-info text-white" style={{ marginBottom: "50px", marginTop: "20px" }}>
                    <h2><center><strong>PESONA Celular</ strong></center></h2>
                </div>

                {showProduct}

                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        <li className="page-item"><u className="page-link">Previous</u></li>
                        <li className="page-item"><u className="page-link">1</u></li>
                        <li className="page-item"><u className="page-link">2</u></li>
                        <li className="page-item"><u className="page-link">3</u></li>
                        <li className="page-item"><u className="page-link">Next</u></li>
                    </ul>
                </nav>
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


export default connect(mapStateToProps, mapDispatchToProps)(ListPage)