import {getFeaturedEvents} from "../dummy-data";
import React from "react";
import EventList from "../component/events/event-list";

const Home: React.FC = () => {
    const featuredEvents = getFeaturedEvents()

    return (
        <div>
            <EventList items={featuredEvents} />
        </div>
    )
}

export default Home;
