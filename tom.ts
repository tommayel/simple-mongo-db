const ShortUniqueId = require("short-unique-id");
const uid = new ShortUniqueId({ dictionary: "alpha_lower", length: 8 });
const id = uid();
console.log({ id });
console.log({ id: uid() });
console.log({ id: uid() });
console.log({ id: uid() });
console.log({ id: uid() });
console.log({ id: uid() });
console.log({ id: uid() });
console.log({ id: uid() });
console.log({ id: uid() });
console.log({ id: uid() });
console.log({ id: uid() });
console.log({ id: uid() });
console.log({ id: uid() });
