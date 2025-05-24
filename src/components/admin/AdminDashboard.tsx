import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../lib/supabase';

const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [aboutContent, setAboutContent] = useState('');
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuth();
    loadData();
  }, []);

  const checkAuth = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      navigate('/admin');
    }
  };

  const loadData = async () => {
    try {
      // Load about content
      const { data: aboutData } = await supabase
        .from('about_content')
        .select('*')
        .single();

      if (aboutData) {
        setAboutContent(aboutData.content);
      }

      // Load skills
      const { data: skillsData } = await supabase
        .from('skills')
        .select('*')
        .order('order');

      if (skillsData) {
        setSkills(skillsData);
      }

      // Load projects
      const { data: projectsData } = await supabase
        .from('projects')
        .select('*');

      if (projectsData) {
        setProjects(projectsData);
      }

      setLoading(false);
    } catch (error) {
      console.error('Error loading data:', error);
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/admin');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 text-white p-8">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
          >
            Logout
          </button>
        </div>

        <div className="grid gap-8">
          {/* About Section */}
          <section className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">About Content</h2>
            <textarea
              value={aboutContent}
              onChange={(e) => setAboutContent(e.target.value)}
              className="w-full bg-gray-700 text-white rounded p-4 min-h-[200px]"
            />
            <button className="mt-4 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors">
              Save Changes
            </button>
          </section>

          {/* Skills Section */}
          <section className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Skills</h2>
            {/* Add skill management UI here */}
          </section>

          {/* Projects Section */}
          <section className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Projects</h2>
            {/* Add project management UI here */}
          </section>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;