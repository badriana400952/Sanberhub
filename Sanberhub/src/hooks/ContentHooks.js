import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers, getUsersDelete } from '../store/dataSlice/DataUser'
const ContentHooks = () => {

    const dispatch = useDispatch()
    const { loading, data, error } = useSelector((state) => state.data)


    const handleDelete = async (id) => {
        try {
            await dispatch(getUsersDelete(id))
            await dispatch(getUsers())
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch])
    const ubahTangal = (tanggal) => {
        const date = new Date(tanggal)
        return date.toLocaleDateString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric",
            hour: "numeric",
            minute: "numeric"
        })
    }


    return {
        ubahTangal,
        handleDelete,
        loading, data, error
    }
}

export default ContentHooks
