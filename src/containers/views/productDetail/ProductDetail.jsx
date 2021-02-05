import React, { useState, useEffect } from "react";
import styles from "./ProductDetail.module.css";
import { TypeLinks, NoosaButton } from "../../../components/buttons";
import Rating from "@material-ui/lab/Rating";
import Like from "../../../img/Like";
import { ProductCardSmall } from "../../../components/common/productCard";
import Grid from "@material-ui/core/Grid";
import * as Api from "../../../services/api";

const item = {
  color: "White",
  category: "bracelet",
  description:
    "The classic NOOSA-Amsterdam bracelet from the Indian Summer collection.",
  details:
    "The wallet is crafted according to the values ​​of the artisans of the Belgian leather manufactory. The accessory is presented in three colors - sage, blue and apricot. Three NOOSA-Amsterdam buttons can be attached to the product. The belt has colored metal clips.",
  id: 1,
  img: ["https://i.ibb.co/RhPw5dq/product-1.png"],
  material: "Leather",
  price: 36,
  sale: 10,
  sex: "women",
  size: ["xs", "s", "m"],
  title: "Classic Bracelet Mamba",
  total: 24,
  reviw: 4,
  reviwCount: 10,
};
const SizeChartTable = () => {
  return (
    <label classname={styles.sizeChartTable}>
      <thead>
        <tr classname={styles.sizeChartTableTr}>
          <th>Size</th>
          <th>XS</th>
          <th>S</th>
          <th>M</th>
        </tr>
      </thead>
      <tbody>
        <tr classname={styles.sizeChartTableTr}>
          <td>in one turn (cm)</td>
          <td></td>
          <td>to 16</td>
          <td>16 -19</td>
        </tr>
        <tr classname={styles.sizeChartTableTr}>
          <td>double / triple (cm)</td>
          <td>to 14</td>
          <td>to 14 -17</td>
          <td>17 -20</td>
        </tr>
      </tbody>
    </label>
  );
};

const ProductDetail = () => {
  const [star, setStar] = useState(item.reviw);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const s = Api.getLimitItems(4);
    s.then(function (value) {
      setProducts(value);
    });
  }, []);

  return (
    <section className={styles.sectionProductDetail}>
      <span className={styles.mainH}>
        Home / Products / {item.sex} / {item.category}
      </span>
      <div className={styles.mainProductDetail}>
        <div className={styles.imgAndLike}>
          <img className={styles.ProductDetailImg} src={item.img} alt="img" />
          <span className={styles.ProductDetailLike}>
            <Like />
          </span>
        </div>

        <div className={styles.cardDetailInfoContent}>
          <div className={styles.cardDetailTitle}>{item.title}</div>
          <div className={styles.cardDetailDescription}>{item.description}</div>
          <div className={styles.cardDetailPrice}>Price {item.price}$</div>
          <div className={styles.cardDetailSizeContainer}>
            {item.size.map((n) => (
              <div key={n} className={styles.cardDetailLabel}>
                <input
                  className={styles.sizeInput}
                  type="radio"
                  id="option-one"
                  name="selector"
                ></input>
                <label className={styles.sizeLabel}>{n}</label>
              </div>
            ))}
          </div>
          <div className={styles.detailAction}>
            <span className={styles.btnSizeTable}>
              <NoosaButton type="product">Size Table</NoosaButton>
              <NoosaButton type="productSmall">Qty:1</NoosaButton>
            </span>
            <span className={styles.detailActionSize}>
              <div>
                <span className={styles.btnProductDetail}>
                  <NoosaButton type="simple">Add to chart</NoosaButton>
                </span>
                <span>
                  <NoosaButton type="simple">Buy Now</NoosaButton>
                </span>
              </div>
              <div>
              <SizeChartTable />
              </div>
            </span>
            <div>
              <Rating
                name="simple-controlled"
                value={star}
                onChange={(event, newValue) => {
                  setStar(newValue);
                }}
              />
              {item.reviwCount} reviews
            </div>
          </div>
          <div className={styles.ProductDetails}>
            <div className={styles.ProductDetailTextTitle}>Product Details</div>
            <div className={styles.ProductDetailText}>{item.details}</div>
          </div>
        </div>
      </div>
      <div className={styles.similarProduct}>
        <img className={styles.similarProductImg} src={item.img} alt="img1" />
        <img className={styles.similarProductImg} src={item.img} alt="img2" />
        <img className={styles.similarProductImg} src={item.img} alt="img3" />
      </div>
      <Grid container spacing={1}>
        <span className={styles.similar}>Similar Products</span>
        <Grid container item xs={12} spacing={4}>
          <ProductCardSmall products={products} />
        </Grid>
      </Grid>
    </section>
  );
};

export default ProductDetail;
