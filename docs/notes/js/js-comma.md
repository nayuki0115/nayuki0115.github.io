# JS 數字千分位

###### tags: `JS`

## Comma 數字千分位

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