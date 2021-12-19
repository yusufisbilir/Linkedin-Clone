import styled from 'styled-components';
import { connect } from 'react-redux';

const Leftside = (props) => {
  return (
    <Container>
      <ArtCard>
        <UserInfo>
          <CardBackground />
          <a>
            <Photo />
            Welcome,{props.user ? props.user.displayName : 'there'}!
          </a>
          <a>
            <AddPhotoText>Add a photo</AddPhotoText>
          </a>
        </UserInfo>

        <Widget>
          <a>
            <div>
              <span>Connections</span>
              <span>Grow your network</span>
            </div>
            <img src="/images/widget-icon.svg" alt="widget" />
          </a>
        </Widget>
        <Item>
          <span>
            <img src="/images/item-icon.svg" alt="item" />
            My Items
          </span>
        </Item>
      </ArtCard>

      <CommunityCard>
        <a>
          <span>Groups</span>
        </a>
        <a>
          <span>
            Events
            <img src="/images/plus-icon.svg" alt="plus" />
          </span>
        </a>
        <a>
          <span>Follow Hashtags</span>
        </a>
        <a>
          <span>Discover more</span>
        </a>
      </CommunityCard>
    </Container>
  );
};

const Container = styled.div`
  grid-area: leftside;
`;

const ArtCard = styled.div`
  background-color: #fff;
  border-radius: 5px;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
  margin-bottom: 8px;
  overflow: hidden;
  position: relative;
  text-align: center;
  transition: box-shadow 80ms;
`;

const UserInfo = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 12px 12px 16px;
  word-wrap: break-word;
  word-break: break-word;
`;

const CardBackground = styled.div`
  background: url('/images/card-bg.svg');
  background-position: center;
  background-size: 462px;
  height: 54px;
  margin: -12px -12px 0;
`;

const Photo = styled.div`
  background-color: white;
  background-image: url('/images/photo.svg');
  background-clip: content-box;
  background-position: center;
  background-size: 60%;
  box-sizing: border-box;
  background-repeat: no-repeat;
  border-radius: 50%;
  box-shadow: none;
  border: 2px solid white;
  height: 72px;
  margin: -38px auto 12px;
  width: 72px;
`;

const Link = styled.div`
  color: rgba(0, 0, 0, 0.9);
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
`;

const AddPhotoText = styled.div`
  color: #0a66c2;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.33;
  margin-top: 4px;
`;

const Widget = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding: 12px 0;
  transition: all 250ms;

  & > a {
    align-items: center;
    display: flex;
    text-decoration: none;
    justify-content: space-between;
    padding: 4px 12px;
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
  }
  div {
    display: flex;
    flex-direction: column;
    text-align: left;
    span {
      font-size: 12px;
      line-heigth: 1.333;
      &:first-child {
        color: rgba(0, 0, 0, 0.6);
      }
      &:nth-child(2) {
        color: rgba(0, 0, 0, 1);
      }
    }
  }
  svg {
    color: rgba(0, 0, 0, 1);
  }
`;

const Item = styled.a`
  border-color: rgba(0, 0, 0, 0.8);
  display: block;
  font-size: 12px;
  padding: 12px;
  text-align: left;
  span {
    align-items: center;
    color: rgba(0, 0, 0, 1);
    display: flex;
    svg {
      color: rgba(0, 0, 0, 0.6);
    }
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
  }
`;

//Community card
const CommunityCard = styled(ArtCard)`
  display: flex;
  flex-direction: column;
  padding: 8px 0 0;
  text-align: left;
  a {
    color: black;
    font-size: 12px;
    padding: 4px 12px 4px 12px;
    &:hover {
      color: #0a66c2;
    }
    span {
      align-items: center;
      display: flex;
      justify-content: space-between;
    }
    &:last-child {
      border-top: 1px solid #d6cec2;
      color: rgba(0, 0, 0, 0.6);
      padding: 12px;
      text-decoration: none;
      &:hover {
        background-color: rgba(0, 0, 0, 0.08);
      }
    }
  }
`;

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

export default connect(mapStateToProps)(Leftside);
