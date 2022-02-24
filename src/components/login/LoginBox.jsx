import { useRef, useState } from 'react';

import logo from '../../assets/images/logo-login.png';

import WhiteBox from '../../components/shared/WhiteBox';
import LoginInput from './LoginInput';
import LoginBtn from './LoginBtn';
import PixelLine from './PixelLine';

import { AiFillFacebook } from 'react-icons/ai';

const LoginBox = () => {
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [showingPassw, setShowingPassw] = useState(false);

  const passwInputRef = useRef(null);

  return (
    <WhiteBox>
      <div className="px-10 flex flex-col items-center">
        <img
          src={logo}
          alt=""
          className="mx-auto pt-7 mb-9 select-none drag-none"
        />
        <form className="flex flex-col w-full">
          <LoginInput
            type="text"
            value={username}
            setValue={setUsername}
            description="Phone number, username, or email"
          />
          <LoginInput
            type="password"
            value={password}
            setValue={setPassword}
            description="Password"
            ref={passwInputRef}
          >
            {password && (
              <button
                className="absolute top-[8px] right-[8px] text-[#262626] active:text-[#6b6b6b] text-sm font-semibold"
                onClick={(e) => {
                  e.preventDefault();
                  if (showingPassw) {
                    passwInputRef.current.type = 'password';
                    setShowingPassw(false);
                  } else {
                    passwInputRef.current.type = 'text';
                    setShowingPassw(true);
                  }
                }}
              >
                {showingPassw ? 'Hide' : 'Show'}
              </button>
            )}
          </LoginInput>
          <div className="mb-3.5 mt-2 w-full">
            <LoginBtn username={username} password={password} />
          </div>
        </form>
        <div className="w-full flex items-center gap-5 mb-7">
          <PixelLine />
          <span className="text-sm text-[#8e8e8e] font-semibold">OR</span>
          <PixelLine />
        </div>
        <div className="mb-5">
          <p className="flex items-center text-[#385185] text-sm font-semibold cursor-pointer">
            <AiFillFacebook size="21px" /> Log In with Facebook
          </p>
        </div>
        <span className="cursor-pointer text-xs text-[#00376b] mb-5">
          Forgot password?
        </span>
      </div>
    </WhiteBox>
  );
};

export default LoginBox;
