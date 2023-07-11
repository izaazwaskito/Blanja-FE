import NavbarLogin from "../../components/NavbarLogin/NavbarLogin";
import SidebarSeller from "../../components/SidebarSeller/SidebarSeller";
import SellerProfilContent from "./Content/SellerProfilContent";
const SellerProfile = () => {
  return (
    <>
      <NavbarLogin />
      <main className="metropolis">
        <section>
          <p style={{ marginTop: 40 }} />
        </section>
        <div id="wrapper">
          <SidebarSeller />
          <SellerProfilContent />
        </div>
      </main>
    </>
  );
};

export default SellerProfile;
