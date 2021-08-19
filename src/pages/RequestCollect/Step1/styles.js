import styled from "styled-components";
import { SelectMaterial } from "../../../components/SelectMaterial";

import { HeaderWeb } from "../../../components/HeaderWeb";
import BackButton from "../../../components/BackButton";
import { Button } from "../../../components/Button";
import { TabBar } from "../../../components/TabBar";

export const HeaderWebRequest = styled(HeaderWeb)`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    position: relative;
    z-index: 1;
  }
`;

export const body = styled.div`
  background-color: #fff8f4;
  min-height: calc(100vh - var(--tabBarHeight));
  overflow: auto;
  margin: 0;
  padding: 0;
  width: 100%;

  @media (min-width: 768px) {
    max-width: 600px;
    margin: auto;
  }
`;

export const backb = styled(BackButton)`
  padding-top: 17px;
  margin-bottom: 8px;
  margin-left: 13.33px;
  margin-right: 13.33px;
  color: rgba(79, 79, 79, 1);
  font-weight: 600;
`;
export const materialspan = styled.p`
  font-weight: 400;
  font-size: 14px;
  text-align: justify;
  @media (min-width: 768px) {
    width: 500px;
  }
`;

export const materialselect = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 100px;
  align-items: center;
  @media (min-width: 768px) {
    margin-bottom: 30px;
  }
`;

export const SelectMaterialRerquest = styled(SelectMaterial)`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const bottonpage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const itensselected = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;
export const spannum = styled.span`
  color: rgba(242, 142, 54, 1);
  font-weight: 700;
  font-size: 18px;
  margin-left: 126px;
  padding: 2px 10px 2px 10px;
  border: 1px solid #ffb06b;
  border-radius: 8px;
  @media (min-width: 768px) {
    display: none;
  }
`;
export const button = styled(Button)`
  width: 300px;
  @media (min-width: 768px) {
    width: 400px;
  }
`;
export const indicator = styled.span`
  color: rgba(130, 130, 130, 1);
  font-size: 16px;
  font-weight: 700;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const TabBarRequest = styled(TabBar)`
  @media (min-width: 768px) {
    display: none;
  }
`;
export const desktopContainer = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 400px;
    padding: 70px 80px;
    border-radius: 28px;
    margin-bottom: 30px;
  }
`;
export const desktopAling = styled.div`
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;
