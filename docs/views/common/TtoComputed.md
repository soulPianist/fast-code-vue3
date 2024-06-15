# TtoComputed 工具类型
递归对象把类型转化为（计算属性类型或不变）的类型，实现代码
`````typescript
type TBaseToComputed<T> = ComputedRef<T> | T

type IsBasicDataType = number | string | boolean | symbol | bigint

type TObjToComputed<T> = {
  [k in keyof T] : TtoComputed<T[k]>
} | ComputedRef<T> | T

// 该类型递归处理对象
type TtoComputed<T> =  T extends IsBasicDataType
  ? TBaseToComputed<T>
  : TObjToComputed<T>
`````