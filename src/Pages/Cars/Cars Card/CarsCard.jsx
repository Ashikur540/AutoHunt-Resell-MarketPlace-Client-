import React from 'react';

const CarsCard = ({ car }) => {
    // "category_name": "Tesla",
    // "modelName": "Model S",
    // "resellPrice": 288,
    // "originalPrice": 480,
    // "location": "Dhaka",
    // "image_url": "https://i.ibb.co/q00s66n/model-S.jpg",
    // "description": "Instantly connect with multi-device Bluetooth, or fast charge devices with wireless and 36-watt USB-C charging.A 22-speaker, 960-watt audio system with Active Road Noise Reduction offers immersive listening and studio-grade sound quality.With front and rear trunks and fold-flat seats you can fit your bike without taking the wheel off—and your luggage too.",
    // "sellerName": "Millat rahman",
    // "verified": true,
    // "usageTime": 2,
    // "postedDate": "24/11/2022"

    const { modelName, _id, resellPrice, usageTime, originalPrice, location, image_url, description, condition } = car;
    return (
        <>
            <div className="card w-auto bg-neutral shadow-xl">
                <figure><img src={image_url} alt="car_image" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {modelName}
                        <div className="badge badge-primary">{condition}</div>
                    </h2>
                    <div className="flex justify-between items-center my-2">
                        <p className="text-slate-50">Resel Price:<span className="text-accent"> ${resellPrice}</span></p>
                        <p className="text-slate-50">Original:<span className="text-accent"> ${originalPrice}</span></p>
                    </div>
                    <p>{description?.length > 100 ? description.slice(0, 120) + "...." : description}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Age: {usageTime} yrs</div>
                        <div className="badge badge-outline">{location}</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CarsCard