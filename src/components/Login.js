import styled from 'styled-components';
import { connect } from 'react-redux';
import { signInApi } from '../actions';
import { Redirect } from 'react-router-dom';

const Login = (props) => {
  return (
    <Container>
      {props.user && <Redirect to="/home" />}
      <Nav>
        <a href="/">
          <img src="/images/login-logo.svg" alt="linkedin" />
        </a>
        <div>
          <Join>Join Now</Join>
          <SignIn>Sign In</SignIn>
        </div>
      </Nav>
      <Section>
        <Hero>
          <h1>Welcome to your professional community</h1>
          <img src="/images/login-hero.svg" alt="login hero" />
        </Hero>
        <Form>
          <Google onClick={() => props.signIn()}>
            <img src="/images/google.svg" alt="google" />
            Sign in with Google
          </Google>
        </Form>
      </Section>
    </Container>
  );
};

const Container = styled.div`
  padding: 0px;
`;

//Header Start
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
//Header End

//Section Start
const Section = styled.section`
  align-content: flex-start;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  max-width: 1128px;
  min-height: 700px;
  padding: 60px 0;
  padding-bottom: 138px;
  padding-top: 40px;
  position: relative;
  width: 100%;

  @media (max-width: 768px) {
    margin: auto;
    min-height: 0px;
  }
`;

const Hero = styled.div`
  width: 100%;

  h1 {
    color: #2977c9;
    font-size: 56px;
    font-weight: 200;
    line-height: 70px;
    padding-bottom: 0;
    width: 55%;

    @media (max-width: 768px) {
      font-size: 20px;
      line-height: 2;
      text-align: center;
      width: 100%;
    }
  }

  img {
    bottom: -2px;
    height: 670px;
    position: absolute;
    right: -150px;
    width: 700px;

    @media (max-width: 768px) {
      height: initial;
      position: initial;
      top: 230px;
      width: initial;
    }
  }
`;

const Form = styled.div`
  margin-top: 100px;
  width: 400px;

  @media (max-width: 768px) {
    width: 90vw;
    margin: auto;
    margin-top: 20px;
  }
`;

const Google = styled.button`
  align-items: center;
  background-color: #fff;
  border-radius: 28px;
  box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%),
    inset 0 0 0 2px rgb(0 0 0 / 0%) inset 0 0 0 1px rgb(0 0 0 / 0);
  cursor: pointer;
  color: rgba(0, 0, 0, 0.6);
  display: flex;
  font-size: 20px;
  height: 56px;
  transition: all 160ms;
  justify-content: center;
  vertical-align: middle;
  width: 100%;
  z-index: 0;

  &:hover {
    background-color: rgba(207, 207, 207, 0.25);
    color: rgba(0, 0, 0, 0.8);
  }
`;
//Section End

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

const mapDispatchToProps = (dispatch) => ({
  signIn: () => dispatch(signInApi()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
