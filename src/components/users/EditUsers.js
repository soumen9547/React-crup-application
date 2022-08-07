import React,{useState, useEffect} from "react";
import '../../Css/Adduser.css';
import axios from "axios";
import { useNavigate, useParams} from 'react-router-dom';
const EditUsers = () => {
    const navigate = useNavigate();
    const {id} =useParams();
  
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
    useEffect(()=>{ 
        loadUser()
    },[]);
    const onSubmit = async e =>{
        e.preventDefault()
        await axios.put(`https://react-crup-application.vercel.app/users/${id}`,user);
        navigate('/');
    }
    const loadUser =async ()=>{
        const result =await axios.get(`https://react-crup-application.vercel.app/users/${id}`);
        //console.log(result)
        setUser(result.data)
    }
    return (
        <div>
            <h1>Edit user</h1>
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
                <button type="submit">Update</button>
            </form>
        </div>
    )
}

export default EditUsers;