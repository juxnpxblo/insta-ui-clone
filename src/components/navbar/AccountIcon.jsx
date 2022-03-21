import profilePic from '../../assets/images/profile-pic.jpg';

const AccountIcon = () => {
  return (
    <button>
      <div className="bg-[#5c5c5c] w-6 h-6 rounded-full">
        <a href="/profile">
          <img src={profilePic} alt="" className="rounded-full" />
        </a>
      </div>
    </button>
  );
};

export default AccountIcon;
