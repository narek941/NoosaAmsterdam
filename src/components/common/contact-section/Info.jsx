import React from 'react'
import  styles from './Info.module.scss'

import TextField from '@material-ui/core/TextField';

const Info = () => (
  <div className={styles.container}>
    <h2>Contact information</h2>
    <p className="info-h3">We will be glad to answer your questions every day until 20.00</p>
    <TextField  label="Email"  />
    <TextField  label="Mobile Number"/>
    <TextField  label="Phone Number"/>
    <TextField  label="Address"/>
    <TextField  label="Social networks"/>
  </div>
)

export default Info