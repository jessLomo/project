require(['config'],function(){
    require(['jquery','common','zoom'],function($){
        $('#header_details').load('../html/header.html');
        $('#footer_details').load('../html/footer.html');

        var params = location.search;
        params = params.substring(1);

        //ajax利用id请求数据并写入页面
        $.ajax({
            url:"../api/goodsDetails.php",
                dataType:'json',
                data:{
                    id:params
                },
                success:function(data){
                    console.log(data);
                    data.forEach(function(item){
                        res = item;
                        console.log(item);
                    })
                   
                    $('.g_name').html(res.name);
                    $('.g_desc').html(res.description);
                    $('.g_price').html('￥'+res.price);
                    $('.big_pic img').attr('src',res.img);
                    $('.tab_pic img').eq(0).attr('src',res.img); 


                    //放大镜
                    // $('.big_pic').gdsZoom({
                    //     position:'right',
                    //     gap:5,
                    //     width:400,
                    //     height:400
                    // })
                }


                
                
        })
        // //tab标签切换
        //         var bigP = document.querySelector('#box img');
        //         var tabP = document.getElementsByClassName('tabP')[0];
        //         var tab = tabP.getElementsByTagName('img');

        //             tab[0].src = bigP.src;
        //             tab[0].className = 'active';
                    
        //             for(var j=0;j<tab.length;j++){

        //                 tab[j].onmouseover = function(){
                        
        //                      tab[0].className = '';
        //                      console.log(tab[0]);
        //                      this.className ='active';
        //                      bigP.src = this.src;
        //                 }
        //                 tab[j].onmouseout = function(){
        //                     this.className = '';
        //                 }
                    
        //         }
        //         var boxSelect= document.getElementsByClassName('boxSelect')[0];
        //         boxSelect.innerHTML = `<h3>${data.introduce}</h3>`+boxSelect.innerHTML;
        
        // 放大镜效果
        
        

    })
})