const initialState = {};

export default (state = initialState, { type, payload }) => {
  const matches = /(.*)_(REQUEST|FAILURE)/.exec(type);

  if (!matches) return state;

  const [, requestName, requestState] = matches;

  if (requestState === 'FAILURE') {
    return {
      ...state,
      [requestName]: payload,
    };
  }

  const { [requestName]: data, ...rest } = state;
  return rest;
};
