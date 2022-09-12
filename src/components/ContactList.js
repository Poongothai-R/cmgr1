import React from "react";
import "./ContactList.css";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
    console.log(props);

    const viewContact = (id) => {
        props.getContactId(id);
    }

    const renderContactList = props.contacts.map((contact) => {
        return <ContactCard contact={contact}
                            clickHandler={viewContact} key={contact.id}/>;
    });

    return (<div>
        {renderContactList.length > 0 ? renderContactList : <h2><br/><br/>"No Contacts Available!"</h2>}
    </div>);
}

export default ContactList;