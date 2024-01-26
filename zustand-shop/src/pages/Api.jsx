import React from 'react'
import axiosHttp from '../store/axiosHTTP'
import { useBaseStore, useUserStore } from '../store/useStore';
const Api = () => {
    const setLoading = useBaseStore(state => state.setLoading);
    const token = useUserStore(state => state.token);
    console.log(token);
    const handleClick = () => {
        setLoading(true);
        const call = async () => {

            const json = await axiosHttp.get('http://test.local/api.php', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            const data = await json;
            console.log(data.data);
            setLoading(false);
        };
        call();
    }
    return (
        <>
            <div className="main-content">

                <button onClick={() => handleClick()} className="btn">Call API</button>
            </div>
        </>
    )
}

export default Api