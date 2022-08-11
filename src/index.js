import React from 'react';
import ReactDOM from 'react-dom';
import { faker } from '@faker-js/faker';
import CommentDetails from './commentdetails';

const App = () => {

    return (
        <div className="ui container comments">
            <CommentDetails author="Sandy" timeAgo="Today at 10:00PM" content="Nice blog post!"/>
            <CommentDetails author="Sam" timeAgo="Today at 5:00PM" content="Amazing !"/>
            <CommentDetails author="Ram" timeAgo="Today at 2:00PM" content="Good Idea !"/>
        </div>
    );

}

ReactDOM.render(<App />, document.querySelector('#root'));

