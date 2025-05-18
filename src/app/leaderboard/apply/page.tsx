'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LeaderboardApply() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    bestTime: '',
    level: '1'
  });
  const [proofFile, setProofFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      console.log('Starting form submission');
      const submitData = new FormData();
      submitData.append('username', formData.username);
      submitData.append('email', formData.email);
      submitData.append('bestTime', formData.bestTime);
      submitData.append('level', formData.level);
      if (proofFile) {
        submitData.append('proof', proofFile);
      }

      console.log('Sending request to API');
      const response = await fetch('/api/submit-application', {
        method: 'POST',
        body: submitData,
      });

      console.log('Response received:', response.status);
      const data = await response.json();
      console.log('Response data:', data);

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit application');
      }

      console.log('Submission successful');
      alert('Application submitted successfully!');
      router.push('/leaderboard');
    } catch (error) {
      console.error('Detailed error:', error);
      setError(error instanceof Error ? error.message : 'Failed to submit application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setProofFile(e.target.files[0]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto pt-20">
        <div className="bg-gray-800 shadow-lg rounded-lg p-8">
          <h1 className="text-3xl font-bold text-center mb-8 text-white">Apply for Leaderboard</h1>
          
          {error && (
            <div className="mb-6 p-4 bg-red-900/50 border border-red-500 rounded-md">
              <p className="text-red-200 text-center">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-300">
                In-Game Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                required
                value={formData.username}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-700 bg-gray-700 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Enter your in-game username"
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-700 bg-gray-700 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Enter your email address"
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label htmlFor="level" className="block text-sm font-medium text-gray-300">
                Level
              </label>
              <select
                id="level"
                name="level"
                required
                value={formData.level}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-700 bg-gray-700 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                disabled={isSubmitting}
              >
                <option value="1">Level 1</option>
                <option value="2">Level 2</option>
                <option value="3">Level 3</option>
                <option value="4">Level 4</option>
              </select>
            </div>

            <div>
              <label htmlFor="bestTime" className="block text-sm font-medium text-gray-300">
                Best Time
              </label>
              <input
                type="text"
                id="bestTime"
                name="bestTime"
                required
                value={formData.bestTime}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-700 bg-gray-700 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Enter your best time (e.g., 1:23.45)"
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label htmlFor="proof" className="block text-sm font-medium text-gray-300">
                Gameplay Proof
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-700 border-dashed rounded-md bg-gray-700">
                <div className="space-y-1 text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="flex text-sm text-gray-300">
                    <label
                      htmlFor="proof"
                      className={`relative cursor-pointer bg-gray-700 rounded-md font-medium text-indigo-400 hover:text-indigo-300 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                      <span>Upload a file</span>
                      <input
                        id="proof"
                        name="proof"
                        type="file"
                        accept="video/*,.mp4,.mov,.avi"
                        className="sr-only"
                        onChange={handleFileChange}
                        required
                        disabled={isSubmitting}
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-400">
                    MP4, MOV, or AVI up to 100MB
                  </p>
                  {proofFile && (
                    <p className="text-sm text-gray-300">
                      Selected file: {proofFile.name}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </span>
                ) : (
                  'Submit Application'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
} 