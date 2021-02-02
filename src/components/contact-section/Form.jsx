import React from 'react'
import NoosaButton from '../buttons/NoosaButton'
import './Form.css'
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';


const formInputs = []

const Form = () => (
  <form className="form">
    <h2 className="form-h2">Contact form</h2>
    <div className="input-form">
      <input type="text" placeholder="Your name" className="form-label" />
      <input type="text" placeholder="Your name" className="form-label" />
    </div>
    <textarea  placeholder="Message..." className="form-textarea" />
    <NoosaButton className="form-submit">
      Send
    </NoosaButton>
  </form>
)

export default Form;