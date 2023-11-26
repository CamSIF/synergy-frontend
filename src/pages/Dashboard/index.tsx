import Wrapper from "src/components/Wrapper";
import Header1 from "src/components/Title/Header1";

import Overview from "src/pages/Dashboard/Overview";
import Details from "src/pages/Dashboard/Details";

export const Dashboard: React.FC<{}> = () => {
  return (
    <Wrapper>
      <Header1>Dashboard</Header1>
      <Overview />
      <Details />
    </Wrapper>
  );
};

export default Dashboard;
