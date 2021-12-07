import React, { /*useState,*/ useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllUsers } from '../Redux/Actions/actions'
import CardUser from "./cardUser"



export default function AllUser() {

    const dispatch = useDispatch()
    const allUsers = useSelector((state) => state.allUsers)

    useEffect(() => {
        dispatch(getAllUsers())
    }, [dispatch])

    return (
        <div>
            {
                allUsers.map((el) => {
                    return (
                        <div key={el.id}>
                            <CardUser
                                name={el.name}
                                surname={el.surname}
                                mail={el.mail}
                                birthdate={el.birthdate}
                                address={el.address}
                            />
                        </div>
                    )
                })
            }
        </div>
    )
}


