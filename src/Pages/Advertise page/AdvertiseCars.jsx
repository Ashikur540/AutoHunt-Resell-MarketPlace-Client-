import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
const AdvertiseCars = () => {
    // const { state } = useContext(AuthContext);
    const { state } = useContext(AuthContext);
    console.log("dd", state);
    return (
        <div>
            <p className="text-base-20 font-bold my-6 text-3xl text-center">Advertising most demandable cars </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    state?.cart?.map(car => <p>{car.carModelName}</p>)
                }
            </div>
        </div>
    )
}

export default AdvertiseCars