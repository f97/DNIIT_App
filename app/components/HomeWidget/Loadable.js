/**
 *
 * Asynchronously loads the component for HomeWidget
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
