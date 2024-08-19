
import { useEffect, useState } from 'react'
import axios from 'axios'
import '../css/signup_form.css'
// import Alert from '../components/alert.jsx'
const SingUp_Form = () => {
  const [cred, setCred] = useState({
    fname: '',
    lname: '',
    email: '',
    password: ''
  })
  const [err, setErr] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (emptyField()) {
      setErr(true)
    } else {
      const response = await axios.post('http://localhost:2004/api//auth/signup', {
        first_name: cred.fname,
        last_name: cred.lname,
        email: cred.email,
        password: cred.password,
      })
      console.log(response)
      setCred({
        fname: '',
        lname: '',
        email: '',
        password: '',
      })
      alert("success full sign up")
      setErr(false)
    }
  }

  useEffect(() => {
    if(err){
      setTimeout(() => {
        setErr(false)
      }, 3000);
    }
  }, [err])

  const handleChange = (e) => {
    setCred({ ...cred, [e.target.name]: e.target.value })
  }

  const emptyField = () => {
    for (const field in cred) {
      if (cred[field] === "") {
        return true
      }
    }
    return false;
  }
  console.log(emptyField())

  return (
    <>
      <div className='SformdivD'>
        <div>
          <h1 className='SformH1'>Subscribe To Our News Letter</h1>
          <p className='singup_formP'>Subscribe to our newsletter to get recent venue updates, news, promotions, and discounts.</p>
        </div>
        <form>
          <div className='SformDiv'>
            <div>

              <input className='SformInput1'
                type="text"
                name='fname'
                value={cred.fname}
                onChange={handleChange}
                placeholder='First Name'
              />
              <div className={`${err ? '' : 'hidden'}  text-xs text-red-500 ml-20 mt-1`}>Filled required field</div>
            </div>
            <div>
              <input className='SformInput2'
                type="text"
                name='lname'
                value={cred.lname}
                onChange={handleChange}
                placeholder='Last Name' />
              <div className={`${err ? '' : 'hidden'}  text-xs text-red-500 ml-5 mt-1`}>Filled required field</div>
            </div>
          </div>
          <div className='SformDiv'>
            <div>
              <input
                placeholder="Email"
                id="email"
                type="text"
                name="email"
                value={cred.email}
                onChange={handleChange}
                className='peer SformInput3'
                pattern="[^\s@]+@[^\s@]+\.[^\s@]+$"
                autoComplete="username"
              />
              <div className="hidden text-xs text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block ml-20 my-1">Please enter a valid email</div>
              <div className={`${err ? '' : 'hidden'}  text-xs text-red-500 ml-20 mt-1`}>Filled required field</div>
            </div>

            <div>
              <input className='peer SformInput4'
                type="password"
                name='password'
                value={cred.password}
                onChange={handleChange}
                placeholder='Password'
                autoComplete="current-password"
                pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$"
              />
              <div className="hidden text-xs text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block ml-5 my-1">Please enter a valid Password</div>
              <div className={`${err ? '' : 'hidden'}  text-xs text-red-500 ml-5 mt-1`}>Filled required field</div>
            </div>
          </div>

          <div>
            <button className='SformBtn' onClick={handleSubmit}>Sign Up</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default SingUp_Form


