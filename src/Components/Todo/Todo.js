import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
// updateTodo
import { addTodo, deleteTodo } from '../../Actions/index';
// import { TiEdit } from "react-icons/ti";
// import { VscCheckAll } from "react-icons/vsc";
import { IoAddCircle } from "react-icons/io5";
import { RiDeleteBinFill } from "react-icons/ri";

export default function Todo () {
          const [ input, setInput ] = useState( '' );
          const list = useSelector( ( state ) => state.todoReducers.list );
          const dispatch = useDispatch();


          return (
                    <>
                              <div className="container">
                                        <div className="main-div">
                                                  <h1 classNam="text-responsive"> Welcome React Todo's  Application </h1>

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

                                                                      <button className="embed-btn" onClick={ () => dispatch( addTodo( input ), setInput( '' ) ) } variant="outlined" title="To add Todo,Click me">
                                                                                <IoAddCircle /> Add Todo
                                                                      </button>
                                                            </div>

                                                  </div>
                                                  <h2 className="text-responsive"> Todos  List</h2>
                                                  <div className="showitems">
                                                            {
                                                                      list.map( ( elem ) => {
                                                                                return (
                                                                                          <div className="eachitems" key={ elem.id }>
                                                                                                    <h3>{ elem.data }</h3>
                                                                                                    {/* <TiEdit
                                                                                                              onClick={ () => { toggleEditMode( todo.id ); } }
                                                                                                              title='Click me! If u want to Edit TODO '
                                                                                                              className='edit-icon' />
                                                                                                    <VscCheckAll
                                                                                                              onClick={ () => completeTodo( todo.id ) }
                                                                                                              title='Click me! If u want to Complete TODO '
                                                                                                              className='complete-icon' /> */}
                                                                                                    <RiDeleteBinFill
                                                                                                              onClick={ () => dispatch( deleteTodo( input ) ) }
                                                                                                              title='Click me! If u want to Delete TODO '
                                                                                                              className='delete-icon' />

                                                                                          </div>
                                                                                )
                                                                      } )
                                                            }

                                                  </div>
                                        </div>
                              </div>
                    </>

          )

}