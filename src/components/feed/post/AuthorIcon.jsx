const AuthorIcon = ({ icon }) => {
  return (
    <div className="ig-gradient-circle w-[42px] h-[42px]">
      <div className="w-[34px] h-[34px] rounded-full bg-slate-400 outline outline-[2px] outline-white">
        <img src={icon} alt="" className="rounded-full" />
      </div>
    </div>
  );
};

export default AuthorIcon;
