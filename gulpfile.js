const gulp = require("gulp"),
  autoprefixer = require("gulp-autoprefixer"),
  sass = require("gulp-sass"),
  sourcemaps = require("gulp-sourcemaps"),
  uglify = require("gulp-uglify"),
  minifyCss = require("gulp-clean-css"),
  del = require("del"),
  imagemin = require("gulp-imagemin"),
  browserSync = require("browser-sync");
const { series, parallel } = require("gulp");

gulp.task("scss", () => {
  return gulp
    .src("app/scss/styles.scss")
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer())
    .pipe(minifyCss())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist/css"))
    .pipe(browserSync.stream());
});

gulp.task("js", () => {
  return gulp
    .src(["app/js/**/*.js"])
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist/js"))
    .pipe(browserSync.stream());
});

gulp.task("html", () => {
  return gulp
    .src([
      "app/*.html",
      "app/*.png",
      "app/*.jpg",
      "app/*.ico",
      "app/*.svg",
      //"app/browserconfig.xml",
      //"app/site.webmanifest"
    ])
    .pipe(gulp.dest("dist/"))
    .pipe(browserSync.stream());
});

gulp.task("serve", () => {
  return browserSync.init({
    server: ["./dist"],
  });
});

gulp.task("fonts", () => {
  return gulp.src("app/scss/fonts/**/*").pipe(gulp.dest("dist/css/fonts"));
});

gulp.task("images", () => {
  return gulp
    .src("app/images/*")
    .pipe(imagemin())
    .pipe(gulp.dest("dist/images"));
});

gulp.task("clean", () => {
  return del(["./dist/"]);
});

gulp.task("watch", () => {
  gulp.watch("app/scss/**/*.scss", gulp.series("scss"));
  gulp
    .watch("app/**/*.html")
    .on("change", gulp.series("build", browserSync.reload));
  gulp
    .watch("app/js/**/*.js")
    .on("change", gulp.series("build", browserSync.reload));
});

gulp.task("build", gulp.series("clean", "html", "scss", "images", "js"));

gulp.task("default", gulp.series("build", gulp.parallel("serve", "watch")));
