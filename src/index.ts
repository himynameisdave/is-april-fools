import { APRIL, FOOLS } from './constants';


/**
 *  Returns true if today is April 1st
 *
 *  @returns {Boolean} - true if is April 1st, false otherwise
 */
const isAprilFools = (): boolean => {
  const today = new Date();
  return today.getMonth() === APRIL && today.getDate() === FOOLS;
};

export default isAprilFools;
