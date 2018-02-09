require(['config'],function(){
    require(['jquery','common','carousel'],function($){
            //ajax请求
            $.ajax({
                url:"../api/index.php",
                dataType:'json',
            
                success:function(data){
                    console.log(data);
                    console.log($('.g_list')[0]);
                    
                   let preserve= data.map(function(item){
                        console.log(item);
                        return`<li data-id=${item.id} class="fl">
                        <a href="#"><img src="${item.img}"/></a>
                        <p><a href="#">${item.name}</a></p>
                        <p>￥${item.price}</p>
                        </li>`
                    }).join('');
                   $('.g_list').append(preserve);
                }       
            }) 

            //轮播图
                // $('#carousel-example-generic').carousel({
                //     interval : 4000,
                // });
            

        
    })
})



        
