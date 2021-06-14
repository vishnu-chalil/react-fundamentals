import { useContext, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import AuthContext from '../../store/auth-context';
import classes from './ProfileForm.module.css';

const ProfileForm = () => {

  const authCtx = useContext(AuthContext);

  const newInputPasswordRef = useRef();

  const history =  useHistory();


  const submitHandler = event=>{
    event.preventDefault();
    const enteredNewPassword = newInputPasswordRef.current.value;

    fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAMAwV9VtwHqgKRuce2uYsrhSEGA1me6iM',
    {method:'POST',
    body: JSON.stringify({
      idToken:authCtx.token,
      password:enteredNewPassword,
      returnSecureToken:false
    }),
    headers:{'Content-Type': 'application/json'}

  } 
    ).then(res=>{

        history.replace('/');
    })

  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' minLength='7' ref={newInputPasswordRef}/>
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
