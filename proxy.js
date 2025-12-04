// заместитель

// оригинальный объект
class Dashboard {
  successAuth() {
    console.log("successfully authenticate");
  }

  failed(reason) {
    console.log(`access denied ${reason}`);
  }
}

// в данном случае класс заместитель
class AuthLogic {
  constructor(system) {
    this.system = system;
    this.password = "123";
  }

  authenticate(pass) {
    if (pass === this.password) {
      this.system.successAuth();
    } else {
      this.system.failed("wrong password");
    }
  }
}

const login = new AuthLogic(new Dashboard());
login.authenticate("234");
login.authenticate("123");

// виртуальный прокси ленивая загрузка
// логирующий прокси
// защищающий прокси
// кэширующий прокси
