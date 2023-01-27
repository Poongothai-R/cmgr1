import React from "react";
//import ContactCard from "./ContactCard";

const ContactDetail = (props) => {
    const recs = props.recs;
    console.log(recs);

    const deleteContact = (id) => {
        props.getDeleteId(id);
    }

    const renderViewContact = recs.map((item) => {
        return (<div className="table">
                <table className="table table-striped">
                    <tr>
                            <td></td>
                            <td><p align="right"><button className="fa fa-trash" onClick={()=>{deleteContact(item.id)}}></button></p></td>
                    </tr>
                </table>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th></th>
                        <th scope="col" align="right"><button className="fa fa-trash" onClick={()=>{deleteContact(item.id)}}></button></th>
                    </tr>
                    </thead>
                    <tbody>
                    <th scope="col"><i className="fa fa-user"></i></th>
                    <th scope="col"><h3>{item.name}</h3></th>
                    <tr>
                        <th>UserName</th>
                        <th colSpan="3">{item.username}</th>
                    </tr>
                    <tr>
                        <th>Email</th>
                        <th colSpan="3">{item.email}</th>
                    </tr>
                    <tr>
                        <th>Address</th>
                        <td colSpan="3">{item.address.street},  {item.address.suite}, {item.address.city},  {item.address.zipcode}</td>
                    </tr>
                    <tr>
                        <th>Location</th>
                        <td colSpan="3">{item.address.geo.lat},  {item.address.geo.lng}</td>
                    </tr>
                    <tr>
                        <th>Phone</th>
                        <td colSpan="3">{item.phone}</td>
                    </tr>
                    <tr>
                        <th>Website</th>
                        <th>{item.website}</th>
                    </tr>
                    <tr>
                        <th>Company Name</th>
                        <th>{item.company.name}</th>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    });
    return (<div>{renderViewContact}</div>);

}
export default ContactDetail;