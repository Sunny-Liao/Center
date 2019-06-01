import React, { Component } from 'react';
import jwt_decode from 'jwt-decode';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Col } from 'reactstrap';
import Discover from '../../pages/Discover';
import { getUsers, sendToUser } from "../UserFunctions";
import { withRouter } from 'react-router-dom';
import './style.css';


class Profile extends Component {
    constructor() {
        super()
        this.state = {
            modal: false,
            photoModal: false,
            usersModal: false,
            first_name: '',
            last_name: '',
            email: '',
            errors: {},
            users: [],
            buttonColor: 'danger',
            numberChosen:'0'
        }

        this.toggle = this.toggle.bind(this);
        this.handleNumberButtonClick = this.handleNumberButtonClick.bind(this);
        this.togglePhoto = this.togglePhoto.bind(this);
        this.toggleUsers = this.toggleUsers.bind(this);
        this.handleCurrentImage = this.handleCurrentImage.bind(this);
        this.sendUserClick = this.sendUserClick.bind(this);
        this.handleUserClick = this.handleUserClick.bind(this);
        this.handleNumberButtonClick = this.handleNumberButtonClick.bind(this);
    }

    componentDidMount() {
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        this.setState({
            first_name: decoded.first_name,
            last_name: decoded.last_name,
            email: decoded.email
        });

        getUsers(this.state.email).then(data => {
            this.setState({
                users: data
            })
        })

    }



    

    handleNumberButtonClick(event) {
        event.preventDefault();
        
        this.setState({
            modal:false,
            photoModal:true,
            numberChosen:event.target.innerText
        })
        
        
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    togglePhoto() {
        this.setState(prevState => ({
            photoModal: !prevState.photoModal
        }));
    }

    toggleUsers() {
        this.setState(prevState => ({
            usersModal: !prevState.usersModal
        }));
    }

    handleCurrentImage(image) {
        this.setState({
            image
        })
    }

    sendUserClick() {
        this.setState(prevState => ({
            photoModal: false,
            modal: false,
            usersModal: true
        }));
    }

    handleUserClick(e, email) {
        sendToUser(this.state.image, email)
        .then( response => {
            console.log("sent")
            this.setState(prevState => ({
                photoModal: false,
                modal: false,
                usersModal: false
            }));
        })
    }

    

    render() {
        console.log('state is', this.state);
        const style={backgroundImage: 'url("/images/' + this.state.numberChosen + '.png")'}
        return (
            <div className="profile" style={style}> 
                <div className="fixed-bottom text-right pr-4 pb-4">
                    <Button color="danger" onClick={this.toggle}>Click</Button>
                </div>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Select A Button</ModalHeader>
                    <ModalBody>
                        <Row>
                            <Col xs="1" className="mr-3 mb-3"><Button onClick={this.handleNumberButtonClick}>1</Button></Col>
                            <Col xs="1" className="mr-3 mb-3"><Button onClick={this.handleNumberButtonClick}>2</Button></Col>
                            <Col xs="1" className="mr-3 mb-3"><Button onClick={this.handleNumberButtonClick}>3</Button></Col>
                            <Col xs="1" className="mr-3 mb-3"><Button onClick={this.handleNumberButtonClick}>4</Button></Col>
                            <Col xs="1" className="mr-3 mb-3"><Button onClick={this.handleNumberButtonClick}>5</Button></Col>
                            <Col xs="1" className="mr-3 mb-3"><Button onClick={this.handleNumberButtonClick}>6</Button></Col>
                            <Col xs="1" className="mr-3 mb-3"><Button onClick={this.handleNumberButtonClick}>7</Button></Col>
                        </Row>
                        <Row>
                            <Col xs="1" className="mr-3 mb-3"><Button onClick={this.handleNumberButtonClick}>8</Button></Col>
                            <Col xs="1" className="mr-3 mb-3"><Button onClick={this.handleNumberButtonClick}>9</Button></Col>
                            <Col xs="1" className="mr-3 mb-3"><Button onClick={this.handleNumberButtonClick}>10</Button></Col>
                            <Col xs="1" className="mr-3 mb-3"><Button onClick={this.handleNumberButtonClick}>11</Button></Col>
                            <Col xs="1" className="mr-3 mb-3"><Button onClick={this.handleNumberButtonClick}>12</Button></Col>
                            <Col xs="1" className="mr-3 mb-3"><Button onClick={this.handleNumberButtonClick}>13</Button></Col>
                            <Col xs="1" className="mr-3 mb-3"><Button onClick={this.handleNumberButtonClick}>14</Button></Col>
                        </Row>
                        <Row>
                            <Col xs="1" className="mr-3 mb-3"><Button onClick={this.handleNumberButtonClick}>15</Button></Col>
                            <Col xs="1" className="mr-3 mb-3"><Button onClick={this.handleNumberButtonClick}>16</Button></Col>
                            <Col xs="1" className="mr-3 mb-3"><Button onClick={this.handleNumberButtonClick}>17</Button></Col>
                            <Col xs="1" className="mr-3 mb-3"><Button onClick={this.handleNumberButtonClick}>18</Button></Col>
                            <Col xs="1" className="mr-3 mb-3"><Button onClick={this.handleNumberButtonClick}>19</Button></Col>
                            <Col xs="1" className="mr-3 mb-3"><Button onClick={this.handleNumberButtonClick}>20</Button></Col>
                            <Col xs="1" className="mr-3 mb-3"><Button onClick={this.handleNumberButtonClick}>21</Button></Col>
                        </Row>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
                <Modal isOpen={this.state.photoModal} toggle={this.togglePhoto} className={this.props.className}>
                    <ModalHeader toggle={this.togglePhoto}>Select A Quote to Send</ModalHeader>
                    <ModalBody>
                        <Discover currentImage={this.handleCurrentImage} />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.sendUserClick}>Select</Button>{' '}
                        <Button color="secondary" onClick={this.togglePhoto}>Cancel</Button>
                    </ModalFooter>
                </Modal>
                <Modal isOpen={this.state.usersModal} toggle={this.toggleUsers} className={this.props.className}>
                    <ModalHeader toggle={this.toggleUsers}>Select A User to Send to</ModalHeader>
                    <ModalBody>
                        <Row>
                            {this.state.users.map((user, index) => {
                                return <Col xs="1" className="mr-3 mb-3"><Button onClick={(e) => {
                                    this.handleUserClick(e, user.firstname + ' ' + user.lastname)
                                }}>{index + 1}</Button></Col>
                            })}
                        </Row>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.toggleUsers}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}

export default withRouter(Profile)