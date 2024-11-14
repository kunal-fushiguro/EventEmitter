class MyEventEmitter {
  private events: Record<string, Function>;

  constructor() {
    this.events = {};
  }

  private addEvent(name: string, fn: Function) {
    if (!this.events[name]) {
      this.events[name] = fn;
    } else {
      throw new Error("Event already added.");
    }
  }

  on(name: string, fn: Function) {
    this.addEvent(name, fn);
  }

  emit(name: string, ...args: any) {
    if (this.events[name]) {
      if (arguments) {
        this.events[name](...args);
      } else {
        this.events[name]();
      }
    } else {
      throw new Error("Event not existed.");
    }
  }
}

export { MyEventEmitter };
