import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBRipple } from 'mdb-react-ui-kit';
import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/col';
import Row from 'react-bootstrap/Row';
import imh1 from "../../images/logomits.png"


export default function Home2() {
  const slogout=()=>{
    localStorage.removeItem("token")
    localStorage.removeItem("role")
    window.location="/sign-in"
  }

return (
 
  <div>
    {/* {
     console.log("oooo"+localStorage.token)

    } */}
    <div><h4>Welcome Member</h4> <button onClick={slogout}>LOG OUT</button></div>
  <Row>
  <Col>
    <MDBCard style={{ maxWidth: '22rem' }}>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src='https://thumbs.dreamstime.com/b/event-planning-concept-events-word-notebook-clock-notepad-computer-desk-98974101.jpg' fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>View profile</MDBCardTitle>
        <MDBCardText>
        
        </MDBCardText>
        <MDBBtn href='/form-4'>view</MDBBtn>
        
      </MDBCardBody>
    </MDBCard>
  </Col>
    <Col>
    <MDBCard style={{ maxWidth: '22rem' }}>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src='https://www.usnews.com/dims4/USNEWS/dadfebd/2147483647/crop/2000x1334%2B0%2B0/resize/970x647/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2F33%2Fcd%2F58cf2eda41f7900bc231e5874612%2F200212-collegecosts-stock.jpg' fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>Verify Publication</MDBCardTitle>
        <MDBCardText>
        Verify Publication details
        </MDBCardText>
        <MDBBtn href='/form-3'>verify  </MDBBtn><br/><br/>
        {/* <MDBBtn href='/form-3'>Show list</MDBBtn> */}
      </MDBCardBody>
    </MDBCard>
  </Col>
   
  </Row>

  
  </div>
);
}