import { createContext, PropsWithChildren, useState } from 'react';

type SignInContextProps = {
  isAuthenticated: boolean;
  handleAuthenticated?: () => void;
};

const SignInContext = createContext<SignInContextProps>({
  isAuthenticated: false,
});

type SignInContextProviderProps = PropsWithChildren<Record<string, unknown>>;

export function SignInContextProvider({
  children,
}: SignInContextProviderProps): JSX.Element {
  const localAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  const [isAuthenticated, setAuthenticated] = useState(localAuthenticated);

  const handleAuthenticated = () => {
    localStorage.setItem('isAuthenticated', String(!isAuthenticated));
    setAuthenticated(!isAuthenticated);
  };

  return (
    <SignInContext.Provider value={{ isAuthenticated, handleAuthenticated }}>
      {children}
    </SignInContext.Provider>
  );
}

export default SignInContext;