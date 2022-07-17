import React, { useState } from 'react'
import './Profile.css'


function Profile() {

    const [firstName, setName] = useState('')
    

  return (
    <div className='Profile'>
      <div className='top-container'>
        <div className='image-container'>
          <img src="" alt='' />
        </div>
        <div>
            Change Profile Picture
        </div>
      </div>

      <div className='second-container'>
        <h2></h2>
        <p></p>
      </div>
      </div>
  )
}

export default Profile;