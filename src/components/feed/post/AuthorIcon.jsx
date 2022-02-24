const AuthorIcon = ({ icon }) => {
  return (
    <div className="ig-gradient-circle w-[42px] h-[42px]">
      <div className="w-[34px] h-[34px] overflow-hidden rounded-full bg-slate-400 outline outline-[2px] outline-white">
        <img src={icon} alt="" className="min-h-full min-w-full" />
      </div>
    </div>
  );
};

export default AuthorIcon;
