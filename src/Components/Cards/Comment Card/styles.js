import styled from "styled-components";

export const Comment = styled.div`
  display: flex;
  flex-direction: column;
  width: 580px;
  border-radius: 6px;
  box-shadow: 0 1px 2px 0 rgba(23, 23, 23, 0.1);
`;
export const CommentContainer = styled.div`
  display: grid;
  grid-template-columns: 40px 498px;
  gap: 10px;
  margin: 16px;

  &:not(:last-child) {
    border-bottom: 1px solid #e1e1e1;
  }
`;
export const PhotoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 39px;
  height: 39px;
  border: 1px solid rgba(117, 17, 244, 1);
  border-radius: 100%;
`;
export const Photo = styled.img`
  cursor: pointer;
  width: 33px;
  height: 33px;
`;
export const ProfileContainer = styled.div`
  margin: 0 16px 16px 0;
  display: grid;
  gap: 8px;
`;
export const Profile = styled.div`
  display: grid;
  grid-template-columns: 181px 1fr;
  gap: 5px;
  height: 18px;
`;
export const ProfileDetails = styled.div`
  display: grid;
  grid-template-columns: 111px 1fr;
  gap: 5px;
`;
export const ProfileName = styled.div`
  width: 181px;
  height: 18px;
  cursor: pointer;
  font-family: rubik;
  font-size: 15px;
  font-weight: 500;
  color: rgba(17, 17, 17, 1);
  line-height: 17.78px;
`;
export const Designation = styled.div`
  font-family: rubik;
  font-size: 15px;
  font-weight: 400;
  color: rgba(172, 172, 172, 1);
`;
export const Update = styled.span`
  display: grid;
  grid-template-columns: 35px 6px 66px;
  align-items: center;
  font-size: 10px;
  font-family: rubik;
  font-weight: 400;
  line-height: 11.85px;
  color: #828282;
  gap: 6px;
`;
export const Dot = styled.img`
  align-items: center;
  height: 4px;
  width: 4px;
  color: rgba(180, 180, 180, 1);
`;
export const Description = styled.div`
  width: 498px;
  height: 48px;
  font-size: 15px;
  font-family: rubik;
  line-height: 24px;
  font-weight: 400;
  color: #575757;
`;
export const AddCommentContainer = styled.div`
  width: 580px;
  height: 218px;
  border-radius: 6px;
  background-color: #ffffff;
  box-shadow: 0 1px 2px 0 rgba(23, 23, 23, 0.1);
`;
export const AddCommentContent = styled.div`
  display: grid;
  grid-template-columns: 36px 460px;
  gap: 10px;
  width: 508px;
  height: 168px;
  /* border: 1px solid black; */
  margin: 25px 40px 25px 32px;
`;
export const ProfileImage = styled.img`
  width: 36px;
  height: 36px;
`;
export const CommentInputHolder = styled.div`
  display: grid;
  grid-template-rows: 116px 50px;
  width: 460px;
  background-color: #ffffff;
`;
export const TextInputArea = styled.div`
  border: 1px solid #dcdcdc;
  border-radius: 4px;
`;

export const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: 25px 194px;
  height: 50px;
  gap: 241px;
  margin-top: 10px;

  div {
    display: flex;
    align-items: center;
    gap: 32px;
    font-family: rubik;
    font-size: 14px;
    font-weight: 400;
    line-height: 16.59px;
  }
  img {
    cursor: pointer;
  }
`;
export const CancelButton = styled.div`
  width: 45px;
  cursor: pointer;
  color: transparent;
  background: linear-gradient(to right, #7511f4, #bd08da);
  background-clip: text;
`;
export const SubmitButton = styled.div`
  display: block;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #f9f9f9;
  width: 117px;
  height: 40px;
  background: linear-gradient(to right, #7511f4, #bd08da);
  border-radius: 4px;
`;
