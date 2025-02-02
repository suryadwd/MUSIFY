import { useAuth } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import { axiosInstance } from "./axios";
import { Loader } from "lucide-react";  

const updateApiToken = (token: string | null) => {
  if (token) axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  else delete axiosInstance.defaults.headers.common['Authorization'];
};

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { getToken } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initAuth = async () => {
      try {
        const token = await getToken();
        updateApiToken(token);
      } catch (error) {
        console.log("error in auth provider", error);
      } finally {
        setLoading(false);
      }
    };

    initAuth();
  }, [getToken]);

  if (loading) {
    return (
      <div className="h-screen w-full flex items-center justify-center">
        <Loader className="size-10 text-emerald-500 animate-spin" />
      </div>
    );
  }

  return <>{children}</>;
};

export default AuthProvider;