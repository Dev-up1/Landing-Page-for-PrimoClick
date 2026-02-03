import React, { useEffect, useState } from 'react';
import { projectId } from '../../utils/supabase/info';
import { User, Shield, Ban, CheckCircle } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

interface UserData {
  id: string;
  email: string;
  user_metadata: {
    account_type: string;
    role?: string;
    status?: string;
  };
  created_at: string;
}

export const UserManager = ({ session }: { session: any }) => {
  const [users, setUsers] = useState<UserData[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    try {
      const res = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-cc50fc6c/admin/users`, {
        headers: { 'Authorization': `Bearer ${session.access_token}` }
      });
      if (!res.ok) throw new Error('Failed to fetch users');
      const data = await res.json();
      setUsers(data);
    } catch (error) {
      console.error(error);
      toast.error('Failed to load users');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const toggleBan = async (userId: string, currentStatus: string) => {
    const newStatus = currentStatus === 'banned' ? 'active' : 'banned';
    try {
      const res = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-cc50fc6c/admin/users/${userId}/status`, {
        method: 'POST',
        headers: { 
          'Authorization': `Bearer ${session.access_token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ status: newStatus })
      });
      
      if (!res.ok) throw new Error('Failed to update status');
      
      toast.success(`User ${newStatus === 'banned' ? 'banned' : 'activated'}`);
      fetchUsers(); // Refresh list
    } catch (error) {
      console.error(error);
      toast.error('Action failed');
    }
  };

  if (loading) return <div className="p-4 text-green-500 font-mono animate-pulse">Scanning User Database...</div>;

  return (
    <div className="bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden">
      <div className="p-6 border-b border-slate-800 flex justify-between items-center">
        <h3 className="text-xl font-bold font-mono text-white flex items-center gap-2">
          <User className="text-green-500" /> USER DATABASE
        </h3>
        <span className="text-xs font-mono text-slate-500 uppercase">{users.length} RECORDS FOUND</span>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-slate-950/80 text-xs font-mono uppercase text-slate-500">
            <tr>
              <th className="p-4">Identity</th>
              <th className="p-4">Role</th>
              <th className="p-4">Clearance</th>
              <th className="p-4">Status</th>
              <th className="p-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-slate-800/30 transition-colors">
                <td className="p-4">
                  <div className="font-mono text-white text-sm">{user.email}</div>
                  <div className="text-xs text-slate-600 font-mono">{user.id.slice(0, 8)}...</div>
                </td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded text-[10px] font-mono uppercase border ${
                    user.user_metadata.account_type === 'advertiser' 
                      ? 'bg-blue-500/10 border-blue-500/20 text-blue-400' 
                      : 'bg-green-500/10 border-green-500/20 text-green-400'
                  }`}>
                    {user.user_metadata.account_type}
                  </span>
                </td>
                <td className="p-4">
                   <span className={`px-2 py-1 rounded text-[10px] font-mono uppercase border ${
                    user.user_metadata.role === 'admin' 
                      ? 'bg-purple-500/10 border-purple-500/20 text-purple-400' 
                      : 'bg-slate-500/10 border-slate-500/20 text-slate-400'
                  }`}>
                    {user.user_metadata.role || 'user'}
                  </span>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${user.user_metadata.status === 'banned' ? 'bg-red-500' : 'bg-green-500 animate-pulse'}`}></div>
                    <span className={`text-xs font-mono uppercase ${user.user_metadata.status === 'banned' ? 'text-red-500' : 'text-green-500'}`}>
                      {user.user_metadata.status || 'Active'}
                    </span>
                  </div>
                </td>
                <td className="p-4 text-right">
                  <button
                    onClick={() => toggleBan(user.id, user.user_metadata.status || 'active')}
                    className={`px-3 py-1.5 rounded text-xs font-mono uppercase tracking-wider border transition-all ${
                      user.user_metadata.status === 'banned'
                        ? 'border-green-500/30 hover:bg-green-500/10 text-green-400'
                        : 'border-red-500/30 hover:bg-red-500/10 text-red-400'
                    }`}
                  >
                    {user.user_metadata.status === 'banned' ? 'Approve' : 'Ban User'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
