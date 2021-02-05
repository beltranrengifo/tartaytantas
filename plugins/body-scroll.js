import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock'

export const handleBodyScroll = ({ shouldLockScroll, shouldClear, ref }) => {
  if (shouldLockScroll) {
    disableBodyScroll(ref)
  } else if (shouldClear) {
    clearAllBodyScrollLocks()
  } else {
    enableBodyScroll(ref)
  }
}
