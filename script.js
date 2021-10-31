
window.document.addEventListener('DOMContentLoaded',function(){


    document.querySelector('.hambur').addEventListener('click',function(e){
        const List = document.querySelector('.navbar > ul')
        if(List.classList.contains('active')){
           
            List.classList.remove('active')
        }else{
            List.classList.add('active')
        }
        document.querySelector('.hambur').classList.toggle('toggle')
    })
    
   window.onscroll =function(e){

        if(document.body.scrollTop>20 || document.documentElement.scrollTop > 20){
            document.querySelector('.gotoTop').style.display="block"
        }else{
            document.querySelector('.gotoTop').style.display = "none";
        }
        if( document.querySelector('.hambur').classList.contains('active')){
            e.preventDefault();
        }       
    }
    document.querySelector('.gotoTop').addEventListener('click',function(){
        window.scroll({top: 0, left: 0, behavior: 'smooth'})
        
        })
    

})