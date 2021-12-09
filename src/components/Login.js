import styled from 'styled-components';

const Login = () => {
  return (
    <div>
      <Container>
        <Nav>
          <a href="/">
            <img src="/images/login-logo.svg" alt="linkedin" />
          </a>
          <div>
            <Join>Join Now</Join>
            <SignIn>Sign In</SignIn>
          </div>
        </Nav>
      </Container>
    </div>
  );
};

const Container = styled.div`
  padding: 0px;
`;
const Nav = styled.nav`
  align-items: center;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  margin: auto;
  max-width: 1128px;
  padding: 12px 0 16px;
  position: relative;

  & > a {
    height: 34px;
    width: 135px;

    @media (max-width: 768px) {
      padding: 0 5px;
    }
  }
`;

const Join = styled.a`
  border-radius: 4px;
  color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  font-size: 16px;
  margin-right: 12px;
  padding: 10px;
  text-decoration: none;
  transition: all 200ms;

  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    color: rgba(0, 0, 0, 0.9);
    text-decoration: none;
  }
`;

const SignIn = styled.a`
  background-color: #fff;
  border-radius: 24px;
  box-shadow: inset 0 0 0 1px #0a66c2;
  cursor: pointer;
  color: #0a66c2;
  font-size: 16px;
  font-weight: 600;
  line-height: 40px;
  padding: 10px 24px;
  text-align: center;
  transition: all 160ms;

  &:hover {
    background-color: rgba(112, 181, 249, 0.15);
    color: #0a66c2;
    text-decoration: none;
  }
`;

export default Login;
