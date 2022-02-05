import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import Swal from 'sweetalert2';
import axios from 'axios';
import { Table } from 'react-bootstrap';

const MyOrder = () => {
    const { user } = useAuth()
    const {email} = user.email
    const [orders, setOrders] = useState([])
    const [cancel, setCancel] = useState("");

    // Get Ordered food by customer email 
    useEffect(() => {
        fetch(`http://localhost:5000/orders/${user?.email}`)
        .then(res=> res.json())
        .then(data=> setOrders(data))
    }, [])

    // Delete Ordered Food Item by ID
    const handleDelete = (id) => {
      const confirm = window.confirm(
        "Are You Sure? You are going to cancel your order"
      );

      if (confirm) {
        axios
          .delete(`http://localhost:5000/delete/${id}`)
          .then((res) => {
            if (res.data.deletedCount) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Order has been Cancelled Successfully",
                showConfirmButton: false,
                timer: 2000,
              });
              setCancel(res.data);
            }
          })
          .then((data) => setCancel(data));
      }
    };

    return (
      <div className="my-5">
        <h1 className="fw-normal">My Orders</h1>
        {orders.length ? (
          <div className="container">
            <Table striped bordered hover responsive>
              <thead>
                <tr className="">
                  <th>Order No</th>
                  <th>Adress</th>
                  <th>Status</th>
                  <th>Product</th>
                  <th>Manage Order</th>
                </tr>
              </thead>
              {orders?.map((order) => (
                <tbody key={order._id}>
                  <tr className="py-5 bg-white text-white">
                    <td>1</td>
                    <td>
                      {order.email}
                      <br />
                      {order.city},{order.postCode},{order.country}
                      <br />
                      {order.date}
                      <br />
                      Phone:{order.phone}
                    </td>
                    {order.status === "Approved" ? (
                      <td className="text-primary">{order.status}</td>
                    ) : (
                      <td className="text-danger">{order.status}</td>
                    )}
                    <td>
                      ${order.Price}
                      <br />
                      {order.Name}
                    </td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(order._id)}
                      >
                        Cancel Order
                      </button>
                    </td>
                  </tr>
                </tbody>
              ))}
            </Table>
          </div>
        ) : (
          <h1>You have 0 Orders</h1>
        )}
      </div>
    );
};

export default MyOrder;