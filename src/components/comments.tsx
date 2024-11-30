import React from "react";
import { CommentSection } from "react-comments-section";
import "react-comments-section/dist/index.css";

interface CommentsProps {
  currentUser?: {
    userId: string;
    avatarUrl?: string;
    name?: string;
  };
}

const Comments: React.FC<CommentsProps> = ({ currentUser }) => {
  const commentsArray = [] as {
    id: string;
    text: string;
    createdAt: Date;
    user: { userId: string; avatarUrl?: string; name?: string };
  }[];

  const logIn = () => {
    console.log("Log in action triggered");
  };

  const commentData = {
    logIn,
    currentUser: currentUser || {
      currentUserId: "01a",
      currentUserImg: "https://ui-avatars.com/api/name=Riya&background=random",
      currentUserProfile: "https://www.linkedin.com/in/riya-negi-8879631a9/",
      currentUserFullName: "Riya Negi",
    },
    commentData: commentsArray,
    onSubmitAction: (data: any) => {
      console.log("New comment:", data);
    },
    onEditAction: (data: any) => {
      console.log("Edited comment:", data);
    },
    onDeleteAction: (data: any) => {
      console.log("Deleted comment:", data);
    },
  };

  return (
    <div className="my-4">
      <CommentSection {...commentData} />
    </div>
  );
};

export default Comments;
