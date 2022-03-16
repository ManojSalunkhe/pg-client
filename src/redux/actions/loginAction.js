import axios from "axios";

export const loginAction = (loginCredentials,props)=>{
    return(dispatch)=>{
        const apiCall = async()=>{
            try{
                const response = await axios.post('http://localhost:3700/pg/login',loginCredentials)
                console.log('login',response.data.token)
                if(response.data.token){
                    localStorage.setItem('token',response.data.token)
                    alert('login successfull')
                    props.history.push('/buildings')
                }else{
                    alert('please check your credientails');
                }
            }catch(err){
                console.log(err)
            }
        }
        apiCall()
    }
}