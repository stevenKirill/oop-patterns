// умный перебор коллекций
// без раскрытия внутреннего представления элементов
// не позволяет изменять что то внутри наших объектов
class ArrayIterator {
    constructor(collection) {
        this.collection = collection;
        this.currentIndex = 0;
    }

    next() {
        return this.collection[this.currentIndex++];
    }

    hasNext() {
        return this.currentIndex < this.collection.length;
    }
}

class Objectterator {
    constructor(collection) {
        this.collection = collection;
        this.keys = Object.keys(collection);
        this.currentIndex = 0;
    }

    next() {
        return this.collection[this.keys[this.currentIndex++]];
    }

    hasNext() {
        return this.currentIndex < this.keys.length;
    }
}

const firstCollection = new ArrayIterator(['1','2','3','4','5']);

while(firstCollection.hasNext()) {
    console.log(firstCollection.next())
}

const secondCollection = new Objectterator({
    name: 'kirill',
    job: 'frontend',
    hobby: 'coding',
});

while(secondCollection.hasNext()) {
    console.log(secondCollection.next())
}