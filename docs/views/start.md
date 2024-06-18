# 开始
安装命令
```` js
npm install @only_you/fast-code-vue3 --save
````
main.ts引入
```` ts
import { createApp } from 'vue'
import fc from '@only_you/fast-code-vue3'
import '@only_you/fast-code-vue3/dist/style.css'
import el from 'element-plus' //fast-code-vue3组件基于element-plus 
import 'element-plus/dist/index.css'

const app = createApp(App)
app.use(fc)
app.use(el)

````

本地文档服务
```` js
npx docs
````
