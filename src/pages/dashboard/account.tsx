import React from "react";
import Layout from "../../components/Layout/index";
import withAuth from "../../utils/withAuth";
import EmptyPage from "../../components/Empty-pages/index";

const Account = () => {
  return (
    <Layout>
      <EmptyPage
        message='Looks like your account page is empty'
        description='Getting Started: Setting Up Your Account for Full Platform Access'
      />
    </Layout>
  );
};

export default withAuth(Account);
