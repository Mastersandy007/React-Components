import React from 'react';
import ReactDOM from 'react-dom';
import { faker } from '@faker-js/faker';
import CommentDetails from './commentdetails';

const App = () => {

    return (
        <div className="ui container comments">
            <CommentDetails author="Sandy" timeAgo="Today at 10:00PM" content="Nice blog post!"/>
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={ faker.image.avatar() } />
                </a>
            
                <div className="content">
                    <a href="/" className="author">
                        sam
                    </a>
                    <div className="metadata">
                        <span className="date">Today at 6:00PM</span>
                    </div>
                    <div className="text">Nice blog post!</div>
                </div>
            </div>

            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={ faker.image.avatar() } />
                </a>
            
                <div className="content">
                    <a href="/" className="author">
                        Sony
                    </a>
                    <div className="metadata">
                        <span className="date">Today at 6:00PM</span>
                    </div>
                    <div className="text">Nice blog post!</div>
                </div>
            </div>

            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar"  src={ faker.image.avatar() } />
                </a>
            
                <div className="content">
                    <a href="/" className="author">
                        ram
                    </a>
                    <div className="metadata">
                        <span className="date">Today at 7:00PM</span>
                    </div>
                    <div className="text">Nice blog post! 2</div>
                </div>
            </div>

            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={ faker.image.avatar() } />
                </a>
            
                <div className="content">
                    <a href="/" className="author">
                        bam
                    </a>
                    <div className="metadata">
                        <span className="date">Today at 8:00PM</span>
                    </div>
                    <div className="text">Nice blog post! 3</div>
                </div>
            </div>

        </div>
    );

}

ReactDOM.render(<App />, document.querySelector('#root'));

