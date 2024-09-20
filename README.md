# Express.js와 Google Maps API를 사용한 위치 기반 지도 애플리케이션

이 프로젝트는 Express.js와 Google Maps API를 사용하여 사용자의 현재 위치를 지도에 표시하는 간단한 동적 웹 애플리케이션입니다. 이 애플리케이션은 HTML5 Geolocation API를 활용하여 사용자의 실시간 지리적 위치를 가져오고, Google Maps API와 통합하여 완전히 상호작용 가능한 지도에 위치를 렌더링합니다.

### Features:
- 브라우저의 Geolocation API를 사용하여 사용자의 현재 위치를 감지하고 가져옴
- 실시간으로 Google Maps에 위치를 맞춤 마커와 함께 표시
- 확대 및 패닝 기능이 있는 완전한 반응형 상호작용 지도
- 정적 파일을 제공하기 위한 간단하고 효율적인 Express.js 서버 설정

### Used Tech Stack:
- Express.js: 정적 파일 제공을 처리하는 경량 웹 서버.
- Google Maps API: 지도 렌더링 및 위치 기반 서비스 제공.
- HTML5 Geolocation API: 브라우저에서 사용자의 현재 위치를 가져옵니다.
- JavaScript: 실시간 위치 검색 및 지도 상호작용 관리.

### How it works:
1. Express.js 서버가 클라이언트에 정적 HTML 파일을 제공합니다.
2. 브라우저는 Geolocation API를 사용하여 사용자의 현재 위도와 경도를 요청합니다.
3. 이 데이터는 Google Maps API로 전달되어 사용자의 위치를 중심으로 지도를 표시합니다.
4. 지도에 사용자의 정확한 위치를 나타내는 마커가 표시됩니다.

# Use Cases:
위치 기반 서비스 및 애플리케이션(예: 배달 추적, 인근 추천) <br>
위치 기반 콘텐츠에 대한 실시간 지도 통합 시연
