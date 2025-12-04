class Snapshot {
  constructor(value) {
    this.snapshot = value;
  }
}

class Helper {
  save(val) {
    return new Snapshot(val);
  }

  restore(currentSnapshot) {
    return currentSnapshot.snapshot;
  }
}

class SnapshotStorage {
  constructor() {
    this.snapshots = [];
    this.index = 0;
  }

  addSnapshot(value) {
    this.snapshots.push({
      value,
      index: ++this.index,
    });
  }

  getSnapshot(index) {
    return this.snapshots[index] || "Нет объекта";
  }

  logSnapshots() {
    console.log(this.snapshots);
  }
}

const helper = new Helper();
const storage = new SnapshotStorage();

storage.addSnapshot(helper.save("javascript"));
storage.addSnapshot(helper.save("closures"));
storage.addSnapshot(helper.save("argentina"));

console.log(storage.getSnapshot(0));
console.log(storage.getSnapshot(5));
storage.logSnapshots();
