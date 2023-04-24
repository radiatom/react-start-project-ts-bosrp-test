import { ThunkDispatch } from "redux-thunk";
// import { getDataOpenIssues } from "../api/api";
// import {
//   issuesCardType,
//   setDataListType,
//   initialStateType,
//   setNameRepoType,
// } from "../Types/types";


// export const SET_DATA_LIST: string = "Reducer/SET_DATA_LIST";
// export const setDataList = (res: Array<issuesCardType>): setDataListType => {
//   return {
//     type: SET_DATA_LIST,
//     res: res,
//   };
// };

// export const initialState: initialStateType = {
//   data: [],
//   repoLink: {},
// };

// const Reducer = (
//   state: initialStateType = initialState,
//   action: setDataListType & setNameRepoType
// ) => {
//   switch (action.type) {
//     case SET_DATA_LIST:
//       return {
//         ...state,
//         data: action.res,
//       };
//     default:
//       return state;
//   }
// };


// export const setListIssues =
//   (owner: string, repo: string): any =>
//   async (
//     dispatch: ThunkDispatch<initialStateType, unknown, setDataListType>
//   ) => {
//       const dataIssue = await getDataOpenIssues(owner, repo);
//       dispatch(setDataList(dataIssue));
//   };

// export default Reducer;
