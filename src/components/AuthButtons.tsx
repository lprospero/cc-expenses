import { auth, provider } from '../firebase';
import { signInWithPopup, signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

const AuthButtons = () => {
  const [user] = useAuthState(auth);

  const login = () => signInWithPopup(auth, provider);
  const logout = () => signOut(auth);

  return (
    <div className="mb-4 ml-auto">
      {user ? (
        <>
          <p className="mb-2">Signed in as {user.displayName}</p>
          <button onClick={logout} className="bg-red-500 text-white px-4 py-2 rounded">
            Logout
          </button>
        </>
      ) : (
        <button onClick={login} className="bg-green-500 text-white px-4 py-2 rounded">
          Sign in with Google
        </button>
      )}
    </div>
  );
};

export default AuthButtons;
