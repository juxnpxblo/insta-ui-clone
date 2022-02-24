const LoginBtn = ({ username, password }) => {
  return (
    <input
      type="submit"
      value="Log In"
      className={`text-sm font-semibold text-white w-full py-[5px] rounded-[4px] ${
        username && password ? 'bg-[#0095f6] cursor-pointer' : 'bg-[#b2dffc]'
      }`}
      onClick={(e) => e.preventDefault()}
    ></input>
  );
};

export default LoginBtn;
