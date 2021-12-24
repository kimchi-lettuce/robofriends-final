import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
    const cardComponent = robots.map((user) => {
        return (
            <Card
                // note need to give each element a unique key
                // this allows the virtual-DOM to have a identifier for each component

                // Warning: Each child in a list should have a unique "key" prop.

                key={user.id}
                id={user.id}
                name={user.name}
                email={user.email}
            />
        );
    });

    return <div>{cardComponent}</div>;
};

export default CardList;
