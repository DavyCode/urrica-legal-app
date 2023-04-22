import Layout from "../../components/Layout";
import EmptyPage from "../../components/Empty-pages";
import withAuth from "../../utils/withAuth";

const Notes = () => {
  return (
    <Layout>
      <EmptyPage message='Stay Organized' description='Content Being Developed' />
    </Layout>
  );
};

export default withAuth(Notes);
