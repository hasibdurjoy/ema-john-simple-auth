import React from 'react';
import { useHistory } from 'react-router';
import img from '../../images/giphy.gif';

const PlaceOrder = () => {
    const shopMore = useHistory()
    const handleShopMore = () => {
        shopMore.push('/shop');
    }
    return (
        <div>
            <div className="d-flex justify-content-center mt-2 rounded shadow">
                <img src={img} alt="" className="img-fluid" />
            </div>
            <div className="d-flex justify-content-center mt-3 mb-5">
                <button onClick={handleShopMore} className="btn btn-secondary">Shop More</button>
            </div>
        </div>
    );
};

export default PlaceOrder;