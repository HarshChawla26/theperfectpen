'use client';
import { useState } from 'react';

const AdminComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [siteInfo, setSiteInfo] = useState({
    name: '',
    about: '',
  });

  const [uploadedPictures, setUploadedPictures] = useState([]);

  const [services, setServices] = useState(Array(10).fill(''));

  const handleSiteInfoChange = (e) => {
    setSiteInfo({
      ...siteInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handlePictureUpload = (e) => {
    const files = Array.from(e.target.files);
    setUploadedPictures([...uploadedPictures, ...files]);
  };

  const handlePictureDelete = (index) => {
    const updatedPictures = [...uploadedPictures];
    updatedPictures.splice(index, 1);
    setUploadedPictures(updatedPictures);
  };

  const handleServiceChange = (e, index) => {
    const updatedServices = [...services];
    updatedServices[index] = e.target.value;
    setServices(updatedServices);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform the login logic here, such as validating the entered credentials
    // If the credentials are correct, set the isLoggedIn state to true
    // For simplicity, let's assume the admin username is "admin" and password is "password"
    const username = e.target.username.value;
    const password = e.target.password.value;

    if (username === 'admin' && password === 'password') {
      setIsLoggedIn(true);
    } else {
      alert('Invalid credentials');
    }
  };

  if (!isLoggedIn) {
    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input type="text" name="username" placeholder="Username" required />
          <input type="password" name="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }

  return (
    <div>
      <h2>Site Information</h2>
      <div>
        <label htmlFor="name">Site Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={siteInfo.name}
          onChange={handleSiteInfoChange}
        />
      </div>
      <div>
        <label htmlFor="about">About:</label>
        <textarea
          id="about"
          name="about"
          value={siteInfo.about}
          onChange={handleSiteInfoChange}
        />
      </div>

      <h2>Uploaded Pictures</h2>
      <input type="file" multiple onChange={handlePictureUpload} />
      <div>
        {uploadedPictures.map((picture, index) => (
          <div key={index}>
            <img src={URL.createObjectURL(picture)} alt={`Uploaded ${index + 1}`} />
            <button onClick={() => handlePictureDelete(index)}>Delete</button>
          </div>
        ))}
      </div>

      <h2>Services Offered</h2>
      {services.map((service, index) => (
        <div key={index}>
          <input
            type="text"
            value={service}
            onChange={(e) => handleServiceChange(e, index)}
          />
        </div>
      ))}
    </div>
  );
};

export default AdminComponent;
