import React from 'react'
import NoosaButton from '../buttons/NoosaButton'
import './Form.css'
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';


const formInputs = []

const Form = () => (
  <form className="form">
    <h2 className="form-h2">Contact form</h2>
    <div className="input-form"><TextField id="standard-basic" label="Your name" className="form-label" />
      <TextField id="standard-basic" label="Your name" className="form-label" />
    </div>
    <TextareaAutosize placeholder="Message..." className="form-textarea" />
    <NoosaButton className="form-submit">
      Send message
    </NoosaButton>
  </form>
)

export default Form