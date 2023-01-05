# 앵귤러를 활용한 투두앱
[해당 프로젝트 관련 글](https://velog.io/@qhdgkdbs/ang-todo)

## Fork + 개선 레포들
[GrassHopper42 님 레포](https://github.com/GrassHopper42/todo-on-any-framework)
- 수정 내용
  - Refactor: 인프라, 서비스 디커플링
  - 의존성 주입 방식 변경
    - 인터페이스에서 인젝터 토큰 생성
    - 컴포넌트 모듈에서 토큰, 구현체 등록을 통해 의존성제어역전
  - data-saver 메소드 관리범위 수정
    - 모든 비즈니스로직 서비스 레이어로 이동(todoObjBuilder 포함)
    - 추상클래스 불필요에 따라 삭제
  - 컨벤션 수정
    - 메소드명 동사, 인터페이스명 변경

## 작동 모습

### 모바일

<br />
<img width="342" alt="모바일 앵귤러 투두" src="https://user-images.githubusercontent.com/29947261/210305616-9a6ab30f-3328-4d5d-8b7b-14b2d0da55af.png">

### PC 버전

<br />
<img width="981" alt="PC 앵귤러 투두" src="https://user-images.githubusercontent.com/29947261/210305654-89b7f086-2fe6-4ce3-9cc5-1dc6d1e5b13b.png">
