const gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer');

// crear tareas 
 
gulp.task('sass',()=>
    // gulp.src('./scss/*.scss')
    gulp.src('./scss/style.scss')
        .pipe(sass({
            outputStyle: 'compact',
            sourceComments: true
        }))
        .pipe(autoprefixer({
            versions:['last 2 browsers']
        }))
        .pipe(gulp.dest('./css'))
);

// llamar a la tarea
gulp.task('default', () =>{
    gulp.watch('./scss/style.scss',['sass']);
})
