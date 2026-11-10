import React,{ useEffect, useState } from 'react';
import { supabase } from './supabase';

export default function Auth() {
  const [session, setSession] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
    });

    const { data } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
      }
    );

    return () => data.subscription.unsubscribe();
  }, []);

  async function handleAuth(e) {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    const result = isLogin
      ? await supabase.auth.signInWithPassword({
          email,
          password,
        })
      : await supabase.auth.signUp({
          email,
          password,
        });

    setLoading(false);

    if (result.error) {
      setMessage(result.error.message);
    } else if (!isLogin && !result.data.session) {
      setMessage('Check your email to confirm your account.');
    } else {
      setMessage(isLogin ? 'Welcome back!' : 'Account created!');
    }
  }

  async function handleLogout() {
    const { error } = await supabase.auth.signOut();
    setMessage(error ? error.message : 'You have signed out.');
  }

  if (session) {
    return (
      <div className="auth-box">
        <h2>Welcome to Charllz IQ!</h2>
        <p>You are signed in.</p>
        <button onClick={handleLogout}>Sign Out</button>
      </div>
    );
  }

  return (
    <div className="auth-box">
      <h2>{isLogin ? 'Student Login' : 'Create Your Account'}</h2>

      <form onSubmit={handleAuth}>
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password (at least 8 characters)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          minLength={8}
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? 'Please wait...' : isLogin ? 'Login' : 'Register'}
        </button>
      </form>

      <p>{message}</p>

      <button onClick={() => {
        setIsLogin(!isLogin);
        setMessage('');
      }}>
        {isLogin ? 'Create an account' : 'Already have an account? Login'}
      </button>
    </div>
  );
}