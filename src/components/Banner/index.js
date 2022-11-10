import banner from './Banner.css';
// This is a Index Component: Kind of sample component to image on React
const Banner = () => {
  // This is the JSX
  return (
      <header className="banner">
        <img src='/images/banner.png' alt="The main banner official of page" />
      </header>
  );
}

export default Banner;