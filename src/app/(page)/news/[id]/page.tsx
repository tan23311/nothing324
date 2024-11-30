"use client"; // Mark this as a client component

import { useEffect, useState } from "react";
import { useParams } from "next/navigation"; // Import `useParams` for App Router
import newsData from "../utils/news";
import commentsData from "../utils/comments";
import usersData from "../utils/users";

// Define the types for the news article and comment data
interface NewsArticle {
  _id: string;
  title: string;
  content: string;
  owner: string;
  createdAt: string;
  updatedAt: string;
}

interface Comment {
  collectionId: string;
  itemId: string;
  refType: string;
  userId: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  _v: number;
}

const FullNewsPage = () => {
  const { id } = useParams(); // Get `id` from the dynamic route

  const [news, setNews] = useState<NewsArticle | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    if (id) {
      const newsArticle = newsData.find((item) => item._id === id);
      if (newsArticle) {
        setNews(newsArticle);
      } else {
        window.location.href = "/404"; // Redirect to 404 if the news article is not found
      }

      const newsComments = commentsData.filter(
        (comment) => comment.itemId === id && comment.refType === "news"
      );
      setComments(newsComments);
    }
  }, [id]);

  if (!news) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white py-4">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-bold">News Details</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <article className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-4">
            <h2 className="text-2xl font-bold">{news.title}</h2>
            <p className="text-sm text-gray-600">
              Published by:{" "}
              <span className="font-medium text-gray-800">
                {usersData.find((user) => user._id === news.owner)?.username ||
                  "Unknown User"}
              </span>
            </p>
            <p className="text-sm text-gray-600">
              Posted date:{" "}
              <span className="font-medium text-gray-800">
                {new Date(news.createdAt).toLocaleDateString()}
              </span>
            </p>
            <p className="mt-2 text-gray-600">{news.content}</p>
          </div>

          <footer className="px-4 py-2 bg-gray-100">
            <p className="text-xs text-gray-500">
              Last updated: {new Date(news.updatedAt).toLocaleDateString()}
            </p>
          </footer>
        </article>

        {/* Add Comment Section */}
        <section className="mt-8">
          <h3 className="text-lg font-semibold">Add a Comment</h3>
          <textarea
            className="w-full p-2 border border-gray-300 rounded-lg"
            rows={4}
            placeholder="Add your comment here"
          ></textarea>
          <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg">
            Submit Comment
          </button>
        </section>

        {/* Comments Section */}
        <section className="mt-8">
          <h3 className="text-lg font-semibold">Comments</h3>
          <div>
            {comments.map((comment) => (
              <div key={comment.collectionId} className="p-4 border-b">
                <p className="text-sm text-gray-600">
                  <span className="font-medium text-gray-800">
                    {
                      usersData.find((user) => user._id === comment.userId)
                        ?.username
                    }{" "}
                    :
                  </span>{" "}
                  {comment.content}
                </p>
                <p className="text-xs text-gray-500">
                  {new Date(comment.createdAt).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default FullNewsPage;
