class MyEventEmitter {
  private events: Record<string, Function>;

  constructor() {
    this.events = {};
  }

  private addEvent(name: string, fn: Function) {
    if (!this.events[name]) {
      this.events[name] = fn;
    } else {
      throw new Error("Event already existed.");
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

  private removeEvents(name: string) {
    if (this.events[name]) {
      delete this.events[name];
    } else {
      throw new Error("Event not existed.");
    }
  }

  once(name: string, fn: Function) {
    const onceWrapper = (...args: any[]) => {
      fn(...args);
      this.removeEvents(name);
    };

    this.addEvent(name, onceWrapper);
  }

  listAllEventsName() {
    return Object.keys(this.events);
  }
}

export { MyEventEmitter };
