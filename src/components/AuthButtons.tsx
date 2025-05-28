import { auth, provider } from '../firebase';
import { signInWithPopup, signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useAppContext } from '../context/AppContext';
import { useEffect } from 'react';

/**
 * Buttons responsible for signing in user to enable interaction with the Firebase database
 */

const AuthButtons = () => {
  const [user] = useAuthState(auth);
  const { state, dispatch } = useAppContext();
  const login = () => signInWithPopup(auth, provider);
  const logout = () => signOut(auth);

  useEffect(() => {
    if (user) {
      dispatch({ type: 'LOGIN', payload: { name: user.displayName || '' } });
    } else {
      dispatch({ type: 'CLEAR_DATA' });
      dispatch({ type: 'LOGOUT' });
    }
  }, [user, dispatch]);

  return (
    <div className="mb-4 ml-auto">
      {user ? (
        <div>
          <p className="mb-2">Signed in as {state.auth.user?.name}</p>
          <button onClick={logout} className="bg-red-500 text-white px-4 py-2 rounded">
            Logout
          </button>
        </div>
      ) : (
        <button onClick={login} className="bg-green-500 text-white px-4 py-2 rounded">
          Sign in with Google
        </button>
      )}
    </div>
  );
};

export default AuthButtons;
