import { createContext, useContext, useRef } from "react";
import LoadingBar from "react-top-loading-bar";

const LoadingContext = createContext();

export const LoadingProvider = ({ children }) => {
  const loading = useRef(null);

  return (
    <LoadingContext.Provider value={loading}>
      <LoadingBar color="#2563eb" ref={loading} height={7} shadow={false} loaderSpeed={800}/>
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => useContext(LoadingContext);