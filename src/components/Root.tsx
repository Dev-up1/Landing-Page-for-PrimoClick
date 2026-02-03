import React, { useState, useEffect } from "react";
import { Outlet } from "react-router";
import { Header } from "./Header";
import { Toaster } from "sonner";
import { supabase } from "../lib/supabaseClient";
import { Dashboard } from "./Dashboard/Dashboard";
import { AdminDashboard } from "./Admin/AdminDashboard";

export const Root = () => {
  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkSession = async () => {
      try {
        const {
          data: { session },
        } = await supabase.auth.getSession();
        setSession(session);
      } catch (error) {
        console.error("Error checking session:", error);
      } finally {
        setLoading(false);
      }
    };

    checkSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setSession(null);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-green-500/30 border-t-green-500 rounded-full animate-spin"></div>
          <div className="text-green-500 font-mono text-xs tracking-widest animate-pulse">
            AUTHENTICATING AGENT...
          </div>
        </div>
      </div>
    );
  }

  const isAdmin =
    session?.user?.user_metadata?.role === "admin" ||
    session?.user?.email?.includes("admin");

  return (
    <div className="bg-slate-950 min-h-screen text-slate-200 selection:bg-green-500/30 selection:text-green-200 font-sans">
      {session ? (
        isAdmin ? (
          <AdminDashboard session={session} onLogout={handleLogout} />
        ) : (
          <Dashboard session={session} onLogout={handleLogout} />
        )
      ) : (
        <>
          <Header />
          <Outlet context={{ onLoginSuccess: setSession }} />
        </>
      )}
      <Toaster position="top-right" theme="dark" />
    </div>
  );
};
