import React from "react";

const SearchBox = ({ onChangeFunc }) => {
    return (
        <div className="pa2">
            <input
                type="search"
                placeholder="Enter a robot to search"
                onChange={onChangeFunc}
            />
        </div>
    );
};

export default SearchBox;
