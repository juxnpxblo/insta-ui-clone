const AccountStats = () => {
  return (
    <div className="flex text-[#262626] mb-5">
      <p className="mr-10">
        <span className="font-semibold">531</span> posts
      </p>
      <p className="mr-10 cursor-pointer">
        <span className="font-semibold">2m</span> followers
      </p>
      <p className="cursor-pointer">
        <span className="font-semibold">253</span> following
      </p>
    </div>
  );
};

export default AccountStats;
