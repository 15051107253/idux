---
category: components
type: 数据展示
title: Tabs
subtitle: 标签页
order: 0
---



## API

### IxTabs

#### IxTabsProps

| 名称 | 说明 | 类型  | 默认值 | 全局配置 | 备注 |
| --- | --- | --- | --- | --- | --- |
| `v-model:selectedKey` | 选中标签的`key`值 | `string \| number`  | - | - | - |
| `forceRender` | 内容被隐藏时是否渲染 DOM 结构 | `boolean` | `false` | - | - |
| `mode` | 当`type`为`segment`时按钮的样式 | `'default' \| 'primary'` | `'default'` | - | - |
| `placement` | 标签的方位 | `'top' \| 'start' \| 'end' \| 'bottom'` | `'top'` | - | 其他类型仅在type为`line`生效 |
| `type` | 标签的类型 | `'card' \| 'line' \| 'segment'` | `'card'`| - | - |
| `onTabClick` | 标签被点击的回调 | `(key: string \| number, evt: Event) => void`| - | - | - |
| `onPreClick` | 滚动状态下，Pre按钮被点击的回调 | `(evt: Event) => void`| - | - | - |
| `onNextClick` | 滚动状态下，Next按钮被点击的回调 | `(evt: Event) => void`| - | - | - |

#### IxTabProps

| 名称 | 说明 | 类型  | 默认值 | 全局配置 | 备注 |
| --- | --- | --- | --- | --- | --- |
| `disabled` | 是否禁用当前标签 | `boolean` | `false` | - | - |
| `forceRender` | 内容被隐藏时是否渲染 DOM 结构 | `boolean` | `false` | - | - |
| `key` | 被选中时标签的`key`值 | `boolean` | `false` | - | - |
| `title` | 标签内容 | `string \| #title` | - | - | - |