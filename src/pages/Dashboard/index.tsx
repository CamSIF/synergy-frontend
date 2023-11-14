import FlexContainer from "src/components/FlexBox/FlexContainer";
import FlexCard from "src/components/FlexBox/FlexCard";
import Wrapper from "src/components/Wrapper";
import Header1 from "src/components/Title/Header1";
import Header2 from "src/components/Title/Header2";

export const Dashboard: React.FC<{}> = () => {
  return (
    <Wrapper>
      <Header1>Dashboard</Header1>
      <Header2>Overview</Header2>
      <FlexContainer>
        <FlexCard responsive={{ xs: 12, sm: 6, md: 4 }}>
          <div>Card 1</div>
        </FlexCard>
        <FlexCard responsive={{ xs: 12, sm: 6, md: 4 }}>
          <div>Card 2</div>
        </FlexCard>
        <FlexCard responsive={{ xs: 12, sm: 6, md: 4 }}>
          <div>Card 3</div>
        </FlexCard>
      </FlexContainer>
      <Header2>Details</Header2>
      <FlexContainer>
        <FlexCard responsive={{ xs: 12, sm: 12, md: 12 }}>
          <div>Card 1</div>
        </FlexCard>
        <FlexCard responsive={{ xs: 12, sm: 12, md: 6 }}>
          <div>Card 2</div>
        </FlexCard>
        <FlexCard responsive={{ xs: 12, sm: 12, md: 6 }}>
          <div>Card 3</div>
        </FlexCard>
      </FlexContainer>
    </Wrapper>
  );
};

export default Dashboard;
