
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { getUsersEdit, getUsersID } from '../store/dataSlice/DataUser'
const EditContenHooks = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const { loading, error, data } = useSelector((state) => state.data)
    console.log("ini data", error, loading, data)
    const navigate = useNavigate()
    const [datas, setDatas] = useState({
        name: "",
        address: "",
        gender: "",
        born_date: "",
    })
    useEffect(() => {
        dispatch(getUsersID(id))
    }, [dispatch, id])

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await dispatch(getUsersEdit({ id, newdata: datas }));
            console.log("edit ", response);
            navigate('/')
        } catch (error) {
            console.log(error);
        }
    }


    const handleChange = (e) => {
        const { name, value } = e.target;
        setDatas({ ...datas, [name]: value });

    }
    const handleChangeRadio = (key, value) => {
        setDatas({ ...datas, [key]: value });
    };
  return {
    data,
    handleChange,
    handleChangeRadio,
    handleSubmit
  }
}

export default EditContenHooks
