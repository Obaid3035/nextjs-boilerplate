import React from 'react';
import EventItem from "./event-item";
import classes from  './event-list.module.css';

interface Items {
    items: {
        id: string,
        title: string,
        description: string,
        location: string,
        date: string,
        image: string,
        isFeatured: boolean
    }[]
}

const EventList: React.FC <Items>= ( props : Items ) => {
    const { items } = props;
    return (
        <ul className={classes.list}>
            {
                items.map((event, index) => <EventItem key={index} event={event}/> )
            }
        </ul>
    );
};

export default EventList;
