import Layout from "../../components/Layout";
import EmptyPage from "../../components/Empty-pages";
import withAuth from "../../utils/withAuth";

const Help = () => {
  return (
    <Layout>
      <EmptyPage message='Help and Support' description='Content Being Added Shortly' />
    </Layout>
  );
};

export default withAuth(Help);
