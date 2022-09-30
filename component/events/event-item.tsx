import React from 'react';
import AddressIcon from '../../component/events/icons/address-icon'
import DateIcon from '../../component/events/icons/date-icon'
import ArrowRightIcon from '../../component/events/icons/arrow-right-icon'


import classes from  './event-item.module.css';
import Button from "./ui/Button";

interface Event {
    event: {
        id: string,
        title: string,
        location: string,
        date: string,
        image: string
    }
}

const EventItem: React.FC <Event> = ( props: Event ) => {

    const { title, location, date, image, id } = props.event
    const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
    const formattedAddress = location.replace(', ', '\n');

    const exploreLink = `/events/${id}`

    return (
        <li className={classes.item}>
            <img src={'/' +  image} alt={''} />
            <div className={classes.content}>
                <div >
                    <h2>{title}</h2>
                    <div className={classes.date}>
                        <DateIcon />
                        <time>{humanReadableDate}</time>
                    </div>
                    <div className={classes.address}>
                        <AddressIcon />
                        <address>{formattedAddress}</address>
                    </div>
                </div>
            </div>
            <div className={classes.actions}>
                <Button link={exploreLink}>Explore Event <ArrowRightIcon /></Button>
            </div>
        </li>
    );
};

export default EventItem;
