import {filter, take, map, toArray, range} from "rxjs";

range(1, 20) // observable: 관찰될 수 있는 것, 관찰되는 대상
  .pipe(
    filter(n => n % 2 === 0 ),
    take(5),
    map(n => Math.pow(n, 2)),
    toArray(), // 통과하는 값들을 배열로 모아 내보냄
    map(arr => arr.join(', '))
  )
.subscribe(console.log)
