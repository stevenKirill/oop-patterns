// кэш легкове
// экономит ресурсы занимаемые объектами

// у легковеса нету сеттеров и нельзя их изменить и публичных полей тоже нету
class SmartPhone {
  constructor(type) {
    this.type = type;
  }
}

class SmartPhoneFactory {
  constructor(name) {
    this.models = {};
  }

  createNewSmartphone(name) {
    const model = this.models[name];
    if (model) return model;
    this.models[name] = new SmartPhone(name);
    return this.models[name];
  }

  logModels() {
    console.table(this.models);
  }
}

const factory = new SmartPhoneFactory();

const iphone = factory.createNewSmartphone("iphone");
const samsung = factory.createNewSmartphone("samsung");
const pixel = factory.createNewSmartphone("pixel");
const huawei = factory.createNewSmartphone("huawei");
const huawei2 = factory.createNewSmartphone("huawei");

console.log(factory.logModels());
