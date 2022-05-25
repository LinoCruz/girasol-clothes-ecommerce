import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: #5f7553;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

export const Announcements = () => {
  return (
    <Container>
      We are doing free shipping to anywhere without minimun cost!
    </Container>
  );
};
