import React, { useState } from "react";
import { NoosaButton } from "../../../components";
import { ReactComponent as CloseIcon } from "../../../assets/Close.svg";
import { ReactComponent as TickIcon } from "../../../assets/Tick.svg";
import TextField from "@material-ui/core/TextField";

import styles from "./Order.module.scss";

const Order = (...props) => {
  const [sameAs, setSameAs] = useState(false);
  const [agree, setAgree] = useState(false);

  const test = [
    {
      id: 6,
      img: "https://i.ibb.co/RhPw5dq/product-1.png",
      price: 36,
      sale: 10,
      sex: "women",
      title: "Classic Bracelet Mamba",
      total: "24",
      qty: 1,
      selectedSize: "S",
    },
    {
      id: 7,
      img: "https://i.ibb.co/RhPw5dq/product-1.png",
      price: 36,
      sale: 10,
      sex: "women",
      title: "Classic Bracelet Mamba",
      total: "24",
      qty: 1,
      selectedSize: "S",
    },
  ];

  const renderItems = test.map(
    ({ id, img, price, title, qty, selectedSize }, index) => (
      <div className={styles.order__basket_item} key={index}>
        <div>
          <img src={img} alt={img} />
        </div>
        <div className={styles.order__basket_item_name}>
          <p>{title}</p>

          <p>
            <span>Size </span>
            {selectedSize}
          </p>
          <span className={styles.order__basket_item_name_qty}>{qty} Qty</span>
        </div>
        <div>{price}$</div>
        <div className={styles.order__basket_item_qty}>
          <button>-</button>
          <span>{qty}</span>
          <button>+</button>
        </div>
        <div>{price * qty}$</div>
        <div className={styles.order__basket_item_close}>
          <CloseIcon />
        </div>
      </div>
    )
  );

  return (
    <section>
      <div className={styles.container}>
        <h2>Your Shopping Cart</h2>
        <div className={styles.order}>
          <div className={styles.order__basket}>
            <div className={styles.order__basket_item}>
              <div className={styles.order__basket_item_header}>Photo</div>
              <div className={styles.order__basket_item_header}>Product</div>
              <div className={styles.order__basket_item_header}>Price</div>
              <div className={styles.order__basket_item_header}>Qty</div>
              <div className={styles.order__basket_item_header}>Total</div>
              <div className={styles.order__basket_item_header}></div>
            </div>
            {renderItems}
          </div>
          <div className={styles.order__check}>
            <h3>Your order</h3>
            <div className={styles.order__check_title}>
              <p>Product</p>
              <p>Total</p>
            </div>
            <div className={styles.order__check_item}>
              <span>Classic Bracelet Mamba x 2</span>
              <span>94$</span>
            </div>
            <div className={styles.order__check_item}>
              <span>Classic Bracelet Mamba x 2</span>
              <span>94$</span>
            </div>
            <div className={styles.order__check_title}>
              <p>Delivery</p>
              <p>free</p>
            </div>
            <div className={styles.order__check_title}>
              <p>Total</p>
              <p>124$</p>
            </div>

            <div
              className={styles.check_wrapper}
              onClick={() => setAgree(!agree)}
            >
              <input type="checkbox" id="agree" name="agree" checked={agree} />
              <span className={styles.check_wrapper_tick}>
                {agree && <TickIcon />}
              </span>

              <label htmlFor="agree">
                I agree to the Processing of personal data
              </label>
            </div>

            <NoosaButton className={styles.check_wrapper_button}>
              Checkout
            </NoosaButton>
          </div>
        </div>
        <div className={styles.delivery__wrapper}>
          <p className={styles.delivery__wrapper_header}>1. Address</p>
          <div className={styles.delivery}>
            <div className={styles.delivery__step}>
              <TextField label="Full Name" />
              <TextField label="Address" />
              <TextField label="City" />
              <TextField label="Phone Number" />
              <div
                className={styles.check_wrapper}
                onClick={() => setSameAs(!sameAs)}
              >
                <input
                  type="checkbox"
                  id="isSame"
                  name="isSame"
                  checked={sameAs}
                />
                <span className={styles.check_wrapper_tick}>
                  {sameAs && <TickIcon />}
                </span>

                <label htmlFor="isSame">Same as delivery address</label>
              </div>
            </div>
            <div className={styles.delivery__step}>
              <TextField label="State" />
              <TextField label="Postcode" />
              <TextField label="Country" />
            </div>
          </div>
        </div>

        <div className={styles.delivery__wrapper}>
          <p className={styles.delivery__wrapper_header}>2. Payment Method</p>
          <div className={styles.payment}>
            <div className={styles.payment__method}>
              <div>
                <input type="radio" id="isCard" name="isCard" value="isCard" />
                <label htmlFor="isCard">Credit Card</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="isPaypal"
                  name="isCard"
                  value="isPaypal"
                />
                <label htmlFor="isPaypal">Paypal</label>
              </div>
            </div>
            <div className={styles.payment_input}>
              <label htmlFor="card_number">Card Number</label>
              <input type="number" id="card_number" />
            </div>
            <div className={styles.payment_input}>
              <label htmlFor="card_name">Name on Card</label>
              <input type="text" id="card_name" />
            </div>
            <div className={styles.payment_input_last}>
              <div className={styles.payment_input}>
                <label htmlFor="card_expired">Expiration date (MM/YY)</label>
                <input type="number" id="card_expired" />
              </div>
              <div className={styles.payment_input}>
                <label htmlFor="card_expired">Security code / cvv</label>
                <input type="tel" id="card_cvv" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Order;
