import './ProfileCard.css'

const ProfileCard = (props) => {
  return (
    <div className="card">
      {console.log(props)}  
      <img src={props.src} alt="profile photo" />
      <h1>{props.name}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, sed.</p>
      <button>View Profile</button>
      
    </div>
  )
}

export default ProfileCard