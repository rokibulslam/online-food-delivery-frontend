import useId from '@mui/material/utils/useId';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const { id } = useParams();
    console.log(id)
    const [product, setProduct] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/foods/${id}`)
        .then(res => res.json())
        .then(data =>setProduct(data))
    }, [])
    console.log(product)
    return (
        <div>
            <h1>{}</h1>
            
        </div>
    );
};

export default Purchase;