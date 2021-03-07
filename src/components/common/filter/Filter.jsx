import React from 'react';
import styles from './Filter.module.css';
const Filter = (props) => {

    return (
        <div className={styles.filterContainer}>
            <div className={styles.filterTitle}>Home / Products</div>
            <div className={styles.filterInputs}>



                <div className={styles.filterCheck}>
                    <ul> <label>Woman</label>
                        <input
                            type="checkbox"
                            checked={true}
                        /></ul>
                    <ul> <label>Men</label>
                        <input
                            type="checkbox"
                            checked={true}
                        /></ul>
                    <ul> <label>Braclets</label>
                        <input
                            type="checkbox"
                            checked={true}
                        /></ul>
                    <ul> <label>Buttons</label>
                        <input
                            type="checkbox"
                            checked={true}
                        /></ul>
                    <ul> <label>Belts</label>
                        <input
                            type="checkbox"
                            checked={true}
                        /></ul>
                    <ul> <label>Bags</label>
                        <input
                            type="checkbox"
                            checked={true}
                        /></ul>
                    <ul> <label>Wallets</label>
                        <input
                            type="checkbox"
                            checked={true}
                        /></ul>
                    <ul> <label>Collections</label>
                        <input
                            type="checkbox"
                            checked={true}
                        /></ul>
                    <ul> <label>Sale</label>
                        <input
                            type="checkbox"
                            checked={true}
                        /></ul>
                    <ul> <label>Price</label></ul>
                    <ul>
                        <input
                            type="range"
                            min="0"
                            max="100"
                            value="90"
                            step="10"/>

                    </ul>
                </div>


            </div>
        </div>

    )
}

export default Filter;