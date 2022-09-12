import React from "react";
import user from "../images/icon.jpg";
import "./ContactList.css";

const ContactCard = (props) => {
    console.log(props);
    const recs = props.contact;

    // const getContactId = (e) => {
    //   alert("Hi");
    // };

// const toggleCard=()=>{
//   setActive(!isActive);
// }


    return (
        <div className="list">
            <div className=" list-group ">
                <div className="card" align="flex">
                    <div className=" card-group" onClick={()=>props.clickHandler(recs.id)}>
                        <div className="left">
                            <img src={user} width="90" height="90"
                                 alt="user"/></div>
                        <div className=" center-group ">
                            <div className="center">
                                <span><h3> {recs.name}</h3></span>
                                <span><h6> {recs.company.name}</h6></span>
                            </div>
                        </div>
                        <div className="right">
                        </div>
                        <br/><br/>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ContactCard;