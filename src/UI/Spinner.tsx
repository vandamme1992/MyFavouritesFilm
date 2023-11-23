import React from 'react';
import { MoonLoader} from "react-spinners";

const Spinner = () => {
    return <div className='absolute inset-x-[48%] inset-y-[35%]'>

        <MoonLoader color="#94b399" />
    </div>
};

export default Spinner;
