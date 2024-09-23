# Node.js의 공식 LTS 이미지 기반
FROM node:18

# 앱 디렉토리 생성
WORKDIR /usr/src/app

# 의존성 설치를 위해 package.json과 package-lock.json 복사
COPY package*.json ./

# 의존성 설치
RUN npm install

# 애플리케이션 소스 복사
COPY . .

# 컨테이너 포트 노출
EXPOSE 3000

# 앱 실행
CMD ["npm", "start"]

