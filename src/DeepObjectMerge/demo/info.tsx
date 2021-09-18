import { DeepObjectMerge } from '@src/index';

//{ o: { a: 3 } }, { o: { b: 4 } }  => { o: {a: 3, b: 4}}
DeepObjectMerge({ o: { a: 3 } }, { o: { b: 4 } });


