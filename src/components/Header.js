import React, {useRef} from "react";
import "./App.css";

const Header = (props) => {

   // const [value, setValue] = useState("");

    const inputEl = useRef("");

    const getSearchTerm = () => {
        console.log(inputEl.current.value);
        props.searchKeyword(inputEl.current.value);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-info">
            <div className="container-fluid">
                <a className="navbar-brand" href="/"><h1 className="para">Contacts</h1></a>
                <div className="search-container">
                    <div className="search-inner">
                        <input className="input-field" type="text" placeholder="Search" aria-label="Search"
                               value={props.term} onChange={getSearchTerm} ref={inputEl}/>
                    </div>
                </div>
            </div>
        </nav>
    );

};
export default Header;