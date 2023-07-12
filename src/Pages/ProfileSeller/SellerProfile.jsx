import NavbarLogin from "../../components/NavbarLogin/NavbarLogin";
import NavbarSeller from "../../components/NavbarSeller/NavbarSeller";
import SidebarSeller from "../../components/SidebarSeller/SidebarSeller";
import SellerProfilContent from "./Content/SellerProfilContent";
const SellerProfile = () => {
  return (
    <>
      <NavbarSeller />
      <main>
        <section>
          <div className="row m-0 metropolis">
            <SidebarSeller />
            <SellerProfilContent />
          </div>
        </section>
      </main>
    </>
  );
};

export default SellerProfile;
