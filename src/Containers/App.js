import React from "react";
import CardList from "../Components/CardList";
import SearchBox from "../Components/SearchBox";
import Scroll from "../Components/Scroll";
import "./App.css";

// the CardList needs to interact with the SearchBox
// CardList needs to know what is in the SearchBox, to filter out results

class App extends React.Component {
    constructor() {
        super();

        // now App has a state
        this.state = {
            robots: [],
            searchField: "",
        };
    }

    componentDidMount() {
        // fetch from API some user data and then set the init state
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((jsonResp) => this.setState({ robots: jsonResp }));
    }

    // a method that takes in an event
    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value });
    };

    render() {
        const filteredRobots = this.state.robots.filter((elem) => {
            return elem.name
                .toLowerCase()
                .includes(this.state.searchField.toLowerCase());
        });

        // if the list of robots is length 0, that means the data fetch from the API
        // has not yet occured.
        if (this.state.robots.length === 0) {
            return <h1>Loading</h1>;
        } else {
            return (
                <div className="tc">
                    <h1 className="f1">Robofriends</h1>

                    {/**We pass in the method to searchBox */}
                    <SearchBox onChangeFunc={this.onSearchChange} />

                    {/** Runs the CardList based on a filtered list of robot
                     * Note that CardList is contained within the Scroll and is
                     * automatically passed as props.children in the Scroll Component
                     */}
                    <Scroll>
                        <CardList robots={filteredRobots} />
                    </Scroll>
                </div>
            );
        }
    }
}

export default App;
