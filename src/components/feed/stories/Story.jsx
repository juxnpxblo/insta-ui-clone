const Story = ({ story }) => {
  return (
    <div className="text-center">
      <div className="ig-gradient-circle w-[64px] h-[64px] mb-1">
        <div
          className="w-[56px] h-[56px]
        rounded-full overflow-hidden outline outline-[2px] outline-white"
        >
          <img src={story.pic} alt="" className="min-h-full min-w-full" />
        </div>
      </div>
      <p className="text-xs">{story.name}</p>
    </div>
  );
};

export default Story;
