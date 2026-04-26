import './app.css'
import ProfileCard from "./components/ProfileCard"

const App = () => {
  
  const user1 = "Piyush Gupta"
  const user2 = "Nidhi Gupta"
  const user3 = "Asha Gupta"

  return (
    <div className="app">
        <ProfileCard name ={user1} src = {"https://plus.unsplash.com/premium_photo-1774271492663-a7d50adbed56?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMwfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D"}/>
        <ProfileCard name ={user2} src = {"https://plus.unsplash.com/premium_photo-1775450651387-2a2085698dad?q=80&w=781&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}/>
        <ProfileCard name ={user3} src = {"https://images.unsplash.com/photo-1692607431259-951c39946cbf?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQzfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D"}/>
    </div>
  )
}

export default App