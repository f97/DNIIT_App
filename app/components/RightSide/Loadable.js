/**
 *
 * Asynchronously loads the component for RightSide
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
