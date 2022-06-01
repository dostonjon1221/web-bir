const header = document.querySelector('.site-header')
window.addEventListener('scroll', (e)=>{
   if(window.scrollY > header.clientHeight){
       header.classList.add('white-header')
   }else{
       header.classList.remove('white-header')
   }
})