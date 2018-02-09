require(['config'],function(){
    require(['jquery','common'],function($){
       $('#header_goods').load('../html/header.html');
       $('#footer_goods').load('../html/footer.html');
        
        //列表页ajax发起请求
            $.ajax({
                url:"../api/goodsList.php",
                dataType:'json',
                data:{
                    qty:12,
                    pageNo:1
                },
                success:function(data){
                    var res = data;
                    $('.list')[0].innerHTML = res.data.map(function(item){
                        return`<li data-id=${item.id} class="item">
                        <a href="../html/goodsDetails.html" class='goods_pic convey'><img class="img"src="${item.img}"/></a>
                        <p class="goods_price">￥${item.price}</p>
                        <p ><a class="goods_name convey" href="../html/goodsDetails.html">${item.name}</a></p>
                        <p ><a class="goods_desc convey" href="../html/goodsDetails.html">${item.description}</a></p>
                        <a class="add"><i></i>加入购物车</a>
                        <a class="fav"><i></i>收藏</a>
                        <a class="ask"><i></i></a>
                        </li>`
                    }).join('');


                    //分页获取数据
                    var page = document.querySelector('.goods_page');

                    
                    let pageQty = Math.ceil(res.total/res.qty);

                    page.innerText = '';
                    for(let i=1;i<=pageQty;i++){
                        let span = document.createElement('span');
                        span.innerText = i;
                        if(i===res.pageNo){
                            span.className = 'active';
                        }
                        page.appendChild(span);

                    }


                }
             
            })
        // 切换分页
            $('.goods_page')[0].onclick = function(e){
                if(e.target.tagName.toLowerCase() === 'span'){
                    pageNo = e.target.innerText*1;
                     $.ajax({
                        url:"../api/goodsList.php",
                        dataType:'json',
                        data:{
                            qty:12,
                            pageNo:pageNo
                        },
                        success:function(data){
                            var res = data;
                            $('.list')[0].innerHTML ="";
                            $('.list')[0].innerHTML = res.data.map(function(item){
                                return`<li data-id=${item.id} class="item">
                                <a href="../html/goodsDetails.html" class='goods_pic convey'><img class="img"src="${item.img}"/></a>
                                <p class="goods_price">￥${item.price}</p>
                                <p><a class="goods_name convey" href="../html/goodsDetails.html">${item.name}</a></p>
                                <p><a class="goods_desc convey" href="href="../html/goodsDetails.html"">${item.description}</a></p>
                                <a class="add"><i></i>加入购物车</a>
                                <a class="fav"><i></i>收藏</a>
                                <a class="ask"><i></i></a>
                                </li>`
                            }).join('');


                        }
                    
                    })
                }
            }
        
        
       
        
        //传参
        
        $('.list').on('click','a img',function(){
            this.parentNode.href +='?'+this.parentNode.parentNode.getAttribute('data-id');
        })
        
    })
})