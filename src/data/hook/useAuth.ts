import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const useAppData = () => useContext(AuthContext);

export default useAppData;