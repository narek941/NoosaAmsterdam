import React from 'react'
import NoosaButton from '../../buttons/NoosaButton'
import  styles from './Form.module.scss'
import TextField from '@material-ui/core/TextField';

const formInputs = []

const Form = () => (
  <form className={styles.container}>
    <h2 >Contact form</h2>
    <div className={styles.input_wrapper}>
    <TextField  label="Your name"  />
    <TextField  label="Your Email"  />
    </div>
    <textarea  placeholder="Message..." className="form-textarea" />
    <NoosaButton type="register" width="200px" height="51px" borderRadius="10px">
      Send
    </NoosaButton>
  </form>
)

export default Form;