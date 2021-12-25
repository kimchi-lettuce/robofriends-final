import React from "react";
import "tachyons";

// note can only return one element, or in other terms "only one div"
// dib -> tachyons Display In-line Block
const Card = ({ id, name, email }) => {
    return (
        <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img alt="robots" src={`https://robohash.org/${id}?200x200`} />

            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
};

export default Card;
