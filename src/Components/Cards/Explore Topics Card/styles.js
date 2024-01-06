import styled from "styled-components";

export const ExploreTopics = styled.div`
  height: 444px;
  width: 280px;
  border-radius: 6px;
  color: rgba(255, 255, 255, 1);
  box-shadow: 0 1px 2px 0 rgba(23, 23, 23, 0.3);
`;

export const ExploreTopicContent = styled.div`
  display: grid;
  grid-template-rows: 17px;
  grid-template-columns: 11px 120px;
  height: 36px;
  align-items: center;
  gap: 5px;
  margin: 20px;
`;

export const ExploreTopicIcon = styled.img`
  grid-row: 1;
  grid-column: 1;
  height: 12px;
  width: 11px;
`;

export const Heading = styled.div`
  grid-row: 1;
  grid-column: 2;
  font: 16px/18.96px rubik, sans-serif;
  font-weight: 600;
  color: rgba(16, 16, 16, 1);
`;

export const Content = styled.div`
  grid-row: 2;
  grid-column: span 2;
  font: 12px/14.22px rubik, sans-serif;
  font-weight: 400;
  color: rgba(16, 16, 16, 0.6);
`;
