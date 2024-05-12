import './RecoverPassword.css'
import arrow from '../../images/arrow.svg'


const RecoverPassword = () => {
  return (
    <div className='recoverPassword--container'>
     <form>
     <h2>Recover your Password</h2>
     <p><span>Enter the email</span> that you used when register to recover your password. You will receive a <span>password reset link.</span></p>
     <input type="email" placeholder="Email Address" required></input>

    
     <button className='send'>Send Link</button>
     <button className='back'><img src={arrow} alt="" /> Back to Login</button>
  
     <p className='if'>If you need further assistance</p>
     <p className='contact'>Contact our support team</p>
     </form>
    </div>
  )
}


export default RecoverPassword;