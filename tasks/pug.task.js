import {src, dest} from 'gulp';
import pug from 'gulp-pug';
import inlineCss from 'gulp-inline-css';
import {ROOT_TEMPLATES_DIR, DIST_DIR} from './helpers/variables';
import {browserSyncInstance} from './helpers/browser-sync-instance';

export const pugTask = () => {
  return src(ROOT_TEMPLATES_DIR + '*.pug')
    .pipe(pug({
      pretty: true
    }))
    .pipe(inlineCss({
      removeStyleTags: false
    }))
    .pipe(dest(DIST_DIR))
    .pipe(browserSyncInstance.stream())
};
