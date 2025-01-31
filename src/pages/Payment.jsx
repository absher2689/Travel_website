import React from 'react';
import { Button,Container,Row,Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import Subtitle from '../shared/Subtitle'

export default class Payment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        fName: 'Example',
        lName: 'User',
        cc: '000-000-0000-000',
        phone: '999-999-9999',
        address: '123 Place Drive'
      }
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    const user = this.state.user;
    user[event.target.name] = event.target.value;
    this.setState({ user });
  }

   render() {
    return (
      <section>
      <Container>
        <Row>
          <Col lg='12'>
          <Subtitle subtitle={"Payment"}/>
          </Col>
          <Col lg='12'>
             <div className="col">
              <form action="#" className='h-100 w-100 p-5 d-flex flex-column align-items-between'>
              <div className="form-group d-flex justify-content-center bg-dark text-light">
              <h2>Complete Customer Information Below</h2>
            </div>
            <div className="form-group border-bottom mb-2 border-one d-flex">
              <input type="text" name='fName' value={this.state.user.fName} onChange={this.onChange} required
                className='form-control mr-2' placeholder=' First Name ' />
              <input type="text" name='lName' value={this.state.user.lName} onChange={this.onChange}
                className='form-control ml-2' placeholder=' Last Name ' />
            </div>
            <div className="form-group">
              <input type="text" name='cc' value={this.state.user.cc} onChange={this.onChange} required
                className='form-control' placeholder=' CC # ' />
            </div>
            <div className="form-group">
              <input type="text" name='address' value={this.state.user.address} onChange={this.onChange} required
               className='form-control' placeholder=' Address ' />
            </div>
           <div className="form-group">
             <input type="text" name='phone' value={this.state.user.phone} onChange={this.onChange} required
               className='form-control' placeholder=' Phone Number ' />
           </div>
           <section>
             <div className="form-group border-top d-flex justify-content-end">
              <Button onClick={() => {
                this.props.handleSubmit(this.state.user);
                window.location.href = '#orders';
               }} className='btn primary__btn'>
                 <Link to='/thank-you'>Pay Now</Link>
              </Button>
             </div>
             </section>
           </form>
         </div>
         </Col>
        </Row>
      </Container>
 </section>
    );
  }
 
}