export const todoReducer = ( initialState, action ) => {
    switch ( action.type ) {
        case 'ABC':
            throw new Error('Action.type == ABC no esta implementada')

        case '[TODO] Add Todo':
           return [...initialState, action.payload]
        
        case '[TODO] Remove Todo':
            return initialState.filter(x => x.id != action.payload)

        case '[TODO] Toggle Todo':
            return initialState.map(x => { 
                if(x.id == action.payload)
                {
                    return{
                        ...x,
                        done: !x.done
                    }
                }

                return x;
            });

        default:
            return initialState;
    }
}