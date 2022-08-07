import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link} from "react-router-dom";
const Home = () => {

    const [users, setUser] = useState([]);
    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get('/users');
        setUser(result.data.reverse());
    }
    const deleteUser = async id => {
        const result = await axios.delete(`https://react-crup-application.vercel.app/users/${id}`);
        loadUsers();
    }
    return (
        <div className="container">
            <div className="py-4">
                <h1>Home page</h1>
                <table className="table border shadow">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">User Name</th>
                            <th scope="col">Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                        users.map((user,index)=>(
                            <tr key={user.id}>
                                <th scope="row"  >{index+1}</th>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>
                                    <Link to={`/users/${user.id}`} className="btn btn-primary mt-0">View</Link> &nbsp; &nbsp;
                                    <Link to={`/users/edit/${user.id}`}className="btn btn-outline-primary mt-0">Edit</Link> &nbsp; &nbsp;
                                    <a className="btn btn-danger" onClick={()=>{deleteUser(user.id)}}>Delete</a>
                                </td>
                            </tr>

                        ))
                       }
                    </tbody>
                </table>

            </div>
        </div>

    )
}

export default Home;