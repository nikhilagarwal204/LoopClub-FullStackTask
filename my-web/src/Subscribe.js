import React, { Component } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button, Row, Col, Form, FormGroup, Label, Input } from "reactstrap";

class Subscribe extends Component {
    constructor(props) {
    super(props)
        this.state = {
            fullname: '',
            email: ''
        }
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = (e) => {
        e.preventDefault()
        let email = this.state.email;
        if (email!=="") {
            //regular expression for email validation
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (pattern.test(email)) {
                const options = {
                    url: 'http://127.0.0.1:8000/emailsubs/',
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json;charset=UTF-8'
                    },
                    data: {
                        "name": this.state.fullname,
                        "email": this.state.email
                    }
                };
                console.log(options)
                axios(options)
                .then(response => {
                    console.log(response)
                    toast.success('Subscribed!', {
                        position: "bottom-left",
                        autoClose: 2000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        });
                })
                .catch(error => {
                    console.log(error)
                    toast.error('Server Error', {
                        position: "bottom-left",
                        autoClose: 2000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        });
                })
            }
            else {
                toast.error('Invalid Email', {
                    position: "bottom-left",
                    autoClose: 2000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
            }
        }      
        else {
            toast.error('Enter Email', {
                position: "bottom-left",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }
    }

    render(){
        const { fullname, email } = this.state
        return(
            <div>
                <div className="container-fluid">
                <h1 style={{marginBottom: "70px", marginTop: "5%"}} >Email Subscription to LoopClub</h1>
                    <Row>   
                        <Col xs lg="7" >
                            <Form onSubmit={this.submitHandler}>
                                <div className="row">
                                    <Col xs lg="12">
                                        <FormGroup style={{marginBottom: "5px"}}>
                                            <Label for="fullname" style={{float: "left"}}>Name</Label>
                                            <Input type="text" value={fullname} onChange={this.changeHandler} name="fullname" id="fullname" placeholder="Your Name" />
                                        </FormGroup>
                                    </Col>
                                    <Col xs lg="12">
                                        <FormGroup style={{marginTop: "20px"}} >
                                            <Label for="email"  style={{float: "left"}}>Email</Label>
                                            <Input type="text" value={email} onChange={this.changeHandler} name="email" id="email" placeholder="Your Email" />
                                        </FormGroup>
                                    </Col>
                                    <br/>
                                    <Col xs lg="12">
                                        <Button style={{width:"50%", marginTop: "35px", float:"left", background:"linear-gradient(to left,#8953b7 0%,#e75a7c 100%)", color:"#fff", borderRadius: "30px", border:"#f9ede2", padding: "10px 30px"}} type="submit"><b>SUBSCRIBE</b></Button>
                                    </Col>
                                </div>
                            </Form>
                        </Col>
                        <Col xs lg="5">
                            <img style={{float: "right"}} src="./icon.jfif" alt="logo" />
                        </Col>
                    </Row>
                </div>
                <ToastContainer/>
            </div>     
        )
    }
}

export default Subscribe;