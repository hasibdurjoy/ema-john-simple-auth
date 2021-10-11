import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import useAuth from '../../hooks/useAuth';


const Shipping = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
    };

    const { user } = useAuth();

    const placeOrder = useHistory();

    const handleConfirmOrder = () => {
        placeOrder.push('/placeOrder');
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="d-flex flex-column w-50 mx-auto gap-2 mt-4">
                    <input defaultValue={user.displayName} {...register("name", { required: true })} className="rounded py-3 px-3 fs-5" placeholder="name *" />
                    {errors.name && <span className="text-danger">** This field is required</span>}

                    <input defaultValue={user.email} {...register("email", { required: true })} className="rounded py-3 px-3 fs-5" placeholder="email *" />
                    {errors.email && <span className="text-danger">** This field is required</span>}

                    <select {...register("division")} className="rounded py-3 px-3 fs-5">
                        <option value="barishal">Barishal</option>
                        <option value="chittagong">Chittagong</option>
                        <option value="dhaka">Dhaka</option>
                        <option value="khulna">khulna</option>
                        <option value="mymenshing">Mymenshing</option>
                        <option value="rajshahi">Rajshahi</option>
                        <option value="rangpur">Rangpur</option>
                        <option value="sylhet">Sylhet</option>
                    </select>

                    <input {...register("city", { required: true })} className="rounded py-3 px-3 fs-5" placeholder="city *" />
                    {errors.city && <span className="text-danger">** Your City  is required</span>}

                    <input {...register("address", { required: true })} className="rounded py-3 px-3 fs-5" placeholder="address *" />
                    {errors.address && <span className="text-danger">** Your address  is required</span>}



                    <input {...register("phone", { required: true })} className="rounded py-3 px-3 fs-5" placeholder="phone *" />
                    {errors.phone && <span className="text-danger">** Phone Number is required</span>}

                    <select {...register("payment")} className="rounded py-3 px-3 fs-5">
                        <option value="bKash">bKash</option>
                        <option value="rocket">Rocket</option>
                        <option value="other">Cash On Delivery</option>
                    </select>
                    {errors.payment && <span className="text-danger">** Payment Method is required</span>}


                    <input onClick={handleConfirmOrder} type="submit" value="confirm order" className="btn btn-primary w-50 mx-auto fs-4 mb-5" />
                </div>
            </form>
        </div>
    );
};

export default Shipping;