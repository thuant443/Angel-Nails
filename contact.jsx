import React from 'react';
import './contact.css';
const contact = () => {
    return (
      <div>
   <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.13.1/css/all.css" integrity="sha384-xxzQGERXS00kBmZW/6qxqJPyxW3UR0BPsL4c8ILaIWXva5kFi7TxkIIaMiKtqV1Q" crossOrigin="anonymous"></link>





        <div>
          <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
            <h1 className="display-4">Follow Our Social</h1>
            <p className="lead">
              Quickly build an effective pricing table for your potential
              customers with this Bootstrap example. It’s built with default
              Bootstrap components and utilities with little customization.
            </p>
          </div>

          <div className="container">
            <div className="card-deck mb-3 text-center">
                
              <div className="card mb-4 shadow-sm">
                <div className="card-header">
                  <h4 className="my-0 font-weight-normal">Facebook</h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title">
                  <i className="fab fa-facebook"></i>


                  </h1>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>Follow our Facebook page</li>
                    <li>for the latest updates and news</li>
                    <li>Feel free to reach out</li>
                    <li>and contact us through Facebook!</li>
                  </ul>
                  <button
                    type="button"
                    className="btn btn-lg btn-block btn-primary"
                  >
                    Facebook
                  </button>
                </div>
              </div>
              <div className="card mb-4 shadow-sm">
                <div className="card-header">
                  <h4 className="my-0 font-weight-normal">Contact Us</h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title">
                  <i className="fas fa-phone-volume"></i>
                  </h1>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>Phone number: (410) 248-2901 </li>
                    
                    <li>email: angelnails@gmail.com</li>
                    <li>If you have any questions</li>
                    <li> Contact us at anytime!</li>
                  </ul>
                  <button
                    type="button"
                    className="btn btn-lg btn-block btn-primary"
                  >
                    Contact
                  </button>
                </div>
              </div>
              <div className="card mb-4 shadow-sm">
                <div className="card-header">
                  <h4 className="my-0 font-weight-normal">Instagram</h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title">
                  <i className="fab fa-instagram"></i>

                  </h1>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>30 users included</li>
                    <li>15 GB of storage</li>
                    <li>Phone and email support</li>
                    <li>Help center access</li>
                  </ul>
                  <button
                    type="button"
                    className="btn btn-lg btn-block btn-primary"
                  >
                    Instagram
                  </button>
                </div>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    );
};

export default contact;