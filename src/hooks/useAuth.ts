import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from ".";
import { setAuthentication } from "../features/auth";

const useAuth = (): boolean | null => {
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (isAuthenticated === null) {
      const tkn = localStorage.getItem("token");
      dispatch(setAuthentication(!!tkn));
    }
  }, [isAuthenticated, dispatch]);
  return isAuthenticated;
};

export default useAuth;
