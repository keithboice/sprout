import axios  from "@axios";
import useJwt from "@core/auth/jwt/useJwt";


const { jwt } = useJwt(axios, {})
export default jwt
