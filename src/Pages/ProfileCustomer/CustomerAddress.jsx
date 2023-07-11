import NavbarLogin from "../../components/NavbarLogin/NavbarLogin";
import SidebarCustomer from "../../components/SidebarCustomer/SidebarCustomer";
import AddressContent from "./Content/AddressContent";

const CustomerAddress = () => {
  return (
    <>
      <NavbarLogin />
      <main>
        <section>
          <p style={{ marginTop: 40 }} />
        </section>
        <div id="wrapper">
          <SidebarCustomer />
          <AddressContent />
        </div>
      </main>
    </>
  );
};
export default CustomerAddress;
