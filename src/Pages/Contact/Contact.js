import React from 'react';
import { Button, Form } from 'react-bootstrap';
import Footer from '../Home/Footer/Footer';
import Navigation from '../Home/Navigation/Navigation';
import './Contact.css'
const Contact = () => {
    return (
      <div>
        <Navigation></Navigation>
        <div className="contact-header py-5 mb-5">
          <h1 className="fs-1 fw-bolder">CONTACT</h1>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-12">
              <h4>Working Hours</h4>
              <p>
                Monday - Friday 8.00 - 23.00 <br />
                Monday - Friday 8.00 - 23.00
              </p>
              <p></p>
            </div>
            <div className="col-md-4 col-sm-12">
              <h4>Contact Us</h4>
              <p>
                0000-98982394
                <br /> rokibul1003@gmail.com
              </p>
            </div>
            <div className="col-md-4 col-sm-12">
              <h4>Get Direction</h4>
              <p>
                132, My Street <br /> England
              </p>
            </div>
          </div>
        </div>
        <div className="p-5 m-y5">
          <div className="container">
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
            </Form>
            <Button className='btn-danger'>Submit</Button>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
};

export default Contact;