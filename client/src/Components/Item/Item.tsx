import React from 'react';
import { Link } from 'react-router-dom';



interface ItemProps {


    route?: string;
    title: string;
    classValue: string


};

export const Item = ({ route, title, classValue }: ItemProps) => {

    if (route == undefined) return <span className={classValue}>{title}</span>;
    
 
    return (


        <li>
            <Link to={route} >{title}</Link>
        </li>


    );
};
