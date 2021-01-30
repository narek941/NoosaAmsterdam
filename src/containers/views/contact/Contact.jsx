import React from 'react';
import {Map} from "../../items";
import ContactSection from '../../../components/contact-section/ContactSection'

const Contact = () => {
  const location = {
    address: '1600 Amphitheatre Parkway, Mountain View, california.',
    lat: 37.42216,
    lng: -122.08427,
  } 
  
  return(
    <>
     <Map location={location} zoomLevel={10} />
     <ContactSection />

    </>
  )
}

export default Contact;