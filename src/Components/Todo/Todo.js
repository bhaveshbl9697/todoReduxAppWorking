import React, { useState } from 'react';
import './Todo.css';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo, completeTodo, updateTodo } from '../../Actions/index';
import { TiEdit } from "react-icons/ti";
import { VscCheckAll } from "react-icons/vsc";
import { IoAddCircle } from "react-icons/io5";
import { RiDeleteBinFill } from "react-icons/ri";

export default function Todo () {
          const [ input, setInput ] = useState( '' );
          const list = useSelector( ( state ) => state.todoReducers.list );
          const dispatch = useDispatch();

          const updateEditTodo = ( edit ) => {
                    dispatch( updateTodo( edit.id, edit.value, edit.isComplete ) );
          }
          const toggleEditMode = ( todoId ) => {
                    const newTodos = list.map( ( todo ) => {
                              if ( todo.id === todoId ) {
                                        todo.editMode = !todo.editMode;
                              }
                              return todo;
                    } );
                    updateEditTodo( newTodos );
          };

          const editTodo = ( todoId, todoTitle ) => {
                    const newTodos = list.map( ( todo ) => {
                              if ( todo.id === todoId ) {
                                        todo.data = todoTitle;
                              }
                              return todo;
                    } );
                    updateEditTodo( newTodos );
          };

          return (
                    <>
                              <div className="container">
                                        <div className="main-div">
                                                  <h1 className="text-responsive"> Welcome React Todo's  Application </h1>

                                                  <div className="child-div">
                                                            <div className="additems">
                                                                      <input
                                                                                placeholder='Tell Me,What you Have to Do?'
                                                                                value={ input }
                                                                                onChange={ ( event ) => setInput( event.target.value ) }
                                                                                name='text'
                                                                                className='todo-input-add'
                                                                                autoComplete="off"
                                                                                title='You can Enter Todo Title here'
                                                                      />

                                                                      <button className="embed-btn" onClick={ () => dispatch( addTodo( input ), setInput( '' ) ) }
                                                                                variant="outlined" title="To add Todo,Click me">
                                                                                <IoAddCircle /> Add Todo
                                                                      </button>
                                                            </div>

                                                  </div>
                                                  <h2 className="text-responsive"> Todos  List</h2>
                                                  <div className="showitems">
                                                            <div>
                                                                      {
                                                                                list.map( ( elem, id ) => {
                                                                                          return (
                                                                                                    <div className="eachitems" key={ elem.id }>
                                                                                                              <div className={ elem.isComplete ? 'todo-row complete' : 'todo-row' } key={ elem.id }>
                                                                                                                        { elem.editMode ? (
                                                                                                                                  <input onChange={ ( e ) => {
                                                                                                                                            editTodo( elem.id, e.target.value );
                                                                                                                                  } }
                                                                                                                                            value={ elem.data }
                                                                                                                                  />
                                                                                                                        ) : (
                                                                                                                                  <div className="dataView">
                                                                                                                                            { elem.data }

                                                                                                                                  </div>
                                                                                                                        ) }
                                                                                                                        { elem.editMode ? (
                                                                                                                                  <div key={ elem.id }>
                                                                                                                                            <button onClick={ () => { toggleEditMode( elem.id ); } } >
                                                                                                                                                      Close Edit Mode
                                                                                                                                            </button>
                                                                                                                                  </div>
                                                                                                                        ) : (
                                                                                                                                  <>

                                                                                                                                            <TiEdit
                                                                                                                                                      onClick={ () => { toggleEditMode( elem.id ); } }
                                                                                                                                                      title='Click me! If u want to Edit TODO '
                                                                                                                                                      className='edit-icon' />
                                                                                                                                            <VscCheckAll
                                                                                                                                                      onClick={ () => dispatch( completeTodo( elem.id ) ) }
                                                                                                                                                      title='Click me! If u want to Complete TODO '
                                                                                                                                                      className='complete-icon' />
                                                                                                                                            <RiDeleteBinFill
                                                                                                                                                      onClick={ () => dispatch( deleteTodo( elem.id ) ) }
                                                                                                                                                      title='Click me! If u want to Delete TODO '
                                                                                                                                                      className='delete-icon' />
                                                                                                                                  </>
                                                                                                                        ) }

                                                                                                              </div>
                                                                                                    </div>
                                                                                          )
                                                                                } )
                                                                      }
                                                            </div>

                                                  </div>
                                        </div>
                              </div>
                    </>

          )

}