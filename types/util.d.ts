import { ComputedRef } from 'vue'

export type TtoComputed<T> =  T extends IsBasicDataType  
  ? TBaseToComputed<T> 
  : TObjToComputed<T> 

export type TObjToComputed<T> = {
  [k in keyof T] : TtoComputed<T[k]>
} | ComputedRef<T> | T

export type TBaseToComputed<T> = ComputedRef<T> | T
type IsBasicDataType = number | string | boolean | symbol | bigint

