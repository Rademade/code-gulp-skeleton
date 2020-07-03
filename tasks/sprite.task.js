import { src, dest }                from 'gulp';
import svgSprite                    from 'gulp-svg-sprite';
import { DIST_DIR, ROOT_ICONS_DIR } from './helpers/variables';

export const spriteTask = () => {
  return src(ROOT_ICONS_DIR + '**/*.svg')
    .pipe(svgSprite({
      mode: {
        stack: {
          sprite: "../sprite.svg"
        }
      }
    }))
    .pipe(dest(DIST_DIR))
};
