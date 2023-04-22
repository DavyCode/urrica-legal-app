import Layout from "../../components/Layout";
import EmptyPage from "../../components/Empty-pages";
import withAuth from "../../utils/withAuth";

const Order = () => {
  return (
    <Layout>
      <EmptyPage message='Order Fulfillment Services' description='Content Being Developed' />
    </Layout>
  );
};

export default withAuth(Order);
