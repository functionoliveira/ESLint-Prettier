import Foo from "./foo";
import Bar from "./bar";
import FooBar from "./foo-bar";
import "./styles/main.scss";

const number = 1;
const foo = {
  bar: "baz",
  qux: "quux"
};

function main() {
  console.log("Main");
  console.log("print variable", number);
  console.log(`print json ${foo}`);
  Foo();
  Bar();
  FooBar();
}

main();
