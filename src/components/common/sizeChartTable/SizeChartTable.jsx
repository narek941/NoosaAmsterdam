import React from "react";
import styles from "./SizeChartTable.module.css";

const SizeChartTable = () => {
    return (
      <div className={styles.sizeChartTableDiv}>
      <h3>Size Table</h3>
      <table>
        
        <thead>
          <tr>
            <th>Size</th>
            <th>XS</th>
            <th>S</th>
            <th>M</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>in one turn (cm)</td>
            <td></td>
            <td>to 16</td>
            <td>16 -19</td>
          </tr>
          <tr>
            <td>double / triple (cm)</td>
            <td>to 14</td>
            <td>to 14 -17</td>
            <td>17 -20</td>
          </tr>
        </tbody>
      </table>
      </div>
    );
  }
  export default SizeChartTable;