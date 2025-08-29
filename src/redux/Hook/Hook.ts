import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, Rootstate } from "../store/Store";

export const useAppSelector = useSelector.withTypes<Rootstate>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();