import { createContext, useState } from "react";

export const StateContext = createContext({
  state: null,
  setState: () => {},
});

const StateProvider = ({ children }) => {
  const [state, setState] = useState({
    questions: [],
    question: {},
  });

  return (
    <StateContext.Provider value={{ state, setState }}>
      {children}
    </StateContext.Provider>
  );
};

export default StateProvider;
