### 개요

NestJs, Mongoose, Serverless AWS Lambda 활용한 테스트 프로젝트

### 작업 방법

sls offline 테스트 시 lambda.ts, serverless.yml로 AWS Lambda 셋팅 환경을 구성한다.


### 설치

```bash
$ npm install
$ npm install -g serverless
$ sls --version
$ npm install -g @nestjs/cli
$ npm install @nestjs/mongoose mongoose @nestjs/config
```

### 실행
```bash
$ npm run build
$ npm run start
$ sls offline
```

### 배포
```bash
$ sls deploy
```

### 배포된 URL

- Serverless AWS Lambda 배포
  - [Swagger UI](https://xplet8w7md.execute-api.ap-northeast-2.amazonaws.com/dev/api)
  - [GraphQL](https://xplet8w7md.execute-api.ap-northeast-2.amazonaws.com/dev/graphql)

