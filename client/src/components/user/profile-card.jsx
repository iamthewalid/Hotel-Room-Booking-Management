import { useUser } from '../../store';

const ProfileCard = () => {
  const user = useUser((state) => state.user);
  console.log('🚀 ~ file: profile-card.jsx:5 ~ ProfileCard ~ user:', user);

  return (
    <div className="user-profile">
      <h1>My Profile</h1>

      <br />

      <div className="user-profile__picture">
        {user?.image && <img src={user?.image} alt="" />}
      </div>

      <p>
        <b>Name :</b> {user.name}
      </p>
      <p>
        <b>Email :</b> {user.email}
      </p>
      <p>
        <b>isAdmin :</b> {user.isAdmin ? 'YES' : 'NO'}
      </p>
    </div>
  );
};

export default ProfileCard;
