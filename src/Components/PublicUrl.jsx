import React from 'react';
import { Link } from 'react-router-dom';

const PublicUrl = () => {
  return (
    <div className="w-full h-fit p-4 border border-gray-300 rounded-md flex flex-col space-y-4 overflow-hidden overflow-x-hidden md:mr-11">
      {/* Profile Language */}
      <div className="profileLanguage text-lg font-medium">
        Profile Language
        <br />
        <span
          className="font-extralight text-gray-500"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          English
        </span>
      </div>

      {/* Public Profile and URL */}
      <div className="publicProfile text-lg font-medium">
        Public Profile & URL
        <br />
        <Link
          to="https://www.linkedin.com/in/siddharth-k-shetty"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline hover:text-blue-800 break-words break-all whitespace-normal"
        >
          www.linkedin.com/in/siddharth-k-shetty
        </Link>
        <br />
        <Link
          to="https://leetcode.com/u/Semiconductor1"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline hover:text-blue-800 break-words break-all whitespace-normal"
        >
          leetcode.com/u/Semiconductor1/
        </Link>
        <br />
        <Link
          to="https://www.codechef.com/users/sit1si22ec099"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline hover:text-blue-800 break-words break-all whitespace-normal"
        >
          www.codechef.com/users/sit1si22ec099
        </Link>
      </div>
    </div>
  );
};

export default PublicUrl;
