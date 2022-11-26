
import { useEffect, useState } from 'react';

export const useToken = email => {
    const [token, setToken] = useState('');
    useEffect(() => {
        fetch(`${process.env.REACT_APP_Base_URL}/jwt?email=${email}`)
            .then(res => res.json())
            .then(data => {
                console.log("token from B:", data);
                if (data.token) {
                    localStorage.setItem('autohunt-token', data.token);
                    setToken(data.token)
                }
            })

    }, [email])
    return [token]
}