// 1) Try to type func getProperty to get Error on the second call this func ===>>> getProperty(X 'm') <=== cauze we don't have key 'm' on obj X

// const x = { a: 1, b: 2, c: 3, d: 4 };

// function getProperty(obj, key) {
//     return obj[key]
// }

// getProperty(x, 'a');
// getProperty(x, 'm');







































// SOLUTION

// function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
//     return obj[key]
// }































// 2) What type will be in T1 and in T2

const a = {
    x: 1,
    y: '2'
}

type T1 = typeof a

type T2 = keyof T1





















// 3) Write ReadOnlyOwn which will make all keys readonly.  
// MAPPED TYPES (Readonly)

// type User = {
//   id: number;
//   name: string;
// };

// type ReadonlyUser = ReadOnlyOwn<User>;

// const user: ReadonlyUser = {
//   id: 1,
//   name: 'Alice'
// };

// user.id = 2;  // error (because readonly property)



































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

































// 4) Write RequiredOwn which will make all keys required  
// MAPPED TYPES (Required)

// type User = {
//   id?: number;
//   name?: string;
// };

// type RequiredUser = RequiredOwn<User>;

// const user: RequiredUser = { // error, there is no field "name")
//   id: 1,
// };



































// SOLUTION

// type RequiredOwn<T> = {[K in keyof T]-?: T[K]}

// type User = {
//   id?: number;
//   name?: string;
// };

// type RequiredUser = RequiredOwn<User>;

// const user: RequiredUser = { // error
//   id: 1,
// };


























//  5) Write something of DeepReadonly<T>
//  DeepReadonly<T> - makes all properties and nested objects 'readonly'

// type User = {
//   id: number;
//   name: string;
//   object: {
//     age: number,
//     city: string,
//   }
// };

// type DeepReadonlyUser = DeepReadonly<User>;

// const user: DeepReadonlyUser = {
//   id: 1,
//   name: 'string',
//   object: {
//     age: 2,
//     city: 'Minsk',
//   },
// };

// user.object.age = 15; // error, "age" - readonly too






























// SOLUTION

// type DeepReadonly<T> = {
//   readonly [K in keyof T]: T[K] extends object
//     ? T[K] extends Function
//       ? T[K]
//       : DeepReadonly<T[K]>
//     : T[K];
// };

// type User = {
//   id: number;
//   name: string;
//   object: {
//     age: number,
//     city: string,
//   }
// };

// type DeepReadonlyUser = DeepReadonly<User>;

// const user: DeepReadonlyUser = {
//   id: 1,
//   name: 'string',
//   object: {
//     age: 2,
//     city: 'Minsk',
//   },
// };

// user.object.age = 15; // error


















































// 6) CONDITION

// type User = {
//   name: string;
// }

// type Manager = {
//   name: string;
//   token: string;
// }

// function login(user: Manager | User) {
//   console.log(user.name);

//   console.log(user.token); // fix this error
// }

















































// SOLUTION

// type User = {
//   name: string;
// }

// type Manager = {
//   name: string;
//   token: string;
// }

// function login(user: Manager | User) {
//   console.log(user.name);

//   if ('token' in user) {
//     console.log(user.token);
//   }
// }

































// 7) Omit

// type MyOmit = {

// }

// interface Person {
//   name: string;
//   age: number;
//   address: string;
// }

// // Удалим 'age' из интерфейса Person
// type PersonWithoutAge = MyOmit<Person, 'age'>;

// const person: PersonWithoutAge = {
//   name: 'John',
//   address: '123 Main St',
// };



























// SOLUTION


// type MyOmit<T, K extends keyof T> = {[P in Exclude<keyof T, K>]: T[P]}




























// 8) Pick

// type MyPick = {
    
// }

// interface Person {
//   name: string;
//   age: number;
//   address: string;
// }

// // Теперь мы используем наш собственный MyPick
// type PersonNameAndAddress = MyPick<Person, 'name' | 'address'>;

// const person: PersonNameAndAddress = {
//   name: 'John',
//   address: '123 Main St',
// };


































// SOLUTION


// type MyPick<T, K extends keyof T> = { [P in K]: T[P] }