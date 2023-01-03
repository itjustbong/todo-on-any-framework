// 클래스의 첫 문자는 대문자
// 클래스는 문법적인 설탕일 뿐
class Depart {
  // 클래스의 필드
  name: string;

  // 생성자 - 예약어
  // 타스와 최신 자스에서
  constructor(n: string) {
    this.name = n;
  }

  show() {
    // 하기의 name은 이 메소드 내부 또는 클래스 외부에 전역 변수로서 존재하는
    // 모든 변수의 이름을 찾음.
    // 그래서
    // console.log(name)
  }
}

// 클래스 실행하는 시점에 생성사가 호출됨.
// 그래서 constructor의 인수를 전달해줘야해.
new Depart('ho'); // Depart 객체
