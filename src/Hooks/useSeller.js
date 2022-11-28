import { useEffect, useState } from "react";


// to verify an admin is actually a admin or not
export const useSeller = (email) => {
    const [isSeller, setIsSeller] = useState(false);
    const [isSellerLoading, setIsSellerLoading] = useState(true);

    useEffect(() => {
        if (email) {
            fetch(`${process.env.REACT_APP_Base_URL}/users/seller/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setIsSeller(data.isSeller);
                    setIsSellerLoading(false)
                })
        }

    }, [email])
    return [isSeller, isSellerLoading]
}


