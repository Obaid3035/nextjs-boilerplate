import React from 'react';
import { useRouter } from "next/router";
import {getEventById} from "../../dummy-data";

const EventDetailPage = () => {
    const router = useRouter()
    const { eventId } = router.query;
    const event = getEventById(eventId);
    if(!event) {
        return <>No Event Found</>
    }

    console.log(eventId )
    return (
        <div>
            <h2>HELLO THERE</h2>
        </div>
    );
};

export default EventDetailPage;
