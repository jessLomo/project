require(['config'],function(){
    // 建议：有返回值的写前面
    require(['jquery'],function($){
        $btn = $('.submit');

        $btn.on('click',function(){
            $.ajax({
                url:'../api/sign.php',
                data:{
                    userphone:$('#tel').val(),password:$('#pwd_sign').val()
                },
                success:function(data){
                    console.log(data);
                    if(data === 'success'){
                        location.href = '../index.html';
                    }else if(data === 'fail'){
                        $('#tel').addClass('error').focus();
                    }
                }
            })
        })


    });
});
