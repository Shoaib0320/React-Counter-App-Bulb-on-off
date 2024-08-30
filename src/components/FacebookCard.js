import React from 'react';
import './FacebookCard.css'; // For custom styles
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

const PostCard = ({ profileImage, userName, postTime, postContent, postImage }) => {
  return (
    <div className="card mb-4">
      <div className="card-body">
        <div className="d-flex align-items-center mb-3">
          <img
            src={profileImage}
            alt="Profile"
            className="rounded-circle"
            style={{ width: '50px', height: '50px' }}
          />
          <div className="ms-3">
            <h5 className="mb-0">{userName}</h5>
            <small className="text-muted">{postTime}</small>
          </div>
        </div>
        <p>{postContent}</p>
        {postImage && (
          <img src={postImage} alt="Post" className="img-fluid rounded mb-3" />
        )}
        <div className="d-flex justify-content-between">
          <button className="btn btn-outline-primary">Like</button>
          <button className="btn btn-outline-primary">Comment</button>
          <button className="btn btn-outline-primary">Share</button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
