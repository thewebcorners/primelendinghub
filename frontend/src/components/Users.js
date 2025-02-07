import React, { useEffect, useState } from 'react'
import SummaryApi from '../common'
import moment from 'moment'
import { FaEdit } from "react-icons/fa";
import { toast } from 'react-toastify';

const Users = () => {
  const [loggedInUser, setLoggedInUser] = useState("");
  useEffect(() => {
    setLoggedInUser(localStorage.getItem("loggedInUser"));
  }, []);
  const [allUsers, setAllUsers] = useState([]) // Initialize with an empty array
  const fetchAllUsers = async () => {
    try {
      const fetchData = await fetch(SummaryApi.allUser.url, {
        method: SummaryApi.allUser.method,
        credentials: 'include'
      })
      const dataResponse = await fetchData.json()
     //  console.log(dataResponse);
       
      if (dataResponse.success) {
        setAllUsers(dataResponse.data)
      }
      if (dataResponse.error) {
        toast.error(dataResponse.message)
      }
    } catch (error) {
      console.log("Error fetching users:", error)
    }
  }

  useEffect(() => {
    fetchAllUsers()
  }, [])
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Welcome, {loggedInUser} 👋</h1>

      </div>
      <div className="container">
        <table className='w-full userTable'>
          <thead>
            <tr className='bg-black text-white'>
              <th>Sr.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Contact No.</th>
              <th>Role</th>
              <th>Status</th>
              <th>Created Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              allUsers.length > 0 ? allUsers.map((el, index) => {
                console.log(el);
                
                return (
                  <tr key={index}>
                    <td className='textalign:center'>{index + 1}</td>
                    <td>{el?.firstName} {el?.lastName}</td>
                    <td>{el?.email}</td>
                    <td className='textalign:center'>{el?.mobile}</td>
                    <td className='textalign:center'>{el?.role}</td>
                    <td className='textalign:center'>{el?.status}</td>
                    <td>{moment(el?.createdAt).format('ll')}</td>
                    <td>

                      <FaEdit />

                    </td>
                  </tr>
                )
              }) : (
                <tr>
                  <td colSpan="6" className="text-center">No users found</td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Users