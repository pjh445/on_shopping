document.addEventListener("DOMContentLoaded", function(){

    //슬라이드 ****************************
    const $slide = document.getElementById("slide");

    setInterval(  ()=> toTop()  , 2500  );

    toTop = () => {
        $slide.style.transition = 'top 1s' ;
        $slide.style.top = '-300px';
            
        setTimeout( ()=> po()  ,1500);

        po=()=> {                
            $slide.style.top = 0;
            $slide.style.transition ='none'; 
            $slide.appendChild($slide.firstElementChild);                          
        }                
    }

    //공지사항/갤러리 제목클릭시 버튼활성화 및 해당 콘텐츠 보이기 ********************************
    const notigell_h2 = document.querySelectorAll("#notigell h2");
    notigell_h2.forEach( function( i,j ){
         i.addEventListener("click", function(){
                notigell_h2[0].classList.remove('hit');   
                notigell_h2[1].classList.remove('hit'); 
                i.classList.add('hit');
        });
    });



    //팝업********************************
    const $notice_a = document.querySelectorAll('#notice li a');
    const $black = document.getElementById('black');
    const $blackBtn = document.querySelector("#black button");

    //파트너쉽 영역의 이미지를 클릭하면 팝업 보이기
    $notice_a.forEach(  i  => {
        i.addEventListener("click" , () => { 
                $black.style.zIndex = 1;          
                $black.style.opacity = 1;
        });
    });

    //팝업 버튼을 클릭하면 팝업 감추기
    $blackBtn.addEventListener('click' , ()=> {        
        $black.style.opacity = 0;
        setTimeout( ()=> $black.style.zIndex = -1 , 800);
    });

}); /////////////////////////////////////////끝