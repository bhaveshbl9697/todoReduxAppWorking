export const addTodo = ( data ) => {
          return {
                    type: "ADD_TODO",
                    payload: {
                              id: new Date().getTime().toString(),
                              data: data,
                              isComplete: false,
                              dateAndTime: 'Date :- ' + new Date().getFullYear() + '-' + ( new Date().getMonth() + 1 ) + '-' + new Date().getDate() + '  Time :-' + new Date().getHours() + ':' + ( new Date().getMinutes() + 1 ) + ':' + new Date().getSeconds()
                    }
          }
}
export const deleteTodo = ( id ) => {
          return {
                    type: "DELETE_TODO",
                    id
          }
}
export const completeTodo = ( id, isComplete ) => {
          return {
                    type: "COMPLETE_TODO",
                    id,
                    isComplete
          }
}
export const updateTodo = ( id, newValue, complete ) => {
          return {
                    type: "UPDATE_TODO",
                    payload: {
                              id: id,
                              data: newValue,
                              isComplete: complete
                    }

          }
}