import ProductList from "./ProductList";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getBestProductThunk } from "../../../redux/reducers/bestProductsReducer";

const ProductListContainer = (props) => {
  useEffect(() => {
    props.getBestProductThunk();
  }, []);

  return props.isFetching ? (
    <>Loading</>
  ) : (
    <ProductList bestProduct={props.bestProduct} />
  );
};

const mapStateToProps = (state) => {
  return {
    bestProduct: state.bestProduct.bestProduct,
    isFetching: state.bestProduct.isFetching,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getBestProductThunk,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductListContainer);
