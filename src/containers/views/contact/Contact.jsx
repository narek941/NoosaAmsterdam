import React from 'react';
import {Map} from "../../items";
import ContactSection from '../../../components/contact-section/ContactSection'

const Contact = () => {
  const location = {
    address: '4 Հակոբ Հակոբյան փողոց, Երևան.',
    lat: 40.198480, 
    lng: 44.491525,
  } 
  
  return(
    <>
     <Map location={location} zoomLevel={10} />
     <ContactSection />

    </>
  )
}

export default Contact;