document.addEventListener('DOMContentLoaded',()=>{
    let username = document.querySelector('#tel');
    let btn = document.querySelector('.submit');
    let output = document.querySelector('.output')

    let arr_state = [200,304];
    btn.onclick = function(){
        let _username = username.value;
        let xhr = new XMLHttpRequest();
        xhr.onload = function(){
            if(arr_state.indexOf(xhr.status)>=0){
                let res = xhr.responseText;
                if(res === 'no'){
                    output.innerText ='请换';
                }else{
                    output.innerText ='ok';
                }
            }
        }
        xhr.open('get','../api/register.php?username='+_username);
        xhr.send();

    }
})       