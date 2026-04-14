export function createStore<TState, TAction extends { type: string }>(
    reducer: (state: TState, action: TAction) => TState,
    initialState: TState
) {
    let state = initialState;
    let listeners: Array<() => void> = [];

    const getState = () => state;

    const dispatch = (action: TAction) => {
        state = reducer(state, action);
        listeners.forEach((listener) => listener());
    };

    const subscribe = (listener: () => void) => {
        listeners.push(listener);

        return () => {
            listeners = listeners.filter((l) => l !== listener);
        };
    };

  return { getState, dispatch, subscribe };
}
