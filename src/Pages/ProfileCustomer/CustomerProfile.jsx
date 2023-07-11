import NavbarLogin from "../../components/NavbarLogin/NavbarLogin";
import SidebarCustomer from "../../components/SidebarCustomer/SidebarCustomer";
import ProfileContent from "./Content/ProfileContent";

const CustomerProfile = () => {
  return (
    <>
      <NavbarLogin />
      <main>
        <section>
          <p style={{ marginTop: 40 }} />
        </section>
        <div id="wrapper">
          <SidebarCustomer />
          <ProfileContent />
        </div>
      </main>
    </>
  );
};

export default CustomerProfile;
