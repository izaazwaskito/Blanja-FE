import NavbarLogin from "../../components/NavbarLogin/NavbarLogin";
import SidebarCustomer from "../../components/SidebarCustomer/SidebarCustomer";
import OrderContent from "./Content/OrderContent";

const CustomerOrder = () => {
  return (
    <>
      <>
        <NavbarLogin />
        <main>
          <section>
            <div className="row m-0 metropolis">
              <SidebarCustomer />
              <OrderContent />
            </div>
          </section>
        </main>
      </>
    </>
  );
};

export default CustomerOrder;
