import styled from "styled-components";

export const AddPostCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 580px;
  height: 132px;
  border: 1px solid;
  margin-bottom: 3px;
  border-image: linear-gradient(
    to right,
    rgba(117, 17, 244, 0.4),
    rgba(189, 8, 218, 0.4)
  );
  border-radius: 6px;
  border-image-slice: 1;
  overflow: hidden;
  box-sizing: border-box;
  box-shadow: 0 0 14px 0 rgba(30, 30, 30, 0.1);
`;

export const TextInput = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  width: 100%;
  margin: 20px 15px 10px 15px;
`;

export const ProfileImage = styled.img`
  width: 32px;
  height: 32px;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
