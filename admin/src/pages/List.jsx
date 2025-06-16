import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { backendUrl, currency } from '../App'
import { toast } from 'react-toastify'
import Add from './Add'

const List = ({ token }) => {

  const [list, setList] = useState([])
  const [editProduct, setEditProduct] = useState(null);

  const fetchList = async () => {
    try {

      const response = await axios.get(backendUrl + '/api/product/list')
      if (response.data.success) {
        setList(response.data.products.reverse());
      }
      else {
        toast.error(response.data.message)
      }

    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  const removeProduct = async (id) => {
    try {

      const response = await axios.post(backendUrl + '/api/product/remove', { id }, { headers: { token } })

      if (response.data.success) {
        toast.success(response.data.message)
        await fetchList();
      } else {
        toast.error(response.data.message)
      }

    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  const onEditProduct = (product) => {
    setEditProduct(product);
  };

  useEffect(() => {
    fetchList()
  }, [])

  return (
    <>
      <p className='mb-2'>All Products List</p>
      <div className='flex flex-col gap-2'>

        {/* ------- List Table Title ---------- */}

        <div className='hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm'>
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b className='text-center'>Action</b>
        </div>

        {/* ------ Product List ------ */}

        {
          list.map((item, index) => (
            <div
              className='grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-1 px-2 border text-sm'
              key={index}
            >
              <img className='w-12' src={item.image[0]} alt="" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>{currency}{item.price}</p>
              <div className='flex justify-end md:justify-center gap-2'>
                <button
                  onClick={() => onEditProduct(item)}
                  className='bg-blue-500 text-white px-2 py-1 rounded text-xs hover:bg-blue-600 transition'
                >
                  Edit
                </button>
                <button
                  onClick={() => removeProduct(item._id)}
                  className='text-red-600 text-lg px-2 hover:text-red-800 transition'
                  title="Remove"
                >
                  X
                </button>
              </div>
            </div>
          ))
        }

      </div>

      {/* Add component for adding/editing products */}
      <Add token={token} editProduct={editProduct} setEditProduct={setEditProduct} />
    </>
  )
}

export default List