import styled from 'styled-components';

const Header = () => {
  return (
    <Container>
      <Content>
        <Logo>
          <a href="/home">
            <img src="/images/home-logo.svg" alt="Home" />
          </a>
        </Logo>
        <Search>
          <div>
            <input type="text" placeholder="Search" />
          </div>
          <SearchIcon>
            <img src="/images/search-icon.svg" alt="search" />
          </SearchIcon>
        </Search>
        <Nav>
          <NavListWrap>
            <NavList className="active">
              <a href="/home">
                <img src="/images/nav-home.svg" alt="home" />
                <span>Home</span>
              </a>
            </NavList>

            <NavList>
              <a>
                <img src="/images/nav-network.svg" alt="network" />
                <span>My Network</span>
              </a>
            </NavList>

            <NavList>
              <a>
                <img src="/images/nav-jobs.svg" alt="jobs" />
                <span>Jobs</span>
              </a>
            </NavList>

            <NavList>
              <a>
                <img src="/images/nav-messaging.svg" alt="messages" />
                <span>Messaging</span>
              </a>
            </NavList>

            <NavList>
              <a>
                <img src="/images/nav-notifications.svg" alt="notifications" />
                <span>Notifications</span>
              </a>
            </NavList>

            <User>
              <a>
                <img src="/images/user.svg" alt="user" />
                <span>Me</span>
                <img src="/images/down-icon.svg" alt="down" />
              </a>

              <SignOut>
                <a>Sign Out</a>
              </SignOut>
            </User>

            <Work>
              <a>
                <img src="/images/nav-work.svg" alt="work" />
                <span>
                  Work
                  <img src="/images/down-icon.svg" alt="down" />
                </span>
              </a>
            </Work>
          </NavListWrap>
        </Nav>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  left: 0;
  padding: 0 24px;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 100;
`;
const Content = styled.div`
  align-items: center;
  display: flex;
  margin: 0 auto;
  min-height: 100%;
  max-width: 1128px;
`;

const Logo = styled.span`
  margin-right: 8px;
  font-size: 0px;
`;

const Search = styled.div`
  flex-grow: 1;
  opacity: 1;
  position: relative;

  & > div {
    max-width: 280px;

    input {
      background-color: #eef3f8;
      border: none;
      border-radius: 2px;
      border-color: #dce6f1;
      box-shadow: none;
      color: rgba(0, 0, 0, 0.9);
      font-weight: 400;
      font-size: 14px;
      height: 34px;
      line-height: 1.75px;
      padding: 0 8px 0 40px;
      width: 218px;
      vertical-align: text-top;
    }
  }
`;

const SearchIcon = styled.div`
  align-items: center;
  border-radius: 0 2px 2px 0;
  display: flex;
  justify-content: center;
  left: 2px;
  margin: 0;
  position: absolute;
  pointer-events: none;
  top: 10px;
  width: 40px;
  z-index: 1;
`;

const Nav = styled.nav`
  display: block;
  margin-left: auto;

  @media (max-width: 768px) {
    background: #fff;
    bottom: 0;
    left: 0;
    position: fixed;
    width: 100%;
  }
`;

const NavListWrap = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  list-style-type: none;

  .active {
    span:after {
      content: "";
      transform: scaleX(1);
      border-bottom: 2px solid var(--white, #fff);
      bottom: 0;
      left: 0;
      position: absolute;
      transition: transform 0.2s ease-in-out;
      width: 100%;
      border-color: rgba(0, 0, 0, 0.9);
    }
`;

const NavList = styled.li`
  align-items: center;
  display: flex;
  a {
    align-items: center;
    background: transparent;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    font-weight: 400;
    justify-content: center;
    line-height: 1.5;
    min-height: 52px;
    min-width: 80px;
    position: relative;
    text-decoration: none;

    span {
      align-items: center;
      color: rgba(0, 0, 0, 0.6);
      display: flex;
    }

    @media (max-width: 768px) {
      min-width: 70px;
    }
  }

  &:hover,
  &:active {
    a {
      span {
        color: rgba(0, 0, 0, 0.9);
      }
    }
  }
`;

const SignOut = styled.div`
  background: #fff;
  border-radius: 0 0 5px 5px;
  display: none;
  font-size: 16px;
  height: 40px;
  position: absolute;
  text-align: center;
  top: 45px;
  transition-duration: 167ms;
  widt: 100%;
`;

const User = styled(NavList)`
  a > svg {
    width: 24px;
    border-radius: 50%;
  }
  a > img {
    border-radius: 50%;
    height: 24px;
    width: 24px;
  }
  span {
    align-items: center;
    display: flex;
  }

  &:hover {
    ${SignOut} {
      align-items: center;
      display: flex;
      justify-content: center;
    }
  }
`;
const Work = styled(User)`
  border-left: 1px solid rgba(0, 0, 0, 0.08);
`;

export default Header;
