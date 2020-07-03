import {series, watch, parallel} from 'gulp';

import {pugTask} from './tasks/pug.task';
import {cssManifestTask, cssComponentsTask} from './tasks/css.task';
import {jsLibrariesTask, jsTask} from './tasks/js.task';
import {cleanTask} from './tasks/clean.task';
import {imagesTask} from './tasks/image.task';
import {spriteTask} from './tasks/sprite.task';
import {browserSyncTask} from './tasks/browser-sync.task';

import {browserSyncInstance} from './tasks/helpers/browser-sync-instance';
import {DIST_DIR, ROOT_CSS_DIR, ROOT_ICONS_DIR, ROOT_IMAGES_DIR, ROOT_TEMPLATES_DIR} from './tasks/helpers/variables';
import {publicTask} from "./tasks/public.task";

const watchTask = () => {
  watch(ROOT_TEMPLATES_DIR + '**/*.pug', series(pugTask));
  watch(ROOT_TEMPLATES_DIR + '**/*.js', series(jsTask));
  watch(ROOT_IMAGES_DIR + '**/*.*', series(imagesTask));
  watch(ROOT_CSS_DIR + '**/*.css', series(cssManifestTask));
  watch(ROOT_TEMPLATES_DIR + '**/*.css', series(cssComponentsTask));
  watch(ROOT_ICONS_DIR + '**/*.*', series(spriteTask, pugTask));
  watch(DIST_DIR + '**/*.*').on('change', browserSyncInstance.reload);
};

export const build = series(
  cleanTask,
  pugTask,
  publicTask,
  cssManifestTask,
  cssComponentsTask,
  jsTask,
  jsLibrariesTask,
  imagesTask,
  spriteTask
);

export default series(
  cleanTask,
  pugTask,
  publicTask,
  cssManifestTask,
  cssComponentsTask,
  jsTask,
  jsLibrariesTask,
  imagesTask,
  spriteTask,
  parallel(
    browserSyncTask,
    watchTask
  )
);
