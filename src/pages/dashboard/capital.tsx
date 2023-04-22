import Layout from "../../components/Layout/index";
import EmptyPage from "../../components/Empty-pages/index";
import withAuth from "../../utils/withAuth";

const Capital = () => {
  return (
    <Layout>
      <EmptyPage message='Unlocking Financial Potential' />
    </Layout>
  );
};

export default withAuth(Capital);
