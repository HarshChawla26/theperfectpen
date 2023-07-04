"use client";
import { useEffect, useState } from "react";
import "@styles/admin.css";

const AdminPanel = () => {
  const [isLogin, setIsLogin] = useState(true);

  const [data, setdata] = useState({
    username: "",
    password: "",
  });

  // const handleLogin = () => {
  //   setIsLogin(true);
  // };

  useEffect(() => {}, [isLogin]);

  const handlLoginInputChange = (e) => {
    const { name, value } = e.target;

    setdata({
      ...data,
      [name]: value,
    });
  };

  const handleLogout = () => {
    setIsLogin(false);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform the login logic here, such as validating the entered credentials
    // If the credentials are correct, set the isLoggedIn state to true
    // For simplicity, let's assume the admin username is "admin" and password is "password"

    setIsLogin(true);

    // if (username === 'admin' && password === 'password') {
    // } else {
    //   alert('Invalid credentials');
    // }
  };

  const [websiteInfo, setWebsiteInfo] = useState({
    websiteName: "",
    ownerName: "",
    ownerEmail: "",
    about: ''
  });

  const [pictures, setPictures] = useState([
    { id: 1, imageURL: "/path/to/image1.jpg" },
    { id: 2, imageURL: "/path/to/image2.jpg" },
    // Add more pictures as needed
  ]);

  const [services, setServices] = useState([
    {
      id: 1,
      name: "Service 1",
      imageURL: "/path/to/service1.jpg",
      desc: "Description of Service 1",
    },
    {
      id: 2,
      name: "Service 2",
      imageURL: "/path/to/service2.jpg",
      desc: "Description of Service 2",
    },
    // Add more services as needed
  ]);

  const [aboutMe, setAboutMe] = useState("About me paragraph");

  const [termsOfService, setTermsOfService] = useState("Terms of service");

  const handleInputChange = (e, section) => {
    const { name, value } = e.target;
    switch (section) {
      case "websiteInfo":
        setWebsiteInfo((prevState) => ({ ...prevState, [name]: value }));
        break;
      case "pictures":
        setPictures((prevState) =>
          prevState.map((pic) =>
            pic.id === Number(name) ? { ...pic, imageURL: value } : pic
          )
        );
        break;
      case "services":
        const [serviceId, field] = name.split("_");
        setServices((prevState) =>
          prevState.map((service) =>
            service.id === Number(serviceId)
              ? { ...service, [field]: value }
              : service
          )
        );
        break;
      case "aboutMe":
        setAboutMe(value);
        break;
      case "termsOfService":
        setTermsOfService(value);
        break;
      default:
        break;
    }
  };

  if (!isLogin) {
    return (
      <div className="admin-container bg-prim">
        <div className=" bg-hglt flex-col login-form">
          <h2 className="md:text-3xl text-sec mb-10">Login</h2>
          <form onSubmit={handleLogin} className="md:w-2/5 ">
            <input
              onChange={handlLoginInputChange}
              value={data.username}
              type="text"
              name="username"
              placeholder="Username"
              required
            />
            <input
              onChange={handlLoginInputChange}
              value={data.password}
              type="password"
              name="password"
              placeholder="Password"
              required
            />
            <button
              type="submit"
              onClick={handleLogin}
              className="text-sec mx-auto btn-prim-outline border border-sec rounded-md hover:bg-sec hover:text-prim"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center bg-prim text-sec pt-[9%]">
      <h1 className="text-4xl mb-4"> Admin Panel</h1>
      <button onClick={handleLogout} className="text-sec mx-auto btn-prim-outline border border-sec rounded-md hover:bg-sec hover:text-prim">
        Logout
      </button>
      <div className="w-3/5 flex flex-col items-center h-96 bg-hglt my-5 " >
        <h2 className="text-3xl mt-6">Website Info</h2>
        <div className="w-4/5 inf-box ">
          <label className="label">Website Name:</label>
          <input className="input"
            type="text"
            name="websiteName"
            value={websiteInfo.websiteName}
            onChange={(e) => handleInputChange(e, "websiteInfo")}
            />
        </div>
        <div className="w-4/5 inf-box ">
          <label className="label">Owner Name:</label>
          <input className="input"
            type="text"
            name="ownerName"
            value={websiteInfo.ownerName}
            onChange={(e) => handleInputChange(e, "websiteInfo")}
            />
        </div>
        <div className="w-4/5 inf-box">
          <label className="label">Owner Email:</label>
          <input className="input"
            type="email"
            name="ownerEmail"
            value={websiteInfo.ownerEmail}
            onChange={(e) => handleInputChange(e, "websiteInfo")}
            />
        </div>
        <div className="w-4/5 inf-box">
          <label className="label">About Me</label>
          <textarea className="textarea"
            name="about"
            value={websiteInfo.about}
            onChange={(e) => handleInputChange(e, "websiteInfo")}
          />
        </div>
        <button className="text-sec mx-auto btn-prim-outline border border-sec rounded-md hover:bg-sec hover:text-prim">
          Save Changes
        </button>
      </div>
 
   {/*   <div className="w-3/5 flex flex-col items-center h-96 bg-hglt my-5 " >
        <h2 className="text-3xl mt-6">Pictures</h2>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {pictures.map((pic) => (
            <div
              key={pic.id}
              style={{
                flex: "0 0 50%",
                padding: "5px",
                boxSizing: "border-box",
              }}
            >
              <img src={pic.imageURL} alt="Picture" />
              <input
                type="text"
                name={pic.id}
                value={pic.imageURL}
                onChange={(e) => handleInputChange(e, "pictures")}
              />
              <button
                style={{
                  backgroundColor: "#6c1c2b",
                  color: "#f4e7de",
                  marginTop: "10px",
                }}
              >
                Save Picture
              </button>
            </div>
          ))}
        </div>
      </div> 

       <div className="w-3/5 flex flex-col h-96 bg-hglt my-5 " >
        <h2>Services</h2>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {services.map((service) => (
            <div
              key={service.id}
              style={{
                flex: "0 0 50%",
                padding: "5px",
                boxSizing: "border-box",
              }}
            >
              <h3>{service.name}</h3>
              <img src={service.imageURL} alt="Service" />
              <label>Name:</label>
              <input
                type="text"
                name={`${service.id}_name`}
                value={service.name}
                onChange={(e) => handleInputChange(e, "services")}
              />
              <label>Image URL:</label>
              <input
                type="text"
                name={`${service.id}_imageURL`}
                value={service.imageURL}
                onChange={(e) => handleInputChange(e, "services")}
              />
              <label>Description:</label>
              <input
                type="text"
                name={`${service.id}_desc`}
                value={service.desc}
                onChange={(e) => handleInputChange(e, "services")}
              />
              <button
                style={{
                  backgroundColor: "#6c1c2b",
                  color: "#f4e7de",
                  marginTop: "10px",
                }}
              >
                Save Service
              </button>
            </div>
          ))}
        </div>
      </div> */}

          
      <div className="w-3/5 flex flex-col items-center h-96 bg-hglt my-5 ">
        <h2 className="text-3xl mt-6">Terms of Service</h2>
        {/* <div className="w-4/5 inf-box "> */}
          <textarea 
            className="my-6 textarea"
           rows='10'
           cols='10'
            name="termsOfService"
            value={termsOfService}
            onChange={(e) => handleInputChange(e, "termsOfService")}
            />
        {/* </div> */}
        <button className="text-sec mx-auto btn-prim-outline border border-sec rounded-md hover:bg-sec hover:text-prim">
          Save Changes
        </button>
      </div>

      
    </div>
  );
};

export default AdminPanel;
