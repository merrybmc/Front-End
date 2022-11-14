import React from 'react';
import styled from 'styled-components';
import Banner1 from './sources/banner_img1.png';

export default function MainPageBanner() {
  return (
    <BannerContainer>
      <BannerBox>
        <BannerImg1 src={Banner1} />
      </BannerBox>
    </BannerContainer>
  );
}

const BannerContainer = styled.div`
  width: 100%;
  height: 205px;
  background-color: white;
  display: flex;
`;

const BannerBox = styled.div`
  margin-top: 32px;
  margin-left: 16px;
  background-color: white;
`;

const BannerImg1 = styled.img`
  width: 328px;
  height: 132px;
  background: none;
  cursor: pointer;
`;
