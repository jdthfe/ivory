import { Throttle } from "@src/index"


Throttle(() => {
    console.log('Throttle');
}, 1000);