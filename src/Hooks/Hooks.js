import { useData, useMounted, useEffect, useComputed, useUpdated} from 'vue-hooks'
export default function clickedHook(){
const data = useData({ count:1 })
const double = useComputed(() => data.count * 2)
useMounted(()=> {console.log('mounted')});
useUpdated(()=> {console.log('updated')});
useEffect(()=> {
     console.log('DOM re-renders....')
 });
return {
     data, double
   }
}