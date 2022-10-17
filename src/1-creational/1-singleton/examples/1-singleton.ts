// ! npm run 1-1-1
class Singleton {
  public static instance: Singleton;
  public readonly timestamp!: number;
  public payload: unknown;

  constructor() {
    if (!Singleton.instance) {
      this.timestamp = Date.now();
      this.payload = "something";
      Singleton.instance = this;
    }
    return Singleton.instance;
  }

  public static getInstance(): Singleton {
    return Singleton.instance;
  }
}

class ClientA {
  public static main(): void {
    console.log("🏠 ClientA main static...");
    const instance = new Singleton();
    console.log(instance);
  }
}
class ClientB {
  public doStuff(): void {
    console.log("🏠 ClientA main static...");
    const instance = new Singleton();
    instance.payload = "mutated";
    console.log(instance);
    console.log(Singleton.instance);
  }
}

// main program
ClientA.main();
new ClientB().doStuff();
