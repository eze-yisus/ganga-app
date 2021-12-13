import { useEffect } from "react";
import { useDispatch /*useSelector*/ } from "react-redux";
import { getUserInfoGoogle } from "../../../Redux/Actions/actions";
// import { FaGoogle } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export function LoginG(params) {
  const dispatch = useDispatch();
  // const { getInfoGoogle } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getUserInfoGoogle());
  }, [dispatch]);

  // console.log(getInfoGoogle.login);

  function redirectToGoogleLogin() {
    //  const googleLoginURL = "http://localhost:3001/loginGoogle";
    const googleLoginURL = "https://ganga-app.herokuapp.com/loginGoogle";
    let newWindow = window.open(
      googleLoginURL,
      "_blank",
      "width=500,height=600"
    );
    let timer = null;
    if (newWindow) {
      timer = setInterval(() => {
        if (newWindow.closed) {
          dispatch(getUserInfoGoogle());
          if (timer) clearInterval(timer);
        }
      }, 500);
    }
  }

  return (
    <>
      {/* <button onClick={redirectToGoogleLogin}>
        <FcGoogle /> 
      </button> */}
      <button
        onClick={redirectToGoogleLogin}
        className="border-2 border-gray-400 rounded px-2 text-xl" //onClick= {}
      >
        <FcGoogle className="inline-block px-1 w-10 h-10" /> Crear cuenta
      </button>
    </>
  );
}
