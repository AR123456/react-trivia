import React from "react";

import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Button,
  ButtonGroup,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";
class ModalPage extends React.Component {
  state = {
    modal: false,
    modal_backdrop: false,
    modal_nested_parent: false,
    modal_nested: false,
    backdrop: true
  };

  toggle = modalType => () => {
    if (!modalType) {
      return this.setState({
        modal: !this.state.modal
      });
    }

    this.setState({
      [`modal_${modalType}`]: !this.state[`modal_${modalType}`]
    });
  };

  render() {
    return (
      <Row>
        <Col md="12" sm="12" xs="12" />

        <Col md="12" sm="12" xs="12" />

        <Col md="12" sm="12" xs="12">
          <Card title="Modals" breadcrumbs={[{ name: "modals", active: true }]}>
            <CardHeader>Modal</CardHeader>
            <CardBody>
              <Button color="danger" onClick={this.toggle("nested_parent")}>
                Launch Modal
              </Button>
              <Modal
                isOpen={this.state.modal_nested_parent}
                toggle={this.toggle("nested_parent")}
                className={this.props.className}
              >
                <ModalHeader toggle={this.toggle("nested_parent")}>
                  Modal title
                </ModalHeader>
                <ModalBody>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                  <br />
                  <Button color="success" onClick={this.toggle("nested")}>
                    Show Nested Model
                  </Button>
                  <Modal
                    isOpen={this.state.modal_nested}
                    toggle={this.toggle("nested")}
                  >
                    <ModalHeader>Nested Modal title</ModalHeader>
                    <ModalBody>Stuff and things</ModalBody>
                    <ModalFooter>
                      <Button color="primary" onClick={this.toggle("nested")}>
                        Done
                      </Button>{" "}
                      <Button
                        color="secondary"
                        onClick={this.toggle("nested_parent")}
                      >
                        All Done
                      </Button>
                    </ModalFooter>
                  </Modal>
                </ModalBody>
                <ModalFooter>
                  <Button
                    color="primary"
                    onClick={this.toggle("nested_parent")}
                  >
                    Do Something
                  </Button>{" "}
                  <Button
                    color="secondary"
                    onClick={this.toggle("nested_parent")}
                  >
                    Cancel
                  </Button>
                </ModalFooter>
              </Modal>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default ModalPage;
