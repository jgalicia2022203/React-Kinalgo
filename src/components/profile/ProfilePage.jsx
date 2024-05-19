import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './profilePage.css';

function ProfileForm() {
  const [userData, setUserData] = useState({
    username: '',
    address: '',
    password: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Updating profile with the following data:', userData);
    // Aquí agregarías la lógica para actualizar el perfil
  };

  const handleDelete = () => {
    console.log('Profile deleted');
    // Aquí agregarías la lógica para eliminar el perfil
  };

  return (
    
    
<div>
    <Navbar />  
      <div className="profile-form" style={{ fontFamily: 'Bebas Neue' }}>
        <h2>Your Account</h2>
        <form className='Formulario' onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">User Name</label>
            <input className='input' type="text" id="username" name="username" value={userData.username} onChange={handleChange} />
          </div>
          <div className="input-group">
            <label htmlFor="address">Address</label>
            <input type="text" id="address" name="address" value={userData.address} onChange={handleChange} />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" value={userData.password} onChange={handleChange} />
          </div>
          <button type="submit">Update Profile</button>
          <button type="button" onClick={handleDelete}>Delete Profile</button>
        </form>
      </div>
    </div>
  );
}

export default ProfileForm;
