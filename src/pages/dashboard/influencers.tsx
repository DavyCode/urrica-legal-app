import Layout from "../../components/Layout/index";
import EmptyPage from "../../components/Empty-pages";
import withAuth from "../../utils/withAuth";

const Influencers = () => {
  return (
    <Layout>
      <EmptyPage message='Join Our Community of Influencers' description='Content Being Developed' />
    </Layout>
  );
};

export default withAuth(Influencers);
