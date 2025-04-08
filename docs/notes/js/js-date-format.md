# JavaScript 日期處理與格式化

###### tags: `JavaScript `

## 日期格式化 (Date物件)

### Safari 
> Safari 接受的 `new Date` 格式與後端常見格式不同：
> - 後端常見格式：`xxxx-xx-xx xx:xx:xx.00000`
> - Safari 接受格式：`xxxx/xx/xxTxx:xx:xx`

#### 方法一：針對 Safari 截斷字串
```javascript
if (/Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent)) {
    return times.substr(0, 19);
}
```

#### 方法二：統一替換空格為 "T"
```javascript
 const date = new Date(typeof time === 'string' ? time.replace(/ /g, "T") : time);
```

### 單一日期格式化函數
```typescript
const padZero = (num: number) => num < 10 ? `0${num}` : `${num}`;

const formatSingleDate = (date: Date, formatType: 1 | 2 = 1): string => {
  const year = date.getFullYear();
  const month = padZero(date.getMonth() + 1);
  const day = padZero(date.getDate());
  const hours = padZero(date.getHours());
  const minutes = padZero(date.getMinutes());

  if (formatType === 1) return `${year}-${month}-${day}`; // YYYY-MM-DD
  if (formatType === 2) return `${year}-${month}-${day} ${hours}:${minutes}`; // YYYY-MM-DD hh:mm

  return '';
};
```


#### YYYY-MM-DD
> times 為 number 的情況有可能會是時間戳
```typescript
export function getFormatYMD(times: string || number) {
  let date = new Date(times)
  let dateYear = date.getFullYear();
  let dateMonth = date.getMonth() < 9 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1);
  let dateDate = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
  let todayFormat = `${dateYear}-${dateMonth}-${dateDate}`
  return todayFormat
}
```

####  YYYY-MM-DD hh:mm
```typescript
export function getFormatYMDHM(times: string) {
  let date = new Date(times);
  let dateYear = date.getFullYear();
  let dateMonth = date.getMonth() < 9 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1);
  let dateDate = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
  let dateHour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
  let dateMin = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
  return `${dateYear}-${dateMonth}-${dateDate} ${dateHour}:${dateMin}`;
}
```


## 日期範圍格式化
### 日期範圍預設值
```typescript
const getDefaultDateRange = (): [Date, Date] => {
  const endDate = new Date(); // 當前時間
  endDate.setHours(23, 0, 0, 0); // 設為 23:00
  const startDate = new Date(endDate);
  startDate.setDate(endDate.getDate() - 30); // 往前推 30 天
  startDate.setHours(0, 0, 0, 0); // 設為 00:00
  return [startDate, endDate];
};
```

### 格式化日期範圍
```typescript
const formatDateRange = (dates: [Date, Date] | Date, formatType: 1 | 2 | 3): string => {
  const padZero = (num: number) => num < 10 ? `0${num}` : `${num}`;

  const formatSingle = (date: Date): string => {
    const year = date.getFullYear();
    const month = padZero(date.getMonth() + 1);
    const day = padZero(date.getDate());
    const hours = padZero(date.getHours());
    const minutes = padZero(date.getMinutes());

    if (formatType === 1) return `${year}-${month}-${day}`;
    if (formatType === 2) return `${year}-${month}-${day} ${hours}:${minutes}`;
    if (formatType === 3) return `${year}-${month}-${day}`;
    return '';
  };

  if (Array.isArray(dates)) {
    const startDate = formatSingle(dates[0]);
    const endDate = formatSingle(dates[1]);
    if (formatType === 1) return `${startDate}~${endDate}`; // YYYY-MM-DD~YYYY-MM-DD
    if (formatType === 2) return `${startDate}~${endDate}`; // YYYY-MM-DD hh:mm~YYYY-MM-DD hh:mm
    if (formatType === 3) return endDate; // YYYY-MM-DD (僅結束日期)
  } else {
    return formatSingle(dates); // 單一日期
  }
  return '';
};
```

#### 使用範例
```javascript
const dateTime = [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)];
console.log(formatDateRange(dateTime, 1)); // "2000-11-10~2000-11-11"
console.log(formatDateRange(new Date(), 3)); // "2025-03-09"
```

### 特規
後端想要拿到的格式：
```typescript=
{
  time_start_day: string
  time_start_hour: string
  time_end_day: string
  time_end_hour: string
}
```
```typescript=
const getDateRangeObject = (dates: [Date, Date]): {
  time_start_day: string;
  time_start_hour: string;
  time_end_day: string;
  time_end_hour: string;
} => {
  const padZero = (num: number) => num < 10 ? `0${num}` : `${num}`;
  const start = dates[0];
  const end = dates[1];

  return {
    time_start_day: `${start.getFullYear()}-${padZero(start.getMonth() + 1)}-${padZero(start.getDate())}`,
    time_start_hour: `${padZero(start.getHours())}:${padZero(start.getMinutes())}`,
    time_end_day: `${end.getFullYear()}-${padZero(end.getMonth() + 1)}-${padZero(end.getDate())}`,
    time_end_hour: `${padZero(end.getHours())}:${padZero(end.getMinutes())}`
  };
};
```

## 字串格式轉換
### xxxx-xx-xx → xxxx年xx月xx日
> _ 是整個符合的字串，也就是 "1921-05-23"。
year 是第一個捕獲組 (\d{4}) 的匹配結果，即 "1921"。
month 是第二個捕獲組 (\d{2}) 的匹配結果，即 "05"。
day 是第三個捕獲組 (\d{2}) 的匹配結果，即 "23"。

```javascript=
const dateString = "1921-05-23";
const formattedDate = dateString.replace(
  /(\d{4})-(\d{2})-(\d{2})/,
  (_, year, month, day) => `${year}年${month}月${day}日`
);
// 結果: "1921年05月23日"
```


## 日期切換

### 上下月
```javascript
export function getFormatTransYM(times: string, type: 'prev' | 'next'): string {
  let date = new Date(times);
  let dateYear = date.getFullYear();
  let dateMonth: string;

  if (type === 'prev') {
    let tempMonth = date.getMonth() < 9 ? "0" + date.getMonth() : date.getMonth();
    if (tempMonth === "00") {
      dateYear -= 1;
      dateMonth = "12";
    } else {
      dateMonth = tempMonth;
    }
  } else {
    let tempMonth = date.getMonth() + 2 < 10 ? "0" + (date.getMonth() + 2) : (date.getMonth() + 2);
    if (tempMonth === "13") {
      dateYear += 1;
      dateMonth = "01";
    } else {
      dateMonth = tempMonth;
    }
  }
  return `${dateYear}-${dateMonth}`;
}
```

## 日期比較與驗證
### 比較日期

```
const date1 = new Date('2022-10-23');
const date2 = new Date('2022-10-22');

console.log(date1 > date2);  // true
console.log(date1 >= date2); // true
console.log(date1 < date2);  // false
console.log(date1 <= date2); // false
```
[可參考](https://www.delftstack.com/zh-tw/howto/javascript/how-to-compare-two-dates-with-javascript/)

## 檢查日期是否存在
```javascript=
function isExistDate(dateStr: string): boolean {
  let dateObj = dateStr.split('-'); // yyyy-mm-dd
  let limitInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  const theYear = parseInt(dateObj[0]);
  const theMonth = parseInt(dateObj[1]);
  const theDay = parseInt(dateObj[2]);
  const isLeap = new Date(theYear, 1, 29).getDate() === 29; // 閏年檢查

  if (isLeap) limitInMonth[1] = 29; // 閏年二月為 29 天
  return theDay <= limitInMonth[theMonth - 1];
}
```
[可參考](https://www.cythilya.tw/2017/05/19/javascript-is-date-exist/)


