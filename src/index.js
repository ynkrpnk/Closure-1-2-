"use strict";

function createLogger(prefix) {
  return function (message) {
    console.log(prefix + ": " + message);
  };
}
const authLogger = createLogger("AUTH");
authLogger("User logged in");

const createLimiter = (limit) => {
  if (typeof limit !== "number" || Number.isNaN(limit)) {
    return null;
  }

  let count = 0;

  return () => {
    if (count < limit) {
      count++;
      return "Ok";
    } else {
      return "Error";
    }
  };
};

const limited = createLimiter(2);

console.log(limited());
console.log(limited());
console.log(limited());
