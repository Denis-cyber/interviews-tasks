// 1) difference between 'any' and 'unknow'

let vAny: any; // We can assign anything to any
let vUnknown: unknown; // We can assign anything to unknown just like any

let s1: string = vAny; // Any is assignable to anything
let s2: string = vUnknown; // Invalid; we can't assign vUnknown to any other type (without an explicit assertion)
// To fix it - we need to write 'as string' ===>>> let s2: string = vUnknown as string

vAny.method(); // Ok; anything goes with any
vUnknown.method(); // Not ok; we don't know anything about this variable









































// SOLUTION
// unknown - это "безопасная" альтернатива any
// в случае с unknown TypeScript требует провести проверку типа перед использованием значения:

let b: unknown;

b = 5;
b = "строка";

// Ошибка:
// b.toUpperCase(); ❌ — нельзя использовать, не проверив тип

if (typeof b === "string") {
  b.toUpperCase(); // ✅ теперь можно
}


























// 2) Try to type func getProperty to get Error on the second call this func ===>>> getProperty(X 'm') <=== cauze we don't have key 'm' on obj X

const x = { a: 1, b: 2, c: 3, d: 4 };

function getProperty(obj, key) {
    return obj[key]
}

getProperty(x, 'a');
getProperty(x, 'm');







































// SOLUTION

// function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
//     return obj[key]
// }































// 3) What type will be in T1 and in T2

const a = {
    x: 1,
    y: '2'
}

type T1 = typeof a

type T2 = keyof T1





















// 4) Write ReadOnlyOwn which will make all keys readonly

// type User = {
//   id: number;
//   name: string;
// };

// type ReadonlyUser = ReadOnlyOwn<User>;

// const user: ReadonlyUser = {
//   id: 1,
//   name: 'Alice'
// };

// user.id = 2;  // error



































// SOLUTION

// type ReadOnlyOwn<T> = { readonly [K in keyof T]: T[K] };

// type User = {
//   id: number;
//   name: string;
// };

// type ReadonlyUser = ReadOnlyOwn<User>;

// const user: ReadonlyUser = {
//   id: 1,
//   name: 'Alice'
// };

// user.id = 2;  // error