import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { FaEllipsisV, FaGlobe, FaTrashAlt } from 'react-icons/fa';
import { Spinner } from '../../Components/Spinner/Spinner';
import { AuthContext } from '../../Contexts/AuthProvider';

const MyCars = () => {
  const { user, dispatch, state } = useContext(AuthContext)
  const { data: allCars = [], isLoading, refetch } = useQuery({
    queryKey: ['allCars'],
    queryFn: () => fetch(`${process.env.REACT_APP_Base_URL}/allCars`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('autohunt-token')}`
      },
    }).then(res => res.json())
      .catch(err => toast.error(err.message))
  })
  if (isLoading) return <Spinner />;
  // console.log(myCars);
  const myCars = allCars.filter(mycar => mycar.sellerEmail === user?.email)
  console.log("MY CARS:  ", myCars);

  console.log("state", state);

  const hanleDelete = singlecar => {
    const { _id, modelName, } = singlecar
    console.log(_id);
    console.log('test...');
    fetch(`http://localhost:5000/myCars/${_id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("autohunt-token")}`
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);

        toast.success(`${modelName} deletion successfull`)
        refetch();

      })
      .catch(err => toast.error(err.message))
  }


  console.log("All CARS:  ", allCars);

  return (
    <>
      <p className="text-3xl font-bold text-center text-primary my-2">Manage cars here</p>

      <div className="overflow-x-auto">
        <table className="table w-full h-full">

          <thead>
            <tr>
              <th></th>
              <th>Model Name</th>
              <th>Resell Price</th>
              <th>Seller Email</th>
              <th>Seller Contact</th>
              <th>Availability</th>
              <th>Action</th>

            </tr>
          </thead>
          <tbody>

            {
              myCars?.map((singleCar, i) => <tr key={singleCar._id}>
                <th>{i + 1}</th>
                <td>{singleCar?.modelName}</td>
                <td>{singleCar?.resellPrice}</td>
                <td>{singleCar?.sellerEmail ? singleCar?.sellerEmail : 'not privided'}</td>
                <td>{singleCar?.selllerContact}</td>
                <td>{singleCar?.available}</td>
                <div className="dropdown dropdown-end">
                  <label tabIndex={0} className="cursor-pointer m-1"><FaEllipsisV /></label>
                  <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">

                    <li><button className="text-accent"> <FaGlobe />  Advertise Now</button></li>
                    <td>
                      <button className="text-error flex items-center" onClick={() => hanleDelete(singleCar)}> <FaTrashAlt />   Delete</button>
                    </td>
                  </ul>
                </div>
                {/*  */}


              </tr>)
            }


          </tbody>
        </table>
      </div>
    </>
  )
}

export default MyCars