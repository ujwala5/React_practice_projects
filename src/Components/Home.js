import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.css';

function Home() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((res) => {
                setData(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div className='container'>
            <div className='mt-3'>
                <h3>Fetch the data from the Api to React</h3>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((user) => {
                                return (
                                    <tr>
                                        <th>{user.id}</th>
                                        <th>{user.name}</th>
                                        <th>{user.email}</th>
                                        <th>{user.address.city}</th>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default Home;