import React from "react";
import { commentsData } from "../utils/constants";

const Comment = (props) => {
  const { name, comments, replies } = props.data;
  return (
    <div className="flex bg-gray-100 shadow-lg p-2 rounded-lg my-2">
      <img
        className="h-12 w-12"
        alt="user"
        src="https://as1.ftcdn.net/v2/jpg/02/59/39/46/1000_F_259394679_GGA8JJAEkukYJL9XXFH2JoC3nMguBPNH.jpg"
      />
      <div className="px-3 ">
        <p className="font-bold">{name}</p>
        <p>{comments}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments?.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="px-5 border border-l-black ml-5">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="p-2 m-5 ">
      <h1 className="font-bold text-2xl">Comments: </h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
