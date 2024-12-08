const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));

gulp.task("sass", async () => {
  gulp
    .src("./src/sass/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./src/app/"));
});

gulp.task("watch", async () => {
  gulp.watch("./src/sass/*.scss", gulp.series("sass"));
});

gulp.task("default", gulp.parallel("sass", "watch"));
