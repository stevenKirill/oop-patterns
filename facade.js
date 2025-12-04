class UglyClass {
  // в этом классе может быть сложная логика и много методов
  method1() {
    console.log(1);
  }

  method2() {
    console.log(2);
  }

  method3() {
    console.log(3);
  }

  method4() {
    console.log(4);
  }

  method5() {
    console.log(5);
  }

  method6() {
    console.log(6);
  }

  method7() {
    console.log(7);
  }

  method8() {
    console.log(8);
  }
}

class Facade {
  constructor(uglyClass) {
    this.instance = uglyClass;
  }

  construct() {
    this.instance.method1();
    this.instance.method2();
    this.instance.method3();
    this.instance.method4();
    this.instance.method5();
    this.instance.method6();
    this.instance.method7();
    this.instance.method8();
  }
}

const simple = new Facade(new UglyClass());

simple.construct();
