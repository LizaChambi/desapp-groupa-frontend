import React, {useState, useContext } from 'react' // <-- updated
import { Image, ButtonToolbar, Form, View, Navbar, NavDropdown, Modal, Button, Container, Row, Col} from 'react-bootstrap';
import { generate } from 'shortid';
import { connect } from 'react-redux';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import { mapStateToProps, mapDispatchToProps} from '../../mapMethods';
import I18n from '../I18n'
import './css/Order.css'

const Order = props => {
  const [selectedDate, updateDate] = React.useState(new Date());
  const [selectedHour, updateHour] = React.useState(new Date());

  const handleDateChange = date => {
    updateDate(date);
  };

  const handleHourChange = hour => {
    updateHour(hour);
  };

    return (
        <div className= 'Order'>
            <h1>Página de pedido: </h1>
            <div>
                <Container fluid>
                    <Row>
                        <Col sm={2}>
                            <Image src={props.selectedMenu.image} fluid />
                        </Col>
                        <Col sm={10}>
                            <h3> {props.selectedMenu.name} </h3>
                            <p> {props.selectedMenu.description} </p>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div>
                <Form>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label><I18n t="typeDelivery"/>:</Form.Label>
                        <Form.Control as="select">
                        <option>Entrega a domicilio</option>
                        <option>Retirar por sucursal</option>
                        </Form.Control>
                    </Form.Group>
                </Form>
                <p> <I18n t="orderAmount"/>: (Agregar selector numerico) </p>
                <p> <I18n t="typeDelivery"/>: (Agregar selector ) </p>
                <p> <I18n t="dateDelivery"/>: </p> 
                <p>  <KeyboardDatePicker
                      margin="normal"
                      id="date-picker-dialog"
                      format="MM/dd/yyyy"
                      value={selectedDate}
                      onChange={handleDateChange}
                      KeyboardButtonProps={{
                        'aria-label': 'change date',
                      }}
                    />
                </p>
                <p> <I18n t="hourDelivery"/>: </p>
                <p> <Grid container>
                <KeyboardTimePicker
                      margin="normal"
                      id="time-picker"
                      value={selectedHour}
                      onChange={handleHourChange}
                      KeyboardButtonProps={{
                        'aria-label': 'change time',
                      }}
                    />
                  </Grid></p>
                
                <button variant="success"> <b><i> <I18n t="orderNow"/> </i></b> </button>
                <ButtonModal/>
            </div>
        </div>)
}

const MyVerticallyCenteredModal = props => {
    return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              <h2>Ya confirmamos su compra</h2>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>¡Gracias por su pedido!</h4>
            <p> Tiempo de entrega estimada: 30 min.</p>
            <p> Recuerde que puede revisar los detalles de su pedido en el historial de su cuenta.</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
}

const ButtonModal= () => {
    const [modalShow, setModalShow] = React.useState(false);
    return (
      <ButtonToolbar>
        <Button variant="success" onClick={() => setModalShow(true)}>
          <b><i><I18n t="orderNow"/></i></b>
        </Button>
  
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </ButtonToolbar>
    );
}

export default connect(mapStateToProps, mapDispatchToProps) (Order);