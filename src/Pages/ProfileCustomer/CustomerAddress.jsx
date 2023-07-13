import NavbarLogin from "../../components/NavbarLogin/NavbarLogin";
import SidebarCustomer from "../../components/SidebarCustomer/SidebarCustomer";
import AddressContent from "./Content/AddressContent";
import ModalCreateAddress from "../../components/ModalAddress/ModalCreateAddress";

const CustomerAddress = () => {
  return (
    <>
      <NavbarLogin />
      <main>
        <section>
          <div className="row m-0 metropolis">
            <SidebarCustomer />
            <AddressContent />
          </div>
        </section>
        <ModalCreateAddress />
      </main>
    </>
  );
};
export default CustomerAddress;
