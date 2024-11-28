# Table 表格

<preview path="./basic.vue" title="基础用法" description="组件的基础用法"></preview>

<preview path="./attrs.vue" title="表格属性配置" description="更多内置属性请参照element-plus"></preview>

<preview path="./hidePage.vue" title="不显示页码" description="单页表格可以配置初始值"></preview>

## Table API

### Table Attributes

| 属性名         |                                                    说明 |   类型   | 默认值 |
| -------------- | ------------------------------------------------------: | :------: | ------ |
| columns        |                                                      列 |  array   | []     |
| api            |                                            请求配置信息 |  object  |        |
| tableAttrs     |                                              表格配置项 |  object  |        |
| initData       |                                          表格数据初始值 |  array   | []     |
| getTableParams |                                    请求表格时带上的参数 | function |        |
| updateTableId  | 默认不会刷新表格的 key 值，开启后，每次请求都会更新 key | boolean  | false  |
| showPagination |                                            是否显示页码 | boolean  | false  |
