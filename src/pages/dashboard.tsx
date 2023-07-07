import Analytics from "@/components/analytics";
import Sidebar from "@/components/sidebar";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";

const dashboard = () => {
  return (
    <div className="flex min-h-screen justify-center bg-default">
      <Sidebar />
      <Analytics />
    </div>
  );
};

export default dashboard;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });
  return !session
    ? { redirect: { destination: "/", permanent: false } }
    : { props: { session } };
};
