import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Workspace from './modules/Workspace';
import Home from './modules/Home';
import CommentApp from './modules/comments/CommentApp';
import TodoApp from './modules/todo-app/TodoApp';
import CounterApp from './modules/counter/Counter';
import LyricApp from './modules/lyric-app/LyricApp';
import SolfegeApp from './modules/solfege/SolfegeApp';
import CircleApp from './modules/circleApp/CircleApp';


export default (
  <Route path="/" component={Workspace}>
    <IndexRoute component={Home}/>
    <Route path="comment" component={CommentApp}/>
    <Route path="todo" component={TodoApp} />
    <Route path="counter" component={CounterApp} />
    <Route path="lyrics" component={LyricApp} />
    <Route path="solfege" component={SolfegeApp} />
    <Route path="circles" component={CircleApp} />
  </Route>
)
