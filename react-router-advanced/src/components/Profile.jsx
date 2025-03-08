import { Outlet, Link } from "react-router-dom";

const Profile = () => (
  <div>
    <h2>Profile Page</h2>
    <nav>
      <Link to="details">Profile Details</Link> | 
      <Link to="settings">Profile Settings</Link>
    </nav>
    <Outlet /> {"Routes", "Route", "ProfileDetails", "ProfileSettings"}
  </div>
);

export default Profile;
