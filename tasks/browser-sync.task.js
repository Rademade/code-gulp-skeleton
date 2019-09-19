import { DIST_DIR }            from './helpers/variables';
import { browserSyncInstance } from './helpers/browser-sync-instance';

export const browserSyncTask = () => {
  return browserSyncInstance.init({
    open: false,
    server: {
      baseDir: DIST_DIR
    }
  })
};
