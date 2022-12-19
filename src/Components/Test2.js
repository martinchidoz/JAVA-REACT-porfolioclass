import React, {useState} from 'react'

function Test2() {
 
  const [email, setEmail] = useState("")
  const [pwd, setpwd] = useState("")

  function handleClick(){
    alert(email)
    alert(pwd)
  }

  return (
    <form >

      <div>

        <label htmlFor="">email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" />
      </div>

      <div>
        <label htmlFor="">password</label>
        <input type="password" value={pwd} onChange={(e) => setpwd(e.target.value)} className="form-control" />
      </div>

      <button type="button" onClick={handleClick}>submit</button>
    </form>
  )
}

export default Test2