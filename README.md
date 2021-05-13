# Reactive

In many context you want to build a reactive App.
RXJS is too big for many projects, we should have something much simpler.

It's the goal of Reactive!

Inspired by Vue Composition API, this library can be use anywhere it's not coupled to a framework.

```typescript
import { ref, computed } from 'reactive';

const a = ref(10);
const b = ref(12);
const c = computed(() => a.value + b.value);

console.log(c.value); // display: 22

c.subscribe(result => console.log(result));

a.value = 11; // this will trigger the computation of "c" and will display: 23
```