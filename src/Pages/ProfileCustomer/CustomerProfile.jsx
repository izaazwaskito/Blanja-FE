import NavbarLogin from "../../components/NavbarLogin/NavbarLogin";
import SidebarCustomer from "../../components/SidebarCustomer/SidebarCustomer";
import ProfileContent from "./Content/ProfileContent";

const CustomerProfile = () => {
  return (
    <>
      <>
        <NavbarLogin />
        <main>
          <section>
            <div className="row m-0 metropolis">
              <SidebarCustomer />
              <ProfileContent />
            </div>
          </section>
        </main>
      </>
    </>
  );
};

export default CustomerProfile;
