import WhiteBox from './WhiteBox';

const Footer = () => {
  return (
    <footer className="text-[#262626]">
      <WhiteBox>
        <div className="flex justify-center">
          <p className="py-3">
            Made with ❤️ by{' '}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/juxnpxblo"
              className="font-medium"
            >
              juxnpxblo
            </a>
          </p>
        </div>
      </WhiteBox>
    </footer>
  );
};

export default Footer;
