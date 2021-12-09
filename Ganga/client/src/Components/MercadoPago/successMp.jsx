import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { successMail } from "../Redux/Actions/actions"

export function SuccesMp(params) {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(successMail())
    })
    return(
        <div>PAGO EXITOSO</div>
    )
}