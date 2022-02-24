import WhiteBox from '../shared/WhiteBox';

const SignUpBox = () => {
  return (
    <WhiteBox>
      <p className="text-sm mx-auto my-5 text-center">
        Don't have an account?{' '}
        <a href="#" className="font-semibold text-[#0095f6]">
          Sign up
        </a>
      </p>
    </WhiteBox>
  );
};

export default SignUpBox;
