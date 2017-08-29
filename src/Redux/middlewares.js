export const logger = store => next => action => {
    console.log('dispatching:', action);
    console.log('next state', store.getState());
    return next(action);
}

/*
 applyMiddleware source code details:

 var middlewareAPI = {
    getState: store.getState,
    dispatch: (action) => dispatch(action)
 }
 chain = middlewares.map(middleware => middleware(middlewareAPI))

 middlewareAPI will be applied on middlewares i.e.
  param 1:store =>  State: store.getState
  param 2:next => dispatch: (action) => dispatch(action)
  param 3:action => previous action, which will be transfer to another middleware
 */

export const crashReporter = store => next => action => {
    try {
        return next(action);
    }catch (error){
        console.log('caught an exception', error);
        throw error;
    }
}