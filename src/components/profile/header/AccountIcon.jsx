import profilePic from '../../../assets/images/profile-pic.jpg';

const AccountIcon = () => {
  return (
    <div className="ig-gradient-circle w-[166px] h-[166px]">
      <div className="w-[150px] h-[150px] overflow-hidden rounded-full outline outline-[5px] outline-[#fafafa]">
        <img src={profilePic} alt="" className="min-h-full min-w-full" />
      </div>
    </div>
  );
};

export default AccountIcon;
