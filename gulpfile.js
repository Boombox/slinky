// see https://css-tricks.com/gulp-for-beginners/
// lots more to setup but this will do for dev

var gulp = require('gulp');
// Requires the gulp-sass plugin
var sass = require('gulp-sass');

var browserSync = require('browser-sync').create();




gulp.task('sass', function() {
  return gulp.src('*.scss') // Gets all files ending with .scss in app/scss
    .pipe(sass())
    .pipe(gulp.dest('css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: '.'
    },
  })
})

// Gulp watch syntax
gulp.task('watch', ['browserSync', 'sass'], function (){
  //gulp.watch('*.scss', ['sass']);
  //dev
  gulp.watch('../**/*.scss', ['sass']);

  // Reloads the browser whenever HTML or JS files change
  gulp.watch('*.html', browserSync.reload);
  gulp.watch('*.js', browserSync.reload);
});
