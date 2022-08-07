import React, { useState, useEffect } from "react";
import {useParams } from 'react-router-dom';
import axios from "axios";
import {Link} from "react-router-dom";
const ViewUser = () => {

    const { id } = useParams();
    const [user, setUser] = useState({
        name: '',
        username: '',
        email: '',
        phone: '',
        website: ''
    });
    useEffect(() => {
        loadUser()
    }, []);

    const loadUser = async () => {
        const result = await axios.get(`https://react-crup-application.vercel.app/users/${id}`);
        console.log(result)
        setUser(result.data)
    }
    return (
        <div className="container">
            <h1>View User</h1>
           <div className="divalign">
            <ul className="list-group w-50 listt">
                <li className="list-group-item">{user.name}</li>
                <li className="list-group-item">{user.username}</li>
                <li className="list-group-item">{user.email}</li>
                <li className="list-group-item">{user.phone}</li>
                <li className="list-group-item">{user.website}</li>
            </ul>
            </div>
            <Link className="btn btn-primary"  to="/"> Back to home</Link>
        </div>
    )
}

export default ViewUser;