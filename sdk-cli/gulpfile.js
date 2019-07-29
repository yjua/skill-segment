const gulp = require('gulp');
// 编译es6
const babel = require('gulp-babel');
// 编译commonjs
const browserify = require('browserify');
// 转换为stream的vinyl对象
const source = require('vinyl-source-stream');
// 转换为buffer的vinyl对象
const buffer = require('vinyl-buffer');
// 压缩
const uglify = require("gulp-uglify");
// 清除文件
const clean = require('gulp-clean');

function js(){
    return gulp.src('./app.js') // 输入 app.js
        .pipe(babel())		// babel 转换代码 
        .pipe(gulp.dest('./dist/'))	  	// 输出到dist文件夹下，会自动创建文件夹
}

function browser(){
    var b = browserify({
        entries: "dist/app.js"
    });
    return b.bundle()
        // 将常规流转换为包含 Stream 的 vinyl 对象
        .pipe(source("bundle.js"))
        // 将 vinyl 对象内容中的 Stream 转换为 Buffer
        .pipe(buffer())
        // 压缩
        .pipe(uglify())
        .pipe(gulp.dest("dist/"));
}

// 删除中间文件
async function del(){
    await gulp.src('./dist/app.js')
        .pipe(clean())
}

exports.js = js; // 输出task任务为js
exports.browser = browser;
// 顺序执行两个task
exports.es = gulp.series( js,browser,del)
