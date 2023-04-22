import Layout from "../../components/Layout";
import EmptyPage from "../../components/Empty-pages";
import withAuth from "../../utils/withAuth";

const Branding = () => {
  return (
    <Layout>
      <EmptyPage message='Creating a Strong Brand Identity' description='Make Your Branding Page Stand Out' />
    </Layout>
  );
};

export default withAuth(Branding);
