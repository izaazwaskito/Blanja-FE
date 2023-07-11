import NavbarLogin from "../../components/NavbarLogin/NavbarLogin";
import SidebarCustomer from "../../components/SidebarCustomer/SidebarCustomer";
import OrderContent from "./Content/OrderContent";

const CustomerOrder = () => {
  return (
    <>
      <NavbarLogin />
      <main>
        <section>
          <p style={{ marginTop: 40 }} />
        </section>
        <div id="wrapper">
          <SidebarCustomer />
          <OrderContent />
        </div>
      </main>
    </>
  );
};

export default CustomerOrder;
