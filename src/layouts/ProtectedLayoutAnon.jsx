import React from 'react'
import { useSelector } from 'react-redux'
import MainLayout from './MainLayout'
import MainLayoutAnon from './MainLayoutAnon'

const ProtectedLayoutAnon = ({children}) => {
    const {status} = useSelector(store=>store.authReducer)
    const element1 = <MainLayout/>
    const element2 = <MainLayoutAnon/>
    console.log(status)
    if(status === 'offline'){
        return element1
    } else {
        return element2
    }
}

export default ProtectedLayoutAnon