import { useState } from 'react';
import styled from 'styled-components';

function PostModal(props) {
  const [editorText, setEditorText] = useState('');

  const reset = (e) => {
    setEditorText('');
    props.handleClick(e);
  };

  return (
    <>
      {props.showModal === 'open' && (
        <Container>
          <Content>
            <Header>
              <h2>Create a post.</h2>
              <button
                onClick={(e) => {
                  reset(e);
                }}
              >
                <img src="/images/close-icon.svg" alt="close" />
              </button>
            </Header>
            <SharedContent>
              <UserInfo>
                <img src="/images/user.svg" alt="user" />
                <span>Name</span>
              </UserInfo>
              <Editor>
                <textarea
                  value={editorText}
                  onChange={(e) => setEditorText(e.target.value)}
                  placeholder="What do you want about?"
                  autoFocus={true}
                ></textarea>
              </Editor>
            </SharedContent>
            <ShareCreation>
              <AttachAssets>
                <AssetButton>
                  <img src="/images/photo-icon.svg" alt="attach_image" />
                </AssetButton>
                <AssetButton>
                  <img src="/images/video-icon.svg" alt="attach_video" />
                </AssetButton>
              </AttachAssets>
              <ShareComment>
                <AssetButton>
                  <img src="/images/comment-icon.svg" alt="attach_comment" />
                  Anyone
                </AssetButton>
              </ShareComment>

              <PostButton>Post</PostButton>
            </ShareCreation>
          </Content>
        </Container>
      )}
    </>
  );
}

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Content = styled.div`
  width: 100%;
  max-width: 552px;
  max-height: 90%;
  background-color: #fff;
  overflow: initial;
  border-radius: 5px;
  position: relative;
  display: flex;
  flex-direction: column;
  top: 32px;
  margin: 0 auto;
`;

const Header = styled.div`
  display: block;
  padding: 16px 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  font-size: 16px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.6);
  font-weight: 400;
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    height: 40px;
    width: 40px;
    min-width: auto;
    color: rgba(0, 0, 0, 0.15);
    border: none;
    outline: none;
    background-color: transparent;
    svg,
    img {
      pointer-events: none;
    }
  }
`;

const SharedContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: auto;
  vertical-align: baseline;
  background: transparent;
  padding: 8px 12px;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 24px;
  svg,
  img {
    width: 48px;
    height: 48px;
    background-clip: content-box;
    border: 2px solid transparent;
    border-radius: 50%;
  }
  span {
    font-weight: 600;
    font-size: 16px;
    line-height: 1.5;
    margin-left: 5px;
  }
`;

const ShareCreation = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 24px 12px 16px;
`;

const AssetButton = styled.button`
  display: flex;
  align-items: center;
  height: 40px;
  min-width: auto;
  background: transparent;
  border: none;
  cursor: pointer;
`;

const AttachAssets = styled.div`
  align-items: center;
  display: flex;
  padding-right: 8px;
  ${AssetButton} {
    width: 40px;
  }
`;

const ShareComment = styled.div`
  padding-left: 8px;
  margin-right: auto;
  border-left: 1px solid rgba(0, 0, 0, 0.15);
  ${AssetButton} {
    svg {
      margin-right: 5px;
    }
  }
`;

const PostButton = styled.button`
  min-width: 60px;
  border-radius: 20px;
  padding-left: 16px;
  padding-right: 16px;
  background: #0a66c2;
  color: #fff;
  border: none;
  transition: all 250ms;
  cursor: pointer;
  &:hover {
    background: #004182;
  }
`;

const Editor = styled.div`
  padding: 12px 24px;
  textarea {
    width: 100%;
    min-height: 100px;
    resize: none;
  }
  input {
    width: 100%;
    height: 35px;
    font-size: 16px;
    margin-bottom: 20px;
  }
`;

export default PostModal;
