import React from 'react';
import comment from '../../assets/comment.png'

const Comment = () => {
    return (
      <div>
        <img className="w-6 h-6 hover:scale-125 m-2" src={comment} alt="comment" />
      </div>
    );
};

export default Comment;