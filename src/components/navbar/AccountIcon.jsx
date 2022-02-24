const AccountIcon = () => {
  const userLogged = '';

  const profilePic = '';

  return (
    <a href={userLogged}>
      <div className="bg-[#5c5c5c] w-6 h-6 rounded-full">
        <img src={profilePic} alt="" className="rounded-full" />
      </div>
    </a>
  );
};

export default AccountIcon;
