import {onBeforeUnmount, onMounted, ref} from 'vue';
export default function getMousePoint(){
  const x = ref(-1);
  const y = ref(-1);

  const getPoint = function(e:MouseEvent){
    x.value = e.pageX;
    y.value = e.pageY;
  }

  onMounted(()=>{
    window.addEventListener('click', getPoint);
  })
  onBeforeUnmount(()=>{
    window.removeEventListener('click', getPoint);
  })
  return {
    x,y
  };
}