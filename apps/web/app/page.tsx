import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Welcome to My App
        </h1>
        <p className="text-gray-600">
          This is a test to verify Tailwind CSS is working properly.
        </p>
        <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors">
          Click me
        </button>
      </div>
    </main>
  );
}
