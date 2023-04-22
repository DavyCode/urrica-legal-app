import Layout from "../../components/Layout";
import EmptyPage from "../../components/Empty-pages";
import withAuth from "../../utils/withAuth";

const Billing = () => {
  return (
    <Layout>
      <EmptyPage message='Billing Overview' description='Billing page' />
    </Layout>
  );
};

export default withAuth(Billing);
