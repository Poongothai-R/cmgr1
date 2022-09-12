import React, {useState} from "react";
import Header from "./Header";
import ContactList from "./ContactList";
import data from './mock_data.json';
import './App.css';
//import {uuid} from 'uuidv4';
import ContactDetail from "./ContactDetail";

function App() {

    const records = data;

    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState("");

    const [dtlRecs, setDtlRecs] = useState("");
    console.log(searchTerm.length);
    // console.log(dtlRecs.length);
    const viewContactHandler = (id) => {
        console.log(id);
        const detailRecs = records.filter((contact) => {
            return contact.id === id;
        });
        setDtlRecs(detailRecs);
        console.log(detailRecs);
    };

    const searchHandler = (searchTerm) => {
        console.log(searchTerm);
        setSearchTerm(searchTerm);
        setDtlRecs("");
        if (searchTerm !== "") {
            const newContactList = records.filter((contact) => {
                console.log(searchTerm.toLowerCase());
                console.log(contact.name.toLowerCase());
                const S1 = searchTerm.toLowerCase();
                const R1 = contact.name.toLowerCase();
                return (S1 && R1.startsWith(S1));
                // return Object.values(contact).join(" ").toLowerCase().includes(searchTerm.toLowerCase());
            });
            setSearchResults(newContactList);
        } else {
            setSearchResults(records);
        }
    };

    return (<div className="App">
        <Header contacts={records} term={searchTerm} searchKeyword={searchHandler}/>
        <div className="row">
            <div className="col-lg-6">
                {/*<h1>Contact List Section</h1>*/}
                <ContactList contacts={searchTerm.length < 1 ? records : searchResults}
                             getContactId={viewContactHandler}/>
            </div>
            <div className="col-lg-6">
                {
                    (dtlRecs.length < 1) ? (<h1>Click contact to view contact details!</h1>)
                        : (<ContactDetail recs = {dtlRecs} />)
                }
            </div>
        </div>
    </div>);
}

export default App;
