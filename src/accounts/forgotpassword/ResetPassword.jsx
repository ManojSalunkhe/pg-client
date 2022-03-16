import { useState } from "react";
import { useDispatch } from "react-redux";
import { resetPasswordAction } from '../../redux/actions/registerAction';
import '../../css/forgotpassword/resetpassword.css';

const ResetPassword = (props) => {

    const dispatch = useDispatch();

    const [resetPassword, setResertPassword] = useState({ email: '', otp: '', password: '' });

    const handleResetFormSubmit = (e) => {
        e.preventDefault();
        dispatch(resetPasswordAction(resetPassword, props));
        setResertPassword({ email: '', otp: '', password: '' });
    }

    return <div className="resetpassword-container">
        <h2>Reset Password</h2>
        <form onSubmit={handleResetFormSubmit} className="resetpassword-form">
            <input type="text" placeholder="Email *" value={resetPassword.email} onChange={(e) => setResertPassword({ ...resetPassword, email: e.target.value })} />
            <input type="text" placeholder="OTP *" value={resetPassword.otp} onChange={(e) => setResertPassword({ ...resetPassword, otp: e.target.value })} />
            <input type="password" placeholder="New Password *" value={resetPassword.password} onChange={(e) => setResertPassword({ ...resetPassword, password: e.target.value })} />
            <button type="submit" >Submit</button>
        </form>
    </div>
}

export default ResetPassword;