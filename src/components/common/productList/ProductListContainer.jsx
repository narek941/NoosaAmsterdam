import ProductList from "./ProductList";
import React, {useEffect} from "react";
import { connect } from 'react-redux'
import { getBestProductThunk } from '../../../redux/reducers/bestProductsReducer';

const ProductListContainer = (props) => {
  useEffect(()=>{
    props.getBestProductThunk();
  },[])

  return <ProductList bestProduct={props.bestProduct} />
 
};

const mapStateToProps = state => {
  return {
    bestProduct: state.bestProduct.bestProduct,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getBestProductThunk,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListContainer);
