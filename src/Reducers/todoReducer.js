const initialData = {
          list: []
}
const todoReducers = ( state = initialData, action ) => {
          switch ( action.type ) {
                    case "ADD_TODO":
                              const { id, data } = action.payload;
                              return {
                                        ...state,
                                        list: [
                                                  ...state.list,
                                                  {
                                                            id: id,
                                                            data: data,
                                                            isComplete: false
                                                  }
                                        ]
                              }

                    default: return state;

                    case "DELETE_TODO":
                              const newList = state.list.filter( ( elem ) => elem.id !== action.id )
                              return {
                                        ...state,
                                        list: newList
                              }

                    case "COMPLETE_TODO":
                              const completeTodos = state.list.map( ( todo ) => {
                                        if ( todo.id === action.id ) {
                                                  todo.isComplete = !todo.isComplete;
                                        }
                                        return todo;
                              } );
                              return {
                                        ...state,
                                        list: completeTodos
                              }
                    case "UPDATE_TODO": {
                              const { id, data, complete } = action.payload;
                              const newUpdatedValues = state.list.map( ( todo ) => {
                                        if ( todo.id === id ) {
                                                  todo.data = data;
                                                  todo.isComplete = complete;
                                        }
                                        return todo;
                              } );
                              return {
                                        ...state,
                                        list: newUpdatedValues
                              }
                    }
          }
}


export default todoReducers;