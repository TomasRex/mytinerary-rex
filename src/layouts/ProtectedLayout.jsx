import React from 'react'
import { useSelector } from 'react-redux'

const ProtectedLayout = ({children}) => {
    const {status} = useSelector(store=>store.authReducer)
    if(status === 'online'){
        return children
    }
}

export default ProtectedLayout