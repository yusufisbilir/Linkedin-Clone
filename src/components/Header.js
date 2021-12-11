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

export default Header;
