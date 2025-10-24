import React from "react";
import { GoArrowLeft } from "react-icons/go";
import { newBlogs } from "../data/data";
import { useParams, useNavigate } from "react-router-dom";

const Blog: React.FC = () => {
  const { id } = useParams<{ id?: string }>();
  const navigate = useNavigate();

  const idNum = id ? Number(id) : NaN;
  if (Number.isNaN(idNum)) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h2 className="text-2xl font-semibold text-gray-600">Invalid blog ID</h2>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 px-4 py-2 bg-[var(--primary-blue)] text-white rounded-full"
        >
          Go Back
        </button>
      </div>
    );
  }

  const blog = newBlogs.find((b) => b.id === idNum);

  if (!blog) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h2 className="text-2xl font-semibold text-gray-600">Blog not found</h2>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 px-4 py-2 bg-[var(--primary-blue)] text-white rounded-full"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="mt-24 px-4 md:px-8 lg:px-16 container mx-auto flex flex-col">
      {/* Back button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center mb-4 transition-colors duration-300 rounded-full w-10 h-10 bg-[var(--primary-blue)] text-white justify-center hover:bg-blue-700"
        aria-label="Go back"
      >
        <GoArrowLeft className="text-2xl text-white" />
      </button>

      {/* Blog image */}
      <div className="w-full flex  justify-center mb-6 h-[400px]">
        <img
          src={blog.image}
          alt={blog.title || "Blog image"}
          className="rounded-2xl w-full md:max-w-4xl   h-full  object-contain"
        />
      </div>

      {/* Blog title and metadata */}
      <div className="flex flex-col items-center text-center mb-6">
        <h2 className="text-lg md:text-xl font-bold mb-2 text-gray-900">
          {blog.title}
        </h2>
        <p className="text-gray-500 text-sm md:text-base">
          {blog.author} •{" "}
          {blog.date ? new Date(blog.date).toDateString() : ""}
        </p>
      </div>

      {/* Blog summary */}
      {blog.summary && (
        <div className="max-w-4xl mx-auto text-gray-700 leading-relaxed text-justify mb-8">
          <p className="whitespace-pre-line">{blog.summary}</p>
        </div>
      )}

      {/* Main content blocks */}
      <div className="max-w-4xl mx-auto space-y-8">
        {Array.isArray(blog.contentBlocks) &&
          blog.contentBlocks.map((block, index) => (
            <div key={index}>
              {block.label && (
                <h4 className="text-lg md:text-md font-semibold text-gray-900 mb-2">
                  {block.label}
                </h4>
              )}

              {/* Paragraph text */}
              {"text" in block && typeof block.text === 'string' && (
                <p className="text-gray-700 leading-relaxed text-justify mb-4">
                  {block.text}
                </p>
              )}

              {/* Bullet list */}
              {"items" in block &&
                Array.isArray(block.items) &&
                block.items.length > 0 && (
                  <ul className="list-disc list-outside pl-6 text-gray-700 leading-relaxed text-justify space-y-2">
                    {block.items.map((item, i) => (
                      <li key={i} className="marker:text-gray-600">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
            </div>
          ))}
      </div>

      {/* Closing note */}
      {blog.closingNote && (
        <div className="max-w-4xl mx-auto mt-10 text-gray-800 leading-relaxed text-justify border-t border-gray-200 pt-6">
          <p className="whitespace-pre-line">{blog.closingNote}</p>
        </div>
      )}
    </div>
  );
};

export default Blog;
