import styled from "@emotion/styled";
import SvgComponent from "./map";

const MapWrapper = styled.div`
  width: 1000px;
  height: 500px;

  g {
    .cls-1{
      transition:.5s;
    }
    &:hover{
      .cls-1{
        fill:#213358;
        filter: drop-shadow(3px 3px 2px #324e86);
        transition:.5s;
        cursor:pointer;
      }

      .cls-3{
        fill:white;
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
          <SvgComponent />
        </MapWrapper>
      </div>
    </>
  );
}
