import React,{useState} from "react";
import '../../Css/Adduser.css';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
const AddUser = () => {
    const navigate = useNavigate();
    const [user,setUser] =useState({
        name :'',
        username:'',
        email:'',
        phone:'',
        website:''
    });
    const {name,username,email,phone,website} =user;
    const onInputChange = e =>{
       setUser({...user,[e.target.name]:e.target.value})
    }
    const onSubmit = async e =>{
        e.preventDefault()
        await axios.post('https://react-crup-application.vercel.app/',user);
        navigate('/');
    }
    return (
        <div>
            <h1>Add user</h1>
            <form className="formclass" onSubmit={e =>onSubmit(e)}>
                <label className="label">
                    <p className="label-txt">Enter your name </p>
                    <input type="text" className="input" name="name" value={name} onChange={e => onInputChange(e) } required="required"/>
                        <div className="line-box">
                            <div className="line"></div>
                        </div>
                </label>
                <label className="label">
                    <p className="label-txt">Enter your username</p>
                    <input type="text" className="input" name="username" value={username} onChange={e => onInputChange(e) } required="required"/>
                        <div className="line-box">
                            <div className="line"></div>
                        </div>
                </label>
                <label className="label">
                    <p className="label-txt">Enter  your email</p>
                    <input type="text" className="input" name="email" value={email} onChange={e => onInputChange(e) } required="required"/>
                        <div className="line-box">
                            <div className="line"></div>
                        </div>
                </label>
                <label className="label">
                    <p className="label-txt">Enter  your phone number</p>
                    <input type="text" className="input" name="phone" value={phone} onChange={e => onInputChange(e) } required="required"/>
                        <div className="line-box">
                            <div className="line"></div>
                        </div>
                </label>
                <label className="label">
                    <p className="label-txt">Enter  your website name</p>
                    <input type="text" className="input" name="website" value={website} onChange={e => onInputChange(e) } required="required"/>
                        <div className="line-box">
                            <div className="line"></div>
                        </div>
                </label>
                <button type="submit">submit</button>
            </form>
        </div>
    )
}

export default AddUser;