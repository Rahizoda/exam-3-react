import React, { useEffect, useState } from 'react';
import Sync from './Sync';
import axios from 'axios';
import { Api } from '../config/api';

const Async = () => {
    const [data, setData] = useState([])
    const [ triger , setTriger] = useState(false)

    async function GetData() {
        try {
            const { data } = await axios.get(Api)
            setData(data.data)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        if (triger) {
            GetData()
        }
        return setTriger(true)
    } , [triger])

    async function PostData(data) {
        try {
            await axios.post(Api, data , {
          headers: { "Content-Type": "multipart/form-data" },
        })
            
        } catch (error) {
            console.error(error);
        }
    }

    async function DeleteData(id) {
        try {
            await axios.delete(`${Api}?id=${id}`)
            GetData()
        } catch (error) {
            console.error(error);
        }
    }


    async function EditData(idxx , data) {
        try {
            await axios.put(`${Api}/${idxx}` , data )
            GetData()
        } catch (error) {
            console.error(error);
        }
    }

    return ( 
        <Sync data={data} PostData={PostData} DeleteData={DeleteData } EditData={EditData} />
    );
}

export default Async;
