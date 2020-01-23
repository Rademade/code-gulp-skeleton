import { series, watch, parallel } from 'gulp';

import { pugTask }         from './tasks/pug.task';
import { cssTask }         from './tasks/css.task';
import { jsTask }          from './tasks/js.task';
import { cleanTask }       from './tasks/clean.task';
import { imagesTask }      from './tasks/image.task';
import { spriteTask }      from './tasks/sprite.task';
import { browserSyncTask } from './tasks/browser-sync.task';

import { browserSyncInstance }                                        from './tasks/helpers/browser-sync-instance';
import { DIST_DIR, ROOT_CSS_DIR, ROOT_ICONS_DIR, ROOT_TEMPLATES_DIR } from './tasks/helpers/variables';

const watchTask = () => {
  watch(ROOT_TEMPLATES_DIR + '**/*.pug', series(pugTask));
  watch(ROOT_CSS_DIR + '**/*.css', series(cssTask));
  watch(ROOT_ICONS_DIR + '**/*.css', series(spriteTask));
  watch(DIST_DIR + '**/*.*').on('change', browserSyncInstance.reload);
};

export const build = series(
  cleanTask,
  pugTask,
  cssTask,
  jsTask,
  imagesTask,
  spriteTask
);

export default series(
  cleanTask,
  pugTask,
  cssTask,
  jsTask,
  imagesTask,
  spriteTask,
  parallel(
    browserSyncTask,
    watchTask
  )
);
