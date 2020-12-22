# rxjs-operators

Rxjs 操作符扩展

## 安装

```shell
npm install @ndct/rxjs-operators
```

## 操作符

### start

> 在订阅开始时执行副作用
>
> callback 可以返回一个函数用于清理副作用, 清理函数将在 finalize 时执行

```typescript
start<T>(callback: () => unknown): MonoTypeOperatorFunction<T>
```

+ 参数

  | 名称     | 说明                   |
  | -------- | ---------------------- |
  | callback | 订阅开始时要调用的函数 |

+ 示例

  ```javascript
  ajax(`https://api.github.com/users?per_page=5`).pipe(
    start(() => {
      this.loading = true
      return () => this.loading = false
    })
  ).subscribe()
  ```

  

