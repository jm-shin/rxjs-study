import {mergeMap, pluck, range, retry, toArray} from "rxjs";
import {ajax} from "rxjs/internal/ajax/ajax";

range(1, 20).pipe(
  mergeMap(index => ajax(`http://localhost:3000/people/${index}`)
    .pipe(
      pluck('response', 'first_name'),
      retry(3),
    )
  , 4),
  toArray()
).subscribe(console.log)
