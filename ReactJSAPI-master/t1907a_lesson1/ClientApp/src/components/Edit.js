import axios from 'axios';
import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

export default function Edit() {
    const [products, setProduct] = useState({});
    const { id } = useParams();
    useEffect(() => {
        fetch("api/categories/" + id)
            .then(rs => rs.json())
            .then(rs => {
                console.log(rs)
                setProduct(rs)
            })
        //console.log('hjhj')
    }, []) // componentDidUpdate

    function OnChangeName(e){
        //this.setState({
        //    name: e.target.value

        //})
        console.log(e.target.value)
    }
    function OnChangeIcon(e) {
        //this.setProduct({
        //    icon: e.target.value

        //})
        console.log(e.target.value);
    }
    function HandleSubmit(e){
        e.preventdefault();
        //const obj = {
        //    name: this.state.name,
        //    icon: this.state.icon
        //}
        //axios.put('https://localhost:5001/api/categories' + this.props.match.params.id, obj).then(res => console.log(res.obj))
        //this.props.history.push('/index');
    }
    return (
        products === null ? <h2>CC</h2> :
            <div style={{ marginTop: 10 }}>
                <h3>Add New Category</h3>
                <form onSubmit={HandleSubmit}>
                    <div className="form-group">
                        <label> Name Category:  </label>
                        <input type="text" className="form-control" placeholder={products.name} onChange={OnChangeName} name="name" />
                    </div>
                    <div className="form-group">
                        <label>Icon: </label>
                        <input type="text" className="form-control" placeholder={products.icon} onChange={OnChangeIcon} name="icon" />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add Cate" className="btn btn-primary" />
                    </div>
                </form>
            </div>
    )
}