let timer = null;
const start = () => (dispatch) => {
  clearInterval(timer);
  timer = setInterval(() => dispatch(tick()), 1000);
  dispatch({ type: TIMER_START });
  dispatch(tick())
}
const tick = () => { type: TIMER_TICK };
const stop = () => {
  clearInterval(timer);
  return { type: TIMER_STOP };
}
