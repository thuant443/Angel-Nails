import React, { Component } from 'react';
import './about.css';
import img from './image/img.JPG'
import img1 from './image/img1.JPG'
import img2 from './image/img2.JPG'
import star from './image/star.jpg'
import location from './image/location.jpg'
import Carousel from 'react-bootstrap/Carousel'
import Table from 'react-bootstrap/Table'
import Card from 'react-bootstrap/Card'
import nails from './image/nails.PNG'
import nails2 from './image/nails2.PNG'
import nails3 from './image/nails3.PNG'
import CardGroup from 'react-bootstrap/CardGroup'
class about extends Component {
  constructor(){
    super();
    this.state = {
  
    }
  }


  
  render() { 
    return (
      <div >
        <div >
          <div className="appointtop">
            <h1 className="display-4">Angel Nails and Spa</h1>
            <p className="lead">
              This is a simple hero unit, a simple jumbotron-style component for
              calling extra attention to featured content or information.
            </p>
            <hr className="my-4"></hr>
            <p>
              Get to know some of our nail technicians and their story
            </p>
          </div>
          <div>
            <div className="container marketing">
              <div className="row">
                <div className="col-lg-4">
                  <svg
                    className="bd-placeholder-img rounded-circle"
                    width="140"
                    height="140"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                    role="img"
                    aria-label="Placeholder: 140x140"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#777" />
                    <text x="50%" y="50%" fill="#777" dy=".3em">
                      140x140
                    </text>
                  </svg>
                  <h2>Joy</h2>
                  <p>
                 This is Joy, loving and sweet nail technician
                  </p>
                  <p>
                   
                  </p>
                </div>
                <div className="col-lg-4">
                  <svg
                    className="bd-placeholder-img rounded-circle"
                    width="140"
                    height="140"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                    role="img"
                    aria-label="Placeholder: 140x140"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#777" />
                    <text x="50%" y="50%" fill="#777" dy=".3em">
                      140x140
                    </text>
                  </svg>
                  <h2>Diana</h2>
                  <p>
                    Duis mollis, est non commodo luctus, nisi erat porttitor
                    ligula, eget lacinia odio sem nec elit. Cras mattis
                    consectetur purus sit amet fermentum. Fusce dapibus, tellus
                    ac cursus commodo, tortor mauris condimentum nibh.
                  </p>
                  <p>
               
                  </p>
                </div>
                <div className="col-lg-4">
                  <svg
                    className="bd-placeholder-img rounded-circle"
                    width="140"
                    height="140"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                    role="img"
                    aria-label="Placeholder: 140x140"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#777" />
                    <text x="50%" y="50%" fill="#777" dy=".3em">
                      140x140
                    </text>
                  </svg>
                  <h2>Son</h2>
                  <p>
                    Donec sed odio dui. Cras justo odio, dapibus ac facilisis
                    in, egestas eget quam. Vestibulum id ligula porta felis
                    euismod semper. Fusce dapibus, tellus ac cursus commodo,
                    tortor mauris condimentum nibh, ut fermentum massa justo sit
                    amet risus.
                  </p>
                  <p>
                  
                  </p>
                </div>
              </div>

              <hr className="featurette-divider"></hr>

              <div className="row featurette">
                <div className="col-md-7">
                  <h2 className="featurette-heading">
                    Take a look at our Shop.{" "}
                    <span className="text-muted">It’ll blow your mind.</span>
                  </h2>
                  <p className="lead">
                  This is Joy
                  </p>
                </div>
                <div className="col-md-5">
                  <Carousel>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={img}
                        alt="First slide"
                      />
                      <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>
                          Nulla vitae elit libero, a pharetra augue mollis
                          interdum.
                        </p>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={img1}
                        alt="Third slide"
                      />

                      <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={img2}
                        alt="Third slide"
                      />

                      <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                          Praesent commodo cursus magna, vel scelerisque nisl
                          consectetur.
                        </p>
                      </Carousel.Caption>
                    </Carousel.Item>
                  </Carousel>
                  {/* <svg
                    className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                    width="500"
                    height="500"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                    role="img"
                    aria-label="Placeholder: 500x500"
                  > */}
                  {/* <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#eee" />
                    <text x="50%" y="50%" fill="#aaa" dy=".3em">
                      500x500
                    </text>
                  </svg> */}
                </div>
              </div>

              <hr className="featurette-divider"></hr>

              <div className="row featurette">
                <div className="col-md-7 order-md-2">
                  <h2 className="featurette-heading">
                    Come visit us!{" "}
                    <span className="text-muted">See for yourself.</span>
                  </h2>
                  <p className="lead">
                    Located in: Perry Hall Square Shopping Center
                  </p>
                  <p> Address: 4345 Ebenezer Rd, Nottingham, MD 21236</p>
                  
                    Hours of operation:{" "}
                    <Table responsive>
                      <tbody>
                        <tr>
                          <td>Monday</td>
                          <td>9:00 AM - 8:00 PM</td>
                        </tr>
                        <tr>
                          <td>Tuesday</td>
                          <td>9:00 AM - 8:00 PM</td>
                        </tr>
                        <tr>
                          <td>Wednesday</td>
                          <td>9:00 AM - 8:00 PM</td>
                        </tr>
                        <tr>
                          <td>Thursday</td>
                          <td>9:00 AM - 8:00 PM</td>
                        </tr>
                        <tr>
                          <td>Friday</td>
                          <td>9:00 AM - 8:00 PM</td>
                        </tr>
                        <tr>
                          <td>Saturday</td>
                          <td>9:00 AM - 8:00 PM</td>
                        </tr>
                        <tr>
                          <td>Sunday</td>
                          <td>10:00 AM - 5:00 PM</td>
                        </tr>
                      </tbody>
                    </Table>{" "}
                  
                </div>

                <div className="col-md-5 order-md-1">
                  <img
                    className="d-block w-100"
                    src={location}
                    alt="First slide"
                  />
                </div>
              </div>

              <hr className="featurette-divider"></hr>

              <div className="row featurette">
                <div className="col-md-7">
                  <h2 className="featurette-heading">
                    And lastly, check out our work and reviews! 
                    <span className="text-muted"> Checkmate.</span>
                  </h2>
                  <CardGroup>
  <Card>
    
    <Card.Body>
      <Card.Title>Jade</Card.Title>
      <Card.Text>
      Love this nail salon. My new regular spot. They are always fast and friendly and do a great job! Angel nail spa is heaven sent.

      </Card.Text>
      <Card.Img variant="top" src={star} />
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>

    <Card.Body>
      <Card.Title>Katrina Catacutane</Card.Title>
      <Card.Text>
       I love this salon! Every time I go get my nails done, they person doing my nails take their time. I noticed that they don’t rush it until other salons out there. It’s always neat and precise. The place is also VERY clean, and they offer you beverages while you are waiting or getting a set done. I highly recommend this place!!
      </Card.Text>
      <Card.Img variant="top" src={star} />
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
   
    <Card.Body>
      <Card.Title>Martina Woodard</Card.Title>
      <Card.Text>
     The employees are polite and courteous. You are greeted upon entering the nail salon. It is a very clean environment. The service is very good. They offer their customerss a variety of refreshing drinks such as; bottled water, soda, or gator ade to their customers.
      </Card.Text>
      <Card.Img variant="top" src={star} />
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup>
                </div>
                <div className="col-md-5">
                <Carousel>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={nails}
                        alt="First slide"
                      />
                      <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>
                          Nulla vitae elit libero, a pharetra augue mollis
                          interdum.
                        </p>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={nails2}
                        alt="Third slide"
                      />

                      <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={nails3}
                        alt="Third slide"
                      />

                      <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                          Praesent commodo cursus magna, vel scelerisque nisl
                          consectetur.
                        </p>
                      </Carousel.Caption>
                    </Carousel.Item>
                  </Carousel>
                </div>
              </div>
            </div>

            <footer className="container">
              <p className="float-right">
               
              </p>
              <p>
                &copy; 2017-2020 Company, Inc.
                
              </p>
            </footer>
          </div>
          <script
            src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
            integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
            crossOrigin="anonymous"
          ></script>
          <script
            src="/docs/4.5/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-1CmrxMRARb6aLqgBO7yyAxTOQE2AKb9GfXnEo760AUcUmFx3ibVJJAzGytlQcNXd"
            crossOrigin="anonymous"
          ></script>
        </div>
      </div>
    );
  }
}
 
export default about;

