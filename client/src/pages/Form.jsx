
import axios from 'axios'
import Footer from '../components/Footer'
import SingUp_Form from '../components/SingUp_Form'
import '../css/form.css'
import { useState } from 'react'
const Form = () => {
  const [cred, setCred] = useState({
    first_name: '',
    last_name: '',
    email: "",
    mobile: "",
    message: ""
  })

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post('http://localhost:2004/api/listBuss', {
      first_name: cred.first_name,
      last_name: cred.last_name,
      email: cred.email,
      mobile: cred.mobile,
      message: cred.message,
    })
    console.log(response)
  }
  const handleChange = (e) => {
    setCred({...cred, [e.target.name]: e.target.value })
  }
  return (
    <>
      <div>
        <h1 className='formH1'>List Your Business On VenueHub</h1>
      </div>
      <form>
        <div className='formDiv'>
          <input className='formInput1'
            type="text"
            name="first_name"
            value={cred.first_name}
            onChange={handleChange}
            required
            placeholder='First Name' />
          <input className='formInput2'
            type="text"
            name="last_name"
            value={cred.last_name}
            onChange={handleChange}
            required
            placeholder='Last Name' />
        </div>
        <div className='formDiv'>
          <input className='formInput3'
            type="number"
            name="mobile"
            value={cred.mobile}
            onChange={handleChange}
            required
            placeholder='Mobile Number' />
          <input className='formInput4'
            type="email"
            name="email"
            value={cred.eamil}
            onChange={handleChange}
            required
            placeholder='Email Address' />
        </div>
        <div>
          <input className='textArea'
            type="textarea"
            name="message"
            value={cred.message}
            onChange={handleChange}
            required
            placeholder='Your Message' />
        </div>
        <div>
          <button className='formBtn' onClick={handleSubmit}>Submit Form</button>
        </div>
      </form>
      <SingUp_Form />
      <Footer />
    </>
  )
}

export default Form
