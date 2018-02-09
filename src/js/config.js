require.config({
    paths:{
        'jquery':'../lib/jquery-3.2.1',
        'zoom':'../lib/jquery.gdsZoom/jquery.gdsZoom',
        // 'carousel':'../lib/jquery.lxCarousel/jquery.lxCarousel'
        // 'carousel':'../lib/bootstrap-3.3.7-dist/js/bootstrap'
    },

    shim:{
        'zoom':['jquery'],
        // 'carousel':{
        //     deps:["jquery"],
        //     exports:"jQuery.prototype.bootstrap"
        // }
    }
    // shim:{
    //     //设置它们之间的内部依赖
    //     'carousel':['jquery'],
    //     'common':['jquery']
    // }
    // shim:{
    //     'carousel':['jquery']
    // }
})