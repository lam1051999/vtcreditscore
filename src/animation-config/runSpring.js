const {
  Clock,
  Value,
  block,
  startClock,
  cond,
  eq,
  set,
  spring,
  SpringUtils,
} = require('react-native-reanimated');
const {State} = require('react-native-gesture-handler');

function runSpring(
  value,
  springConfig = SpringUtils.makeDefaultConfig(),
  velocity = 0,
  gestureState = new Value(State.UNDETERMINED),
) {
  const clock = new Clock();
  const state = {
    finished: new Value(0),
    velocity: new Value(0),
    position: new Value(0),
    time: new Value(0),
  };
  const config = {
    toValue: new Value(0),
    damping: 15,
    mass: 1,
    stiffness: 200,
    overshootClamping: false,
    restSpeedThreshold: 1,
    restDisplacementThreshold: 1,
    ...springConfig,
  };
  return block([
    startClock(clock),
    set(config.toValue, value),
    cond(
      eq(gestureState, State.ACTIVE),
      [set(state.velocity, velocity), set(state.position, value)],
      spring(clock, state, config),
    ),
    state.position,
  ]);
}

export default runSpring;
