import { ref, computed, watch } from '../reactive';

const first = ref(2);
const second = ref(4);
const sum = computed(() => first.value + second.value);
const sum2 = computed(() => sum.value * 2);

sum.subscribe((v) => console.log(v));
sum2.subscribe((v) => console.log(v));

watch(sum2, (s) => console.log('WATCH', s), { immediate: true });

first.value = 3; // this will trigger the sum computation

console.log('END');
