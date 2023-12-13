// 1) difference between 'any' and 'unknow'

let vAny: any = 10; // We can assign anything to any
let vUnknown: unknown = 10; // We can assign anything to unknown just like any

let s1: string = vAny; // Any is assignable to anything
let s2: string = vUnknown; // Invalid; we can't assign vUnknown to any other type (without an explicit assertion)
// To fix it - we need to write 'as string' ===>>> let s2: string = vUnknown as string

vAny.method(); // Ok; anything goes with any
vUnknown.method(); // Not ok; we don't know anything about this variable

// 2) Try to type func getProperty to get Error on the second call this func ===>>> getProperty(X 'm') <=== cauze we don't have key 'm' on obj X

// const x = { a: 1, b: 2, c: 3, d: 4 };

// function getProperty(obj, key) {
//     return obj[key]
// }

// getProperty(x, 'a')
// getProperty(x, 'm')

// Answear

// function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
//     return obj[key]
// }
