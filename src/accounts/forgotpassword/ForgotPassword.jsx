import { useState } from "react";
import { forgotPasswordAction } from '../../redux/actions/registerAction';
import { useDispatch } from "react-redux";
import '../../css/forgotpassword/forgotpassword.css';

const ForgotPassword = (props) => {

    const dispatch = useDispatch();
    const [email, setEmail] = useState('')

    const handleForgotPasswordFormSubmit = (e) => {
        e.preventDefault();
        dispatch(forgotPasswordAction(email, props));
        setEmail('');
    }
    return <div className="forgotpassword-container">
        <h2>Password reset form</h2>
        <form onSubmit={handleForgotPasswordFormSubmit} className="forgotpassword-form">
            <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
            <button type="submit">submit</button>
        </form>
    </div>
}

export default ForgotPassword;