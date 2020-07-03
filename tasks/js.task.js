import { src, dest }                from 'gulp';
import { DIST_JS_DIR, ROOT_JS_DIR, ROOT_TEMPLATES_DIR } from './helpers/variables';
import rename from 'gulp-rename';

export const jsTask = () => {
  return src([
    ROOT_JS_DIR + '**/*.js',
    ROOT_TEMPLATES_DIR + '**/*.js'
  ])
    .pipe(rename({dirname: ''}))
    .pipe(dest(DIST_JS_DIR))
};

const MODULES_PATH = 'node_modules/';

export const jsLibrariesTask = () => {
  return src([
    MODULES_PATH + 'jquery/dist/jquery.js',
    MODULES_PATH + 'slick-slider/slick/slick.js',
    MODULES_PATH + 'selectize/dist/js/standalone/selectize.js',
    MODULES_PATH + 'ion-rangeslider/js/ion.rangeSlider.js',
    MODULES_PATH + 'jquery-mask-plugin/dist/jquery.mask.js',
    MODULES_PATH + 'selectize/dist/js/standalone/selectize.js',
  ])
    .pipe(dest(DIST_JS_DIR))
};
