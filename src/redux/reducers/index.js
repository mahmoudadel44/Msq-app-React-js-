import { combineReducers } from "redux";
import { ExamReducer } from "./ExamReducer";
const rootReducer = combineReducers({
  ExamData: ExamReducer,
});
export default rootReducer;
