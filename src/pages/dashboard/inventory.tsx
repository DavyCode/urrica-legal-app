import Layout from "../../components/Layout";
import EmptyPage from "../../components/Empty-pages";
import withAuth from "../../utils/withAuth";

const Inventory = () => {
  return (
    <Layout>
      <EmptyPage message='Simplify Your Inventory Management' description='Content Being Developed' />
    </Layout>
  );
};

export default withAuth(Inventory);
