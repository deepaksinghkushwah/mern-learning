import React from 'react'
import {useBaseStore} from '../../store/useStore';
import SpinnerImage from "../../assets/loading.gif";
import shallow from 'zustand/shallow';
const Spinner = () => {
    const loading = useBaseStore((state) => state.loading, shallow);
    
    return ( loading === true ? <div className='spinnerWrapper'>
            <img className='spinner' src={SpinnerImage} alt="Spinner"/>
        </div> : '');       
    
}

export default Spinner