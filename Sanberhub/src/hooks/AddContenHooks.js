import { addDataUser } from "../store/dataSlice/DataUser"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
const AddContenHooks = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [data, setData] = useState({
        name: '',
        address: '',
        gender: '',
        born_date: '',
    })
    console.log("ini data", data)

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log("ini data", data)
            const response = await dispatch(addDataUser(data))
            console.log(response)
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });

    }
    const handleChangeRadio = (key, value) => {
        setData({ ...data, [key]: value });
    };

  return {
    data,
    setData,
    handleSubmit,
    handleChange,
    handleChangeRadio
  }
}

export default AddContenHooks
