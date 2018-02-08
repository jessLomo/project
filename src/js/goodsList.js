require(['config'],function(){
    require(['jquery','common'],function($){
       $('#header_goods').load('../html/header.html');
       $('#footer_goods').load('../html/footer.html');
        
        //列表页ajax发起请求
            $.ajax({
                url:"../lib/goodsList.php",
                dataType:'json',
                success:function(data){
                    var res = data;
                    // <div class="shopping_box">
                    //       <a href="#" class="add"><i></i>加入购物车</a>
                    //       <a href="#" class="fav"><i></i>收藏</a>
                    //       <a href="#" class="ask"><i></i></a>
                    //   </div>
                    $('.list')[0].innerHTML += data.map(function(item){
                        return`<li data-id=${item.id} class="item">
                        <a href="#" class='goods_pic'><img class="img"src="${item.img}"/></a>
                        <p class="goods_price">￥${item.price}</p>
                        <p class="goods_name">${item.name}</p>
                        <p class="goods_desc">${item.description}</p>
                        <a class="add"><i></i>加入购物车</a>
                        <a class="fav"><i></i>收藏</a>
                        <a class="ask"><i></i></a>
                        </li>`
                    }).join('');
                }
            })
        
    })
})