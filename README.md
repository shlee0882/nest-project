### 개요

NestJs, Mongoose, Serverless AWS Lambda 활용한 테스트 프로젝트

### 작업 방법

sls offline 테스트 시 lambda.ts, serverless.yml로 AWS Lambda 셋팅 환경을 구성한다.


### 설치

```bash
$ npm install
$ npm install -g serverless
$ npm install serverless-offline --save-dev
$ sls --version
$ npm install -g @nestjs/cli
$ npm install @nestjs/mongoose mongoose @nestjs/config
```

``` bash
aws cli 설치
$ msiexec.exe /i https://awscli.amazonaws.com/AWSCLIV2.msi
```

``` bash
aws IAM 권한 및 액세스 키 생성 
$ aws configure
AWS Access key ID
Secret access key 
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

### NestJs, NextJs 같이 사용하기

  - [NestJs, NextJs 한 프로젝트에서 같이 사용하기](https://github.com/shlee0882/nest-next-mono-project)
