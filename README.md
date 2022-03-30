```
import { useF, useE } from 'use-f';
```
Replace useEffect with useF for functions without clean-up
```
useEffect(() => {
    // do something with arg1 and arg2
}, [arg1, arg2])

useF(arg1, arg2, () => {
    // do something with arg1 and arg2
})
```
```
useEffect(() => {
    doSomethingWithArg3()
}, [arg3])

useF(arg3, doSomethingWithArg3)
```
Or, replace with useE to keep clean-up
```
useE(arg4, () => {
    // do something with arg4 that requires clean-up
    return () => {
      // do clean-up
    }
})
```