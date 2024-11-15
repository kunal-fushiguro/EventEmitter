import { MyEventEmitter } from "./eventEmitter";

const example = new MyEventEmitter();

example.on("foo", (msg: string, msg2: string) => {
  console.log("Event occuured , MSG : ", msg, msg2);
});

example.once("boo", () => {
  console.log("hello");
});
console.log(example.listAllEventsName());

example.emit("foo", "hello", "world");

example.emit("boo");
