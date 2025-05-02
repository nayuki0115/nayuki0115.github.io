# JavaScript 和 TypeScript 型別

###### tags: `JavaScript` `TypeScript`

## JavaScript 型別
一共有 8 種型別，原始類型 7 種，引用類型 1 種
`Undefined`
`Null`
`Boolean`
`String`
`Symbol`
`Number`
`BigInt`
`Object`

### 原始類型（Primitive Types）
原始類型是不可變的，當你對原始類型的值進行操作時，實際上是在創建一個新的值，而不是改變原來的值。 換句話說就是 call by value

#### Undefined
- 表示變數已經聲明，但尚未賦值
- 也可以是函數沒有返回值時的返回結果
- JavaScript 內部會自動將未賦值的變數初始化為 undefined

#### Null
- 表示「空值」或「沒有任何值」，通常用來表示意圖上缺少對象或數據
- 是一個由程序員明確賦值的特殊對象類型，通常用來表示某個變數預期應該存放對象，但當前沒有任何對象


##### Undefined 和 Null 比較
| - | Undefined | Null |
| :--------: | :--------: | :--------: |
|  if(!)   |  false   |  false   |
|  Number()   |  NaN    |   0   |
|  typeof   |  undefined    |   object   |

```javascript=
console.log(null == undefined) // true
console.log(null === undefined) // false
```

#### Boolean
true 和 false

#### String
用來表示字符串，JavaScript 中的字符串是不可變的

#### Symbol
表示一個唯一的標識符。主要用於對象屬性的鍵，避免屬性名的衝突

#### Number
- 這是 JavaScript 中最常用的數字類型，它基於 IEEE 754 標準的雙精度浮點數表示（64 位），能夠表示非常大的數字，但它有一定的限制
- 最大範圍是約 `Number.MAX_VALUE`（約 `1.79 × 10^308`），最小範圍是 `Number.MIN_VALUE`（約 `5 × 10^-324`）。此外，它無法精確表示非常大的整數（大於 `2^53 - 1`）
- 任何超過該範圍的數字將變為 `Infinity` 或` -Infinity`
- 在處理大數字或需要高精度計算時可能會失去精度，超過此範圍(`Number.MAX_SAFE_INTEGER` 是 `2^53 - 1`)的整數將無法保持精確

#### BigInt
這是 ES2020 引入的一個新類型
- bigint 類型用於表示非常大的整數，範圍是無窮的（僅受內存限制）。它不會受到 number 類型的精度限制，可以精確表示任意大小的整數。
- 可以表示比 `2^53 - 1` 更大的整數，而不會損失精度。
- 專門設計來存儲大整數，不會有精度丟失問題

##### number 和 bigint 使用方式
- number
number 是 JavaScript 中預設的數字類型，並且可以進行算術運算（加、減、乘、除等）
```javascript=
let x = 42  // number 類型
let y = 1.23 // number 類型
let sum = x + y  // 正常運算
```

- bigint
bigint 用來表示大整數，使用時需要在數字後加上 n
```javascript=
let bigNum = 9007199254740992n  // bigint 類型
let bigSum = bigNum + 10n       // bigint 之間的運算
```

bigint 類型不與 number 類型進行運算。若將 number 和 bigint 混合使用，將會報錯
```javascript=
let num = 5
let bigIntNum = 10n
let result = num + bigIntNum  // 會報錯
```

`number`: 用於日常數學運算、統計、計算和所有需要浮點數的情況
`bigint`: 用於處理非常大的整數，通常是超過 `Number.MAX_SAFE_INTEGER` 的情況，如金融應用、大數據處理、密碼學等

### 引用類型（Reference Types）
用類型的值是可變的，並且對應的變數實際上存儲的是對象的引用，而不是對象本身，簡單來說就是 call by reference 

此類別的代表只有 `Object` （包括函數、數組等）
#### Object
用來表示複雜數據結構，可以包含多個值（屬性）。
JavaScript 中的對象包括普通對象、數組、函數等。

- 對象（Object）: 用於存儲鍵值對（key-value pairs）
- 數組（Array）: 用來存儲有序的數據集合
- 函數（Function）: 實際上也是一個對象，可以被當作參數傳遞或返回值

```javascript=
console.log(typeof []) // object
console.log(typeof function () {}) // function
```

### typeof 
typeof 可以辨識的型別有：`number`、`string`、`boolean`、`object`、`function`、`undefined`、`symbol`、`bigint`

https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Operators/typeof

#### 特殊
- null
```javascript=
typeof null //object
```

- 引用類型 ( Object、Array、Function )
```javascript=
typeof [] //object
```
判斷是 array 還是 object
```javascript=
let arr = [1, 2, 3, 4, 5]

let fn = () => {
  return 123
};

let obj = { foo: 123 }

Object.prototype.toString.call(arr) // [object Array]
Object.prototype.toString.call(fn)  // [object Function]
Object.prototype.toString.call(obj // [object Object]
```
```javascript=
Array.isArray([1, 2, 3]) // true
Array.isArray({ foo: 123 }) // false
```


## TypeScript 型別
TypeScript 是 JavaScript 的集合，除了支持 JavaScript 中的所有數據類型外，還有一些額外的型別特性

https://www.typescriptlang.org/docs/handbook/2/everyday-types.html

### 基本型別
與 [JavaScript](#JavaScript-型別) 相同

`Undefined`
`Null`
`Boolean`
`String`
`Symbol`
`Number`
`BigInt`
`Object`

### 其他型別
#### any
表示任何類型。使用 any 可以讓變數跳過靜態類型檢查

```typescript=
let data: any = 42;
data = "Hello";
data = true;
```

#### unknown
3.0 版本[新增](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-0.html#new-unknown-top-type)
- 使用 unknown 類型的變數時，一定要有型別註記才能使用該變數
- 無法重新賦值給 unknown 或 any 外的型別

```typescript=
let val: unknown
val = true            // OK
val = 50               // OK
val = 'Hihi'    // OK
val = []               // OK
val = {}              // OK
val = null             // OK
val = undefined       // OK
```

給 unknown 賦值，會發現只能給 any 和 unknown
```typescript=
let val: unknown

let val1: unknown = val   // OK
let val2: any = val       // OK
let val3: boolean = val   // Error
let val4: number = val    // Error
let val5: string = val    // Error
let val6: object = val    // Error
let val7: [] = val     // Error
```

如何解決？
```typescript=
let unknownFlag: unknown

let val: string = unknownFlag // Error

// 型別檢查
if(typeof unknownFlag === 'string') {
  val = unknownFlag
}
```


##### any 和 unknown
unknown 和 any 一樣可以接受任何型別賦值
差異在型別檢查嚴格程度 (any 可以隨意)

#### never
2.0 版本新增
不存在值的型別，用在
- 無法結束的函式 (例如：無窮迴圈)
 
result 會被判斷為 never 型別
```typescript=
const result = ()=> {
  while (true) {}
}
```
- 例外中斷 (throw error)
```typescript=
const result: never = (message: string)=> {
  throw new Error(message)
}
```

#### void
用在沒有返回值的函數

result 會被判斷為 void 型別
```typescript=
const result = ()=> {
  console.log('hihi')
}
```

```typescript=
const logMessage:void = (message: string) => {
  console.log(message)
}
```

#### tuple（元組）
固定長度且各元素可以是不同型別的陣列

```typescript=
let tuple: [string, number] = ["Alice", 25];
```

#### enum（枚舉）
列舉型別，可以用來定義一組具名的常數
```typescript=
enum Color {
  Red = 1,
  Green = 2,
  Blue = 3,
}
let color: Color = Color.Green;

```

#### 類型聯合（Union Types）
允許一個變數接受多種型別中的任意一種

```typescript=
let value: string | number;
value = "Hello";
value = 42;
```

#### 類型交集（Intersection Types）
允許將多個型別結合成一個型別，要求該型別同時滿足多個類型的條件

```typescript=
interface Person {
  name: string;
}
interface Employee {
  id: number;
}
type EmployeePerson = Person & Employee;
const emp: EmployeePerson = { name: "Alice", id: 123 };

```
#### Literal Types
類型字面量允許你指定某個變數的具體值，而不僅僅是其類型

```typescript=
let direction: "left" | "right";
direction = "left";  // 正確
direction = "up";    // 錯誤，因為 "up" 不是字面量 "left" 或 "right"
```

#### 類型別名（Type Aliases）
給某個型別取名字，使代碼更具可讀性和重用性

類型別名可以用來指代基本類型、物件類型、聯合類型、元組

用途：
- 簡化複雜型別：當型別非常複雜或重複出現時，可以創建類型別名來簡化代碼
- 聯合型別和交叉型別：對聯合型別（|）和交叉型別（&）的複雜型別進行封裝

```typescript=
type Point = { x: number, y: number };  // 定義物件型別的別名
type ID = string | number;  // 定義聯合型別的別名

const pointA: Point = { x: 5, y: 10 };
const userId: ID = 123;  // 可以是數字或字串
```

#### 索引簽名（Index Signatures）
允許對物件的鍵和值進行類型定義，適用於動態鍵名的物件

```typescript=
interface StringDictionary {
  [key: string]: string;
}
let dictionary: StringDictionary = { key1: "value1", key2: "value2" };
```

#### 泛型（Generics）
```typescript=
function identity<T>(arg: T): T {
  return arg;
}
let result = identity(42);  // result 的類型為 number


const identity = <T>(arg: T): T => arg;
const result = identity(42);  // result 的類型為 number
```



#### Interface 和 Type
用來定義物件的結構和型別
```typescript=
interface Person {
  name: string;
  age: number;
}

const person: Person = { name: "Alice", age: 30 };

```



#### 類型守衛（Type Guards）和條件類型




|特徵	|JavaScript	|TypeScript|
| -------- | -------- | -------- |
|型別檢查|	動態型別，執行時才檢查型別錯誤。|	靜態型別，編譯時檢查型別錯誤。|
|型別指定|	不需要顯式指定型別，型別在執行時決定。	|支援顯式型別指定，並提供型別推斷。|
|型別安全|	沒有型別安全機制，容易出現錯誤。|	提供靜態型別檢查，有助於減少型別錯誤。|
|型別系統擴展|	僅支援基本型別，沒有自定義型別。|	支援多種型別擴展，如 enum、tuple、interface 等。|
|兼容性|	JavaScript 可以直接執行在瀏覽器或 Node.js 環境中。|	TypeScript 需要先編譯成 JavaScript 才能執行。|

## 參考文章
- [JS基礎：Primitive type v.s Object types](https://medium.com/@jobboy0101/js%E5%9F%BA%E7%A4%8E-primitive-type-v-s-object-types-f88f7c16f225)
- [JavaScript 有哪些資料型別 (data types)?](https://www.explainthis.io/zh-hant/swe/js-data-types)
- [TypeScript 資料型別](https://ithelp.ithome.com.tw/articles/10223315)