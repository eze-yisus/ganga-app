import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { failMail } from "../Redux/Actions/actions"

export function FailMp(params) {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(failMail())
    })
    return(
        <div>EL PAGO FALLÓ</div>
    )
}