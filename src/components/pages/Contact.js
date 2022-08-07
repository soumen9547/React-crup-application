import React,{useState} from "react";
import '../../Css/Adduser.css';
import axios from "axios";
import { useNavigate } from 'react-router-dom';


const Contact = () => {

    const navigate = useNavigate();
    const [user,setUser] =useState({
        name :'',
        message:''
    });
    const {name,message} =user;
    const onInputChange = e =>{
       setUser({...user,[e.target.name]:e.target.value})
    }
    const onSubmit = async e =>{
        e.preventDefault()
        await axios.post('http://localhost:3003/messages',user);
        navigate('/');
    }
    return (
        <div className="container">
            <div className=" text-center mt-5 ">
                <h1>Contact Form</h1>
            </div>
            <div>
                <form className="formclass" onSubmit={e => onSubmit(e)}>
                    <label className="label">
                        <p className="label-txt">Enter your name </p>
                        <input type="text" className="input" name="name" value={name} onChange={e => onInputChange(e)} required="required" />
                        <div className="line-box">
                            <div className="line"></div>
                        </div>
                    </label>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label htmlFor="form_message">Message *</label>
                                <textarea id="form_message" name="message" className="form-control" placeholder="Write your message here." rows="4" required="required" data-error="Please, leave us a message." value={message} onChange={e => onInputChange(e)}></textarea>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <input type="submit" className="btn btn-success btn-send  pt-2 btn-block " value="Send Message" />
                        </div>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default Contact;