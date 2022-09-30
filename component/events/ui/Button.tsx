import React from 'react';
import Link from "next/link";
import classes from "./buttom.module.css";

interface button {
    link: string;
    children: React.ReactNode
}

const Button: React.FC<button> = (props: button) => {
    return (
        <Link href={props.link}>
            <a className={classes.btn}>{props.children}</a>
        </Link>
    )
};

export default Button;
