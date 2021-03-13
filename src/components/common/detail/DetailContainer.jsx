import React, { useEffect } from "react";
import {connect} from "react-redux";
import {getProductByIdThunk} from "../../../redux/reducers/productsByIdReducer";
import Detail from "./Detail";



const DetailContainer = (props) => {
debugger;
    useEffect(()=>{

        props.getProductByIdThunk(window.location.pathname.split("id=").pop());
    },[])

    return   <Detail />

};

const mapStateToProps = state => {
    return {
        productsById:state.productsById.productsById,
        isFetching:  state.productsById.productsById,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getProductByIdThunk,
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DetailContainer);