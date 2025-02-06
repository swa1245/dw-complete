import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaDownload, FaSpinner } from 'react-icons/fa';

const AdminDashboard = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const navigate = useNavigate();

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      if (!token) {
        navigate('/admin/login');
        return;
      }

      const response = await fetch('https://dwi4u.onrender.com/api/admin/applications', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json'
        }
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to fetch applications');
      }

      const data = await response.json();
      setApplications(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDownloadResume = async (id) => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`https://dwi4u.onrender.com/api/admin/applications/${id}/resume`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/octet-stream'
        }
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || 'Failed to download resume');
      }

      // Handle file download
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `resume-${id}.pdf`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleStatusUpdate = async (id, newStatus) => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`https://dwi4u.onrender.com/api/admin/applications/${id}`, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ status: newStatus })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to update status');
      }

      // Refresh applications after status update
      await fetchApplications();
    } catch (error) {
      setError(error.message);
    }
  };

  const filteredApplications = selectedStatus === 'all'
    ? applications
    : applications.filter(app => app.status === selectedStatus);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <FaSpinner className="text-primary-500 text-4xl animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-200 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-black mt-20 rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-200 mb-4 md:mb-0">
              Job Applications
            </h1>
            <div className="flex items-center space-x-4">
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="all">All Applications</option>
                <option value="pending">Pending</option>
                <option value="reviewed">Reviewed</option>
                <option value="shortlisted">Shortlisted</option>
                <option value="rejected">Rejected</option>
              </select>
            </div>
          </div>

          {error && (
            <div className="bg-red-50 text-red-500 p-4 rounded-lg mb-6">
              {error}
            </div>
          )}

          <div className="grid gap-6">
            {filteredApplications.map(app => (
              <div
                key={app._id}
                className="bg-gray-50 rounded-xl p-6 transition-all duration-300 hover:shadow-md"
              >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {app.name}
                    </h3>
                    <p className="text-gray-600">{app.position}</p>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                        app.status === 'pending'
                          ? 'bg-yellow-100 text-yellow-800'
                          : app.status === 'reviewed'
                          ? 'bg-blue-100 text-blue-800'
                          : app.status === 'shortlisted'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {app.status.charAt(0).toUpperCase() + app.status.slice(1)}
                    </span>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-gray-600">
                      <span className="font-medium">Email:</span> {app.email}
                    </p>
                    <p className="text-gray-600">
                      <span className="font-medium">Phone:</span> {app.phone}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-600">
                      <span className="font-medium">Experience:</span>{' '}
                      {app.experience || 'Not specified'}
                    </p>
                    <p className="text-gray-600">
                      <span className="font-medium">Qualification:</span>{' '}
                      {app.qualification || 'Not specified'}
                    </p>
                  </div>
                </div>

                {app.coverLetter && (
                  <div className="mb-4">
                    <p className="font-medium text-gray-900 mb-2">Cover Letter:</p>
                    <p className="text-gray-600 bg-white p-4 rounded-lg">
                      {app.coverLetter}
                    </p>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => handleDownloadResume(app._id)}
                    className="inline-flex items-center justify-center px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
                  >
                    <FaDownload className="mr-2" />
                    Download Resume
                  </button>
                  <select
                    value={app.status}
                    onChange={(e) => handleStatusUpdate(app._id, e.target.value)}
                    className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option value="pending">Pending</option>
                    <option value="reviewed">Reviewed</option>
                    <option value="shortlisted">Shortlisted</option>
                    <option value="rejected">Rejected</option>
                  </select>
                </div>
              </div>
            ))}

            {filteredApplications.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">No applications found</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
