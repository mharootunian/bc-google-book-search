import React from "react";

const Search = (...props) => {
    return(
        <div>
            <form>
                Search for Books: <input type={"text"} placeholder={"Enter book search query"}
                                         id={"searchInput"} name={"searchInput"}></input>
                <button name={"search"} id={"search"}>Search</button>
            </form>
        </div>

    );
};

export default Search;