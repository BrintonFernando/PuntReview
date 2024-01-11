import styled from "styled-components";

export const Comment = styled.div`
  display: flex;
  width: 580px;
  /* height: auto; */
  border-radius: 6px;
  box-shadow: 0 1px 2px 0 rgba(23, 23, 23, 0.1);
`;
export const CommentContainer = styled.div`
  display: grid;
  grid-template-columns: 59px 1fr;
  gap: 5px;
`;
export const PhotoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  width: 39px;
  height: 39px;
  border: 1px solid rgba(117, 17, 244, 1);
  border-radius: 100%;
  margin: 16px 0 16px 16px;
`;

export const ProfileContainer = styled.div`
  /* display: flex;
  flex-direction: row; */
`;
// export const Profile = styled.div`
//   display: flex;
//   flex-direction: row;
//   margin: 16px;
// `;

export const Photo = styled.img`
  cursor: pointer;
  width: 33px;
  height: 33px;
`;
// export const ProfileName = styled.div`
//   display: flex;
//   width: 181px;
//   height: 18px;
//   cursor: pointer;
//   font-family: rubik;
//   font-size: 15px;
//   font-weight: 500;
//   color: rgba(17, 17, 17, 1);
//   line-height: 17.78px;
//   margin: 0 5px;
// `;
// export const Designation = styled.div`
//   font-family: rubik;
//   font-size: 15px;
//   font-weight: 400;
//   color: rgba(172, 172, 172, 1);
//   margin: 0 3px;
// `;
// export const Update = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   height: 15px;
//   font-size: 10px;
//   font-family: rubik;
//   font-weight: 400;
//   line-height: 11.85px;
//   color: #828282;
//   margin: 2px 0;
//   gap: 5px;
// `;
// export const Dot = styled.img`
//   align-items: center;
//   height: 4px;
//   width: 4px;
//   color: rgba(180, 180, 180, 1);
// `;
