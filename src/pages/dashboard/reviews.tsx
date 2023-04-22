import Layout from "../../components/Layout";
import EmptyPage from "../../components/Empty-pages";
import withAuth from "../../utils/withAuth";

const Reviews = () => {
  return (
    <Layout>
      <EmptyPage message='Feedback and Reviews' description='Content Being Developed' />
    </Layout>
  );
};

export default withAuth(Reviews);
