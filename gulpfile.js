//引入本地安装的gulp
var gulp = require('gulp');
var sass = require('gulp-sass');

//创建gulp任务：编译sass
gulp.task('compileSass',function(){
    //查找sass文件
    gulp.src('./src/sass/*.scss')
    //通过管道传输，编译scss
    .pipe(sass({outputStyle:'expanded'}).on('error',sass.logError))
    //输出到硬盘
    .pipe(gulp.dest('./src/css/'))
})

//创建文件监听任务：当文件有修改则自动编译
gulp.task('jtSass',function(){

    gulp.watch('./src/sass/*.scss',['compileSass'])
})

//自动刷新页面
var browserSync = require('browser-sync');

gulp.task('server',function(){
    //启动一个自动刷新的服务器
    browserSync({
        //指定端口
        port:3232, 
        //代理服务器
        proxy:'http://localhost:32320',
        //监听文件修改
        files:['./src/**/*.html','./src/css/*.css','./src/api/*.php']
    })
    //监听sass修改
    gulp.watch('./src/sass/*.scss',['compileSass'])
})