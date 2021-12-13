import styled from 'styled-components';

const Home = () => {
  return (
    <Container>
      <Section>
        <h5>
          <a>Hiring in a hurry? - </a>
        </h5>
        <p>
          Find talented pros in record time with Upwork and keep business
          moving.
        </p>
      </Section>
    </Container>
  );
};

const Container = styled.div`
  max-width: 100%;
  padding-top: 52px;
`;

const Section = styled.section`
  box-sizing: content-box;
  display: flex;
  min-height: 50px;
  padding: 16px 0;
  text-align: center;
  text-decoration: underline;
  justify-content: center;
  h5 {
    color: #0a66c2;
    font-size: 14px;
    a {
      font-weight: 700;
    }
  }
  p {
    color: #434649;
    font-size: 14px;
    font-weight: 600;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 5px;
  }
`;

export default Home;
