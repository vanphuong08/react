import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Category extends Component {
    static displayName = Category.name;

    constructor(props) {
        super(props);
        this.state = { category: [] };
        this.eventDetele = this.eventDetele.bind(this);
        //this.delete = this.delete.bind(this);
    }
    //delete(categoryId){
    //    axios.delete('https://localhost:5001/api/categories/' + categoryId)
    //        .then(console.log('Deleted'))
    //        .catch(err => console.log(err))
    //}

   async eventDetele(id){
         console.log(id);
         const rs = await axios.delete('https://localhost:5001/api/categories/' + id);

         //const rs = await api.delete(url.category.url = { id });
         if (rs.status === 200) {
             console.log('success deleted');
         }
    }
    componentDidMount() {
        console.log('didmount');
        this.populateWeatherData(); 
        
    }
    render() {
        var category = this.state.category;
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Icon</th>
                        <th></th>
                        <th></th>
                        <th><Link to="/create" className="btn btn-success">Thêm</Link></th>
                    </tr>
                </thead>
                <tbody>
                    {category.length > 0 ?

                        category.map((e, i) => {
                            return (
                                <tr key={i}>
                                    <td>{e.id}</td>
                                    <td>{e.name}</td>
                                    <td>{e.icon}</td>
                                    <td><Link to={"/edit/" + e.id} className="btn btn-warning">Sửa</Link></td>
                                    <td><button onClick={() => this.eventDetele(e.id)} className="btn btn-danger">Xóa</button></td>
                                </tr>
                            )
                        })
                        : <h1 style={{ Color:'red' }}>Loadingg...............</h1>}
                </tbody>
            </table>
        )      
    }
    async populateWeatherData() {
        const response = await fetch('api/categories');
        const data = await response.json();
        //console.log(data)
        this.setState({ category: data });
    }
}

