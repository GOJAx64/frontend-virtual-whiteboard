import { useContext } from "react";
import ClassroomsContext from "../context/ClassroomsProvider";

export const useClassrooms = () => {
    return useContext(ClassroomsContext);
}