import Phones from '../components/login/Phones';
import LoginBox from '../components/login/LoginBox';
import SignUpBox from '../components/login/SignUpBox';
import GetAppBtn from '../components/login/GetAppBtn';

import appStoreBtn from '../assets/images/appstore-btn.png';
import googlePlayBtn from '../assets/images/googleplay-btn.png';

const Login = () => {
  document.title = 'Login • Instagram';

  return (
    <div className="flex mx-auto justify-center items-center grow">
      <div className="invisible md:visible md:w-[454px] h-[618px]">
        <Phones />
      </div>
      <div className="min-w-[350px] md:-ml-4">
        <div className="mb-2.5">
          <LoginBox />
        </div>
        <SignUpBox />
        <p className="text-[#262626] text-sm text-center my-5">Get the app.</p>
        <div className="flex">
          <div className="flex gap-2 mx-auto">
            <GetAppBtn btnImg={appStoreBtn} />
            <GetAppBtn btnImg={googlePlayBtn} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
