import React from "react";


const Searchbar = ({handleSearch}) => {
    return (
        <div>
            <input onChange={event=>handleSearch(event)}/>
        </div>
    )
}

export default Searchbar;