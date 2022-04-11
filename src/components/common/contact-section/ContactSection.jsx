  
import React from 'react'
import Form from './Form'
import Info from './Info'
import  styles from './ContactSection.module.scss'

const ContactSection = () => (
  <>
    <section >
      <div className={styles.container}>
      <Info />
      <Form />
      </div>
     
    </section>
  </>
)
export default ContactSection;