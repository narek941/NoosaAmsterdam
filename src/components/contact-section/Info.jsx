import React from 'react'
import './Info.css'
import TextField from '@material-ui/core/TextField';

const Info = () => (
  <section className="info">
    <h2 className="info-h2">Contact information</h2>
    <h3 className="info-h3">We will be glad to answer your questions every day until 20.00</h3>
    <div className="info-details-container">
    <TextField label="Email"  />
    <TextField  label="Mobile Number"/>
    <TextField  label="Phone Number"/>
    <TextField  label="Address"/>
    <TextField  label="Social networks"/>
      </div>
  </section>
)

export default Info