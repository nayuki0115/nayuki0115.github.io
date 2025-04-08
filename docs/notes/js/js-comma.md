# JS 數字千分位格式化

###### tags: `JavaScript `

## 方法一：使用正則表達式添加千分位逗號

```javascript=
const formatNumberWithComma =  (num: string | number) =>  {
  if (num === null || num === '' || Number.isNaN(num) == true || typeof num === 'undefined') {
    return num || 0
  }
  var parts = num.toString().split('.')
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  return parts.join('.')
}
```

* 這個函數接受字串或數字作為輸入
* 使用正則表達式 \B(?=(\d{3})+(?!\d)) 來匹配每三個數字前的位置，並插入逗號
* 如果輸入無效（如 null、undefined 或 NaN），則返回原始值或 0
* 保留小數點後的數字（如果有的話）

### 範例
```javascript
console.log(formatNumberWithComma(1234567.89)); // 輸出: "1,234,567.89"
console.log(formatNumberWithComma(1000));      // 輸出: "1,000"
console.log(formatNumberWithComma(null));      // 輸出: 0
```

## 方法二：使用 `toLocaleString` 格式化千分位
```javascript=
const formatNumber = (num: number) => {
  // 可選：根據數字大小轉換為 K 或 M 單位
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M'; // 百萬單位
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';    // 千單位
  }
  
  // 使用 toLocaleString 格式化千分位
  return num.toLocaleString('en-US', { 
    minimumFractionDigits: 0, // 最小小數位數
    maximumFractionDigits: 0  // 最大小數位數（無小數）
  });
};
```

* 使用 `toLocaleString('en-US')` 將數字格式化為美國格式（千分位使用逗號）
* 可透過選項 `minimumFractionDigits` 和 `maximumFractionDigits` 控制小數位數
* 新增功能：單位轉換
  * 如果數字大於等於 1,000,000，則轉換為「M」（百萬）單位，例如 1234567 會顯示為 1.2M
  * 如果數字大於等於 1,000 但小於 1,000,000，則轉換為「K」（千）單位，例如 1234 會顯示為 1.2K
  * 小於 1,000 的數字則直接顯示千分位格式
* .toFixed(1) 表示保留一位小數，增加可讀性

### 範例
```
console.log(formatNumber(1234567)); // 輸出: "1.2M"
console.log(formatNumber(1234));    // 輸出: "1.2K"
console.log(formatNumber(123.45));  // 輸出: "123"（無小數）
```
