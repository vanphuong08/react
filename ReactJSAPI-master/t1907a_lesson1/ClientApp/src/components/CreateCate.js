import React, { Component } from 'react';
import axios from 'axios';

export default class CreateCate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            icon: ''
        }
    }
    OnChangeName = (e) => {
        this.setState({
            name: e.target.value
       
        })
        console.log(e.target.value)
    }
    OnChangeIcon = (e) => {
        this.setState({
            icon: e.target.value
           
        })
        console.log(e.target.value)
    }
    onSubmit = (e) => {
        e.preventDefault();

        const obj = {
            name: this.state.name,
            icon: this.state.icon
        };
        axios.post('https://localhost:5001/api/categories', obj).then(res => console.log(res.data));
        this.setState({
            name: '',
            icon: ''
        });
    }
    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h3>Add New Category</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label> Name Category:  </label>
                        <input type="text" className="form-control" value={this.state.name} onChange={this.OnChangeName} name="name" />
                    </div>
                    <div className="form-group">
                        <label>Icon: </label>
                        <input type="text" className="form-control" value={this.state.icon} onChange={this.OnChangeIcon} name="icon" />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add Cate" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        );
    }
}
