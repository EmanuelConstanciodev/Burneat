import React from 'react';
import { objCounters } from '../../Utils/home.utils'
import Counter from '../Counter/Counter';


interface Props{
    icon: JSX.Element,
    count: number,
    type: string

}

export const Counters = ({}: Props) => {


    


    return (
        <>
            {
                objCounters.map(counter: object<Props>   => {
                    return <Counter counter={counter} />
                })
            }
        </>
    );
};

