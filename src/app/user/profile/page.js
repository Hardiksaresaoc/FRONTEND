import axios from "axios";

export default function page() {
  const { user } = useAuth("NORMAL_USER_ROLE"); // Example allowed roles

  const imagename = user.profile;
  const data = axios.get(
    `http://localhost:3001/user/profile-image/${imagename}`
  );
  return (
    <div>
      <img src={data.data} />
    </div>
  );
}
