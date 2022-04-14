import React from 'react';
import { objCounters } from '../../Utils/home.utils'
import Counter from '../Counter/Counter';

// interface Props {
//     type: string,
//     count: number
// }
export const Counters = () => {


    


    return (
        <>
            {
                objCounters.map(counter => {
                    return <Counter type={counter.type} count={counter.count} />
                })
            }
        </>
    );
};

