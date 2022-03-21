import WhiteBox from '../components/shared/WhiteBox';
import MenuItem from '../components/menu/MenuItem';

const Menu = () => {
  const menuItems = [
    { path: 'login', text: 'Login' },
    { path: 'feed', text: 'Feed' },
    { path: 'profile', text: 'Profile' },
  ];

  document.title = 'Menu • Instagram';

  return (
    <>
      <div className="text-[#262626] font-extralight w-min mx-auto h-full flex">
        <div className="self-center">
          <WhiteBox>
            <div className="flex flex-col gap-2 py-4 px-8 ">
              {menuItems.map(({ path, text }) => (
                <MenuItem key={path} path={path} text={text} />
              ))}
            </div>
          </WhiteBox>
        </div>
      </div>
    </>
  );
};

export default Menu;
