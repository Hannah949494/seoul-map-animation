import styled from "@emotion/styled";
import Seoul from "../../public/images/seoul.svg";

const MapWrapper = styled.div`
  width: 1000px;
  height: 500px;

  svg {
  path{
    &:hover{
      
      fill:black !important;
    
  }
  }
    
    }
  }
`;

export default function AnimationTest() {
  return (
    <>
      <div>
        <h1>지도 애니메이션 테스트</h1>
        <MapWrapper>
          <Seoul />
        </MapWrapper>
      </div>
    </>
  );
}
