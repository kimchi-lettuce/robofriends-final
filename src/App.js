import React from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import { robots } from "./robots";
import "./App.css";

// the CardList needs to interact with the SearchBox
// CardList needs to know what is in the SearchBox, to filter out results

class App extends React.Component {
    constructor() {
        super();

        // now App has a state
        this.state = {
            searchField: "",
        };
    }

    // a method that takes in an event
    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value });
    };

    render() {
        const filteredRobots = robots.filter((elem) => {
            return elem.name
                .toLowerCase()
                .includes(this.state.searchField.toLowerCase());
        });

        return (
            <div className="tc">
                <h1 className="f1">Robofriends</h1>

                {/**We pass in the method to searchBox */}
                <SearchBox onChangeFunc={this.onSearchChange} />

                {/** Runs the CardList based on a filtered list of robot */}
                <CardList robots={filteredRobots} />
            </div>
        );
    }
}

export default App;
