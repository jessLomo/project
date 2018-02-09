require(['config'],function(){
    require(['jquery','common','zoom'],function($){
        //ajax将数据传到数据库
        $.ajax({
            url:"../api/shoppingCart.php",
                dataType:'json',
                data:{
                    id:params
                },
                success:function(data){
                    
                }
        })
    })