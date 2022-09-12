import React from "react";
//import ContactCard from "./ContactCard";

const ContactDetail = (props) => {
    const recs = props.recs;
    console.log(recs);

    const renderViewContact = recs.map((item) => {
        return (<div className="table">
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th scope="col"><i className="fa fa-user"></i></th>
                        <th scope="col">{item.name}</th>
                    </tr>
                    </thead>
                    <tbody>
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