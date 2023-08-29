import Navbar from "../components/Navbar/Navbar";
import NavbarLogin from "../components/NavbarLogin/NavbarLogin";
import Carousel from "../components/Carousel/Carousel";
import Category from "../components/Category/Category";
import Card from "../components/Card/Card";
import NavbarSeller from "../components/NavbarSeller/NavbarSeller";

// const Home = () => {
//   const isLogin = localStorage.getItem("token_user");
//   const isSeller = localStorage.getItem("role_user");
//   if (!isLogin) {
//     return (
//       <>
//         <Navbar />
//         <Carousel />
//         <Category />
//         <Card />
//       </>
//     );
//   } else if (isLogin && isSeller === "seller") {
//     return (
//       <>
//         <NavbarSeller />
//         <Carousel />
//         <Category />
//         <Card />
//       </>
//     );
//   } else if (isLogin && isSeller === "customer") {
//     return (
//       <>
//         <NavbarLogin />
//         <Carousel />
//         <Category />
//         <Card />
//       </>
//     );
//   }
// };

// export default Home;

const Home = () => {
  const isLogin = localStorage.getItem("token_user");
  const isSeller = localStorage.getItem("role_user");
  if (!isLogin) {
    return (
      <>
        <Navbar />
        <Carousel />
        <Category />
        <Card />
      </>
    );
  } else {
    return (
      <>
        <NavbarLogin />
        <Carousel />
        <Category />
        <Card />
      </>
    );
  }
};

export default Home;
