import Layout from "../../components/Layout";
import EmptyPage from "../../components/Empty-pages";
import withAuth from "../../utils/withAuth";

const Newletter = () => {
  return (
    <Layout>
      <EmptyPage message='Get the Latest News and Updates' description='Content Being Developed' />
    </Layout>
  );
};

export default withAuth(Newletter);
