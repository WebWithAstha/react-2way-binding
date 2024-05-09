import { useState } from 'react'


function App() {
  // initializing the state variables -> 2 way binding
  const [name, setname] = useState('name')
  const [about, setabout] = useState('tell me about yourself')
  const [gender, setgender] = useState('female')
  const [city, setcity] = useState('mumbai')
  const [adult, setadult] = useState(false)

  // initializing the state variable array
  const [users, setusers] = useState([])

  const submitHandler = (e)=>{

      e.preventDefault()
      const newUser = {name,about,gender,city,adult}
      setname("Enter name")
      setabout("Tell me about yourself")
      setgender("female")
      setcity("mumbai")
      setadult(false)
      // adding new user to the users array
      setusers([...users,newUser])
  }

  // showing data/users in ui
  const listRender = users.map((user,i)=>{
    return(
    <div key={i}>
      <h3>Name: {user.name}</h3>
      <h3>About: {user.about}</h3>
      <h3>Gender: {user.gender}</h3>
      <h3>City: {user.city}</h3>
      <h3>Adult: {user.adult}</h3>
      <hr />
    </div>  
    )
  })

  return (
    <>
      <h1>React Form</h1>
      <form className='bg-rose-100 w-max p-6' onSubmit={submitHandler} action="">
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={(e)=>{setname(e.target.value)}} type="text" /><br /><br />
        <label htmlFor="email">Two words: </label>
        <textarea onChange={(e)=>setabout(e.target.value)} value={about} cols="20" rows="1"></textarea><br /><br />
        <label htmlFor="gender">gender:  </label>
        <label htmlFor="male"> Male</label>
        <input onChange={(e)=>setgender(e.target.value)} value='male' checked={gender === 'male' ?true:false} type="radio" />
        <label htmlFor="female">Female</label>
        <input onChange={(e)=>setgender(e.target.value)} value='female' checked={gender === 'female'?true:false} type="radio" /><br /><br />
        <label htmlFor="city">City: </label>
        <select defaultValue={city} onChange={e=>setcity(e.target.value)}  id="">
          <option value="mumbai">Mumbai</option>
          <option value="bhopal">Bhopal</option>
        </select><br /><br />
        <label htmlFor="age">Are you above 18? </label>
        <input value={adult} onClick={e=>setadult(e.target.checked)} checked={adult?true:false} type="checkbox" /><br /><br />
        <button >Submit</button>
      </form>
      {listRender}
    </>
  )
}

export default App
