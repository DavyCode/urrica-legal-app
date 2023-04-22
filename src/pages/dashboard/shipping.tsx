import Layout from "../../components/Layout";
import EmptyPage from "../../components/Empty-pages";
import withAuth from "../../utils/withAuth";

const Shipping = () => {
  return (
    <Layout>
      <EmptyPage message='Logistics Support Services' description='Content Being Developed' />
    </Layout>
  );
};

export default withAuth(Shipping);
