import React from 'react';

const CarsCard = ({ car, setCarInfo }) => {


    const { modelName, _id, resellPrice, usageTime, originalPrice, location, image_url, description, selllerContact, condition } = car;
    return (
        <>
            <div className="card w-auto bg-neutral shadow-xl">
                <figure><img src={image_url} alt="car_image" className="h-[230px] w-full object-cover" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {modelName}
                        <div className="badge badge-primary">{condition}</div>
                    </h2>
                    <div className="flex justify-between items-center my-2">
                        <p className="text-slate-50">Resel Price:<span className="text-accent"> ${resellPrice}</span></p>
                        <p className="text-slate-50">Original:<span className="text-accent"> ${originalPrice}</span></p>
                    </div>
                    <p>{description?.length > 100 ? description.slice(0, 90) + "...." : description}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Usage: {usageTime}</div>
                        <div className="badge badge-outline">{location}</div>
                    </div>
                    <div className="card-actions justify-between items-center mt-3">
                        <p className="text-slate-50">☎:<span className="text-accent"> {selllerContact}</span></p>
                        <label htmlFor="my-modal-3" className="btn btn-primary" onClick={() => { setCarInfo(car) }}>Buy Now</label>
                    </div>
                </div>
                {/* {
                    carInfo && <BuyModal
                        carInfo={carInfo}
                    />
                } */}
            </div>

        </>
    )
}

export default CarsCard