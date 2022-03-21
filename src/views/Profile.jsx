import Navbar from '../components/shared/Navbar';
import Header from '../components/profile/header/Header';
import Posts from '../components/profile/posts/Posts';

const Profile = () => {
  document.title =
    'MAYA THE SAMOYED (@mayapolarbear) profile on Instagram • 534 posts';

  return (
    <>
      <Navbar />
      <Header />
      <Posts />
    </>
  );
};

export default Profile;
