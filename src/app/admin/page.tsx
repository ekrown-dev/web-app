'use client';

import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

interface ContactSubmission {
  id: number;
  name: string;
  email: string;
  message: string;
  status: string;
  created_at: string;
  reply?: string;
}

export default function AdminDashboard() {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [replyText, setReplyText] = useState<{ [key: number]: string }>({});
  const [replying, setReplying] = useState<{ [key: number]: boolean }>({});

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const fetchSubmissions = async () => {
    try {
      const { data, error } = await supabase
        .from('contact_submissions')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setSubmissions(data || []);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleReply = async (submissionId: number) => {
    try {
      setReplying({ ...replying, [submissionId]: true });
      
      // Update the submission with the reply
      const { error: updateError } = await supabase
        .from('contact_submissions')
        .update({ 
          reply: replyText[submissionId],
          status: 'replied'
        })
        .eq('id', submissionId);

      if (updateError) throw updateError;

      // Send the email (you'll need to implement this with your email service)
      const submission = submissions.find(s => s.id === submissionId);
      if (submission) {
        // TODO: Implement email sending functionality
        console.log('Would send email to:', submission.email, 'with reply:', replyText[submissionId]);
      }

      // Refresh the submissions list
      await fetchSubmissions();
      
      // Clear the reply text for this submission
      setReplyText({ ...replyText, [submissionId]: '' });
    } catch (err: any) {
      setError(err.message);
    } finally {
      setReplying({ ...replying, [submissionId]: false });
    }
  };

  if (loading) {
    return <div className="text-white text-center py-8">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center py-8">Error: {error}</div>;
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-white mb-6">Contact Submissions</h1>
      <div className="grid gap-6">
        {submissions.map((submission) => (
          <div key={submission.id} className="bg-[#0A0F2C] p-6 rounded-lg shadow-lg border border-gray-800">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-semibold text-white">{submission.name}</h3>
                <p className="text-gray-400">{submission.email}</p>
                <p className="text-gray-300 mt-2">{submission.message}</p>
                <p className="text-sm text-gray-500 mt-1">
                  {new Date(submission.created_at).toLocaleString()}
                </p>
              </div>
              <span className={`px-2 py-1 rounded text-sm ${
                submission.status === 'new' ? 'bg-blue-500/10 text-blue-500' :
                submission.status === 'replied' ? 'bg-green-500/10 text-green-500' :
                'bg-gray-500/10 text-gray-500'
              }`}>
                {submission.status}
              </span>
            </div>

            {submission.reply && (
              <div className="mt-4 p-4 bg-indigo-500/10 rounded border border-indigo-500">
                <h4 className="text-sm font-semibold text-indigo-400 mb-2">Your Reply:</h4>
                <p className="text-gray-300">{submission.reply}</p>
              </div>
            )}

            <div className="mt-4">
              <textarea
                className="w-full p-3 rounded bg-[#040B24] border border-gray-700 text-white placeholder-gray-500 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                rows={3}
                placeholder="Write your reply..."
                value={replyText[submission.id] || ''}
                onChange={(e) => setReplyText({ ...replyText, [submission.id]: e.target.value })}
              />
              <div className="mt-2 flex justify-end">
                <button
                  onClick={() => handleReply(submission.id)}
                  disabled={!replyText[submission.id] || replying[submission.id]}
                  className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {replying[submission.id] ? 'Sending...' : 'Send Reply'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 