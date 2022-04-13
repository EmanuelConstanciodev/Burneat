
import React from 'react';
import { Link } from 'react-router-dom'

interface Props {
    viewBox: string;
    dataIcon: string;
    d: string;
    route: string;
    classValue: string;

}

export const Icon = ({ viewBox, dataIcon, d, route, classValue }: Props) => {


    return (

        <Link to={route} className="rounded-full text-white w-9 h-9 m-1">
            <svg
                data-icon={dataIcon}
                className={classValue}
                xmlns="http://www.w3.org/2000/svg"
                viewBox={viewBox}
            >
                <path
                    fill="currentColor"
                    d={d}
                ></path>
            </svg>
        </Link>

    )
}

 