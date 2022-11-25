import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from "react-hot-toast";
import { AuthContext } from '../../../Contexts/AuthProvider';
const BuyModal = ({ carInfo, setCarInfo }) => {
    const { modelName, _id, resellPrice, usageTime, originalPrice, location, image_url, description, selllerContact, condition } = carInfo;
    const { user } = useContext(AuthContext);
    // console.log(carInfo);

    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const handlePurchase = (data) => {
        // console.log(data);
        const { buyerContact, meetingPlace } = data

        const d = new Date();
        let time = d.getTime();
        // console.log(time);
        const purchaseInfo = {
            buyerName: user?.displayName,
            buyerContact: buyerContact,
            buyerEmail: user?.email,
            sellingPrice: resellPrice,
            carModelName: modelName,
            buyerImage: user?.photoURL,
            purchaseTime: time,
            meetingPlace
        }
        console.log(purchaseInfo);
        fetch(`${process.env.REACT_APP_Base_URL}/purchase`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(purchaseInfo)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    toast.success('successfully added to purchaseList')
                    setCarInfo(null);
                    reset();

                }

            })
            .catch(err => toast.error(err.message))

    }


    return (
        <div>
            {/* The button to open modal */}

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{modelName}</h3>

                    <form onSubmit={handleSubmit(handlePurchase)}>
                        <input type="email" placeholder="Type here" disabled defaultValue={user?.email} className="input input-bordered w-full my-2" />
                        <input type="text" placeholder="Type here" disabled defaultValue={user?.displayName} className="input input-bordered w-full my-2" />
                        <input type="text" placeholder="Type here" disabled defaultValue={modelName} className="input input-bordered w-full my-2" />
                        <input type="number" placeholder="Type here" disabled defaultValue={resellPrice} className="input input-bordered w-full my-2" />
                        <input type="tel" placeholder="☎ Phone number" className="input input-bordered w-full my-2" required
                            {...register("buyerContact", { required: "Number is required" })}
                        />
                        <input type="text" placeholder="🗺 Meeting location" className="input input-bordered w-full my-2" required {...register("meetingPlace", { required: "Place is required" })} />
                        <button className="btn btn-primary w-full mt-2">Confirm purchase</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default BuyModal