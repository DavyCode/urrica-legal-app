import Layout from "../../components/Layout";
import withAuth from "../../utils/withAuth";
import EmptyPage from "../../components/Empty-pages/index";

const Dashboard = () => {
  return (
    <Layout>
      <EmptyPage
        message='Dashboard'
        description='Easily personalize it by adding widgets that matter to you.'
      />
    </Layout>
  );
};

export default withAuth(Dashboard);
