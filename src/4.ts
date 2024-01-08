class Key {
  constructor(private signature: number = Math.random()) {}

  getSignature() {
    return this.signature;
  }
}

class Person {
  private key: Key;

  constructor(key: Key) {
    this.key = key;
  }

  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  protected door: boolean = false;
  private tenants: Person[] = [];

  constructor(protected key: Key) {}

  comeIn(tenant: Person): void {
    if (this.door) {
      this.tenants.push(tenant);
    }
  }

  abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  public openDoor(key: Key): void {
    if (this.key.getSignature() === key.getSignature()) {
      this.door = true;
    } else {
      this.door = false;
    }
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());
house.comeIn(person);

export {};
