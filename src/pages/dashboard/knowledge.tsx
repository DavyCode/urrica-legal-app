import Layout from "../../components/Layout";
import EmptyPage from "../../components/Empty-pages";
import withAuth from "../../utils/withAuth";

const Knowledge = () => {
  return (
    <Layout>
      <EmptyPage message='Explore Our Knowledge Base' description='Updates Coming Shortly' />
    </Layout>
  );
};

export default withAuth(Knowledge);
