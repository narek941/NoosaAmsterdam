import React from 'react'
import NoosaButton from '../../buttons/NoosaButton'
import './Form.css'


const formInputs = []

const Form = () => (
  <form className="form">
    <h2 className="form-h2">Contact form</h2>
    <div className="input-form">
      <input type="text" placeholder="Your name" className="form-label" />
      <input type="text" placeholder="Your name" className="form-label" />
    </div>
    <textarea  placeholder="Message..." className="form-textarea" />
    <NoosaButton type="register" width="200px" height="51px" borderRadius="10px">
      Send
    </NoosaButton>
  </form>
)

export default Form;