// паттерн мост разделяет один или несклько классов на иерархии => абстракция и реализация

// данные метод и есть мост
class Color {
  constructor(type) {
    // тип цвета
    this.type = type;
  }

  get getType() {
    return this.type;
  }
}

class Model {
  constructor(color) {
    this.color = color;
  }
}

// подклассы
class RedColor extends Color {
  constructor() {
    super("red color");
  }
}

// подклассы
class GreenColor extends Color {
  constructor() {
    super("green color");
  }
}

class Honda extends Model {
  constructor(color) {
    super(color);
  }

  paint() {
    return `Car: Honda, Color: ${this.color.getType}`;
  }
}

class Mazda extends Model {
  constructor(color) {
    super(color);
  }

  paint() {
    return `Car: Mazda, Color: ${this.color.getType}`;
  }
}

const redMazda = new Mazda(new RedColor());
console.log(redMazda.paint());

const greenHonda = new Honda(new GreenColor());
console.log(greenHonda.paint());
