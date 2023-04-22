import Layout from "../../components/Layout";
import EmptyPage from "../../components/Empty-pages";
import withAuth from "../../utils/withAuth";

const Social = () => {
  return (
    <Layout>
      <EmptyPage message='Stay Tuned' description='Check Back Later' />
    </Layout>
  );
};

export default withAuth(Social);
