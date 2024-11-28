# Form 表单

<preview path="./basic.vue" title="基础用法" description="组件的基础用法"></preview>
<preview path="./valid.vue" title="表单校验" description="配置校验规则"></preview>

### Form Attributes

| 属性名     |           说明 |  类型  | 默认值 |
| ---------- | -------------: | :----: | ------ |
| form       |       表单数据 | object | {}     |
| itemList   |     表单项配置 | array  | []     |
| tableAttrs |       表单属性 | object |        |
| initData   | 表格数据初始值 | array  | []     |

### itemList Attributes

| 属性名   |   说明 |  类型  | 默认值 |
| -------- | -----: | :----: | ------ |
| rowAttrs | 行属性 | object | {}     |

### 表单项 Attributes

| 属性名    |                     说明 |  类型   | 默认值 |
| --------- | -----------------------: | :-----: | ------ |
| hideLabel |                 标签显示 | boolean | false  |
| colAttrs  |       对应 formItem 属性 | object  |        |
| label     |                   标签名 | string  |        |
| events    |                     事件 | object  |        |
| prop      |                     键名 | string  |        |
| slots     |                    slots | object  |        |
| inner     | 对应不同控件类型的配置项 | object  |        |
