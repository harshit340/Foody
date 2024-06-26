import React, { useEffect, useState } from 'react'
import './Orders.css'
import axios from 'axios';
import { toast } from 'react-toastify';
import { assets } from '../../assets/assets';
function Orders({url}) {

  const [orders,setOrders]=useState([]);

  const fetchAllOrders = async()=>{
    const response = await axios.get(url+"/api/order/list");
    if(response.data.success){
      setOrders(response.data.data);
    }
    else{
       toast.error("Error");
    }
  }
  useEffect(()=>{
    fetchAllOrders();
  },[])
  return (
    <div className='order add'>
      <h3>Order Page</h3>
      <div className="order-list">
        {orders.map(()=>(
          <div className="order-item" key={index}>
            <img src={assets.parcel_icon} alt="" />
            <div>
              <p className='order-item-name'>
                {orders.map((order,index)=>{
                  if (index===order.items.length-1) {
                    return item.name + " x "+item.quantity;                   
                  }
                  else{
                    return item.name + " x "+item.quantity;
                  }
                })}
              </p>
              <p className='order-item-name'>
                {order.address.firstName+" x "+order.address.lastName}
                </p>
                <div className="order-item-address">
                  <p>{order.address.street+","}</p>
                  <p>
                    {order.address.city+", "+order.address.state+", "+order.address.country+", "+order.address.zipcode}
                  </p>
                </div>
                <p className='order-item-phone'>{order.address.phone}</p>
            </div>
            <p>Items : {orders.item.length}</p>
            <p>${order.amount}</p>
            <select>
              <option value="Food Processing">Food Processing</option>
              <option value="Out or delivery">Out or delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Orders
