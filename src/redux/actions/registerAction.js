import axios from "axios";

export const registerAction = (props) => {

}


export const forgotPasswordAction = (email, props) => {
    let data = { email: email }
    return (dispatch) => {
        const apiCall = async () => {
            try {
                const response = await axios.post('http://localhost:3700/pg/forgot_password', data);
                console.log(response.data);
                if (response.data.otp) {
                    alert('otp sent to the specified email');
                    props.history.push('/reset_password')
                }
                else alert(response.data);
            } catch (err) {
                console.log('forgot password', err)
            }
        }
        apiCall();
    }
}


export const resetPasswordAction = (data, props) => {
    console.log(data)
    return (dispatch) => {
        const apiCall = async () => {
            try {
                const response = await axios.post('http://localhost:3700/pg/reset_password', data)
                console.log('response from the reset password apiCall', response.data);
                if (response.data == 'Password has been successfully updated') {
                    alert(response.data);
                    props.history.push('/login');
                }
                else alert(response.data);
            } catch (err) {
                console.log('reset password err', err)
            }
        }
        apiCall();
    }
}