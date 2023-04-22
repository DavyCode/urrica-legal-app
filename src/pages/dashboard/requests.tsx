import Layout from "../../components/Layout";
import EmptyPage from "../../components/Empty-pages";
import withAuth from "../../utils/withAuth";

const Requests = () => {
  return (
    <Layout>
      <EmptyPage message='Review Request Page' description='Content Being Developed' />
    </Layout>
  );
};

export default withAuth(Requests);
