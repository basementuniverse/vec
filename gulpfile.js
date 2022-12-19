const { src, dest, series } = require('gulp');
const terser = require('gulp-terser');
const rename = require('gulp-rename');

// Build
function build() {
  return src('vec.js')
    .pipe(terser())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(dest('.'));
}

exports.default = series(build);
