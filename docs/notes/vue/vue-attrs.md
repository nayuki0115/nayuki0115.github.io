# Vue $attrs 用法

https://cn.vuejs.org/guide/components/attrs.html#disabling-attribute-inheritance 

https://learnku.com/articles/69014


```
<div class="btn-wrapper">
  <button class="btn" v-bind="$attrs">click me</button>
</div>


<span>Fallthrough attribute: {{ $attrs }}</span>
```
