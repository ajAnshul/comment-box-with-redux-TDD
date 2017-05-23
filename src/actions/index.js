import {SAVE_COMMENTS} from './types';


export function saveComments(newComment){
  console.log("action got call");
  return{
    type:SAVE_COMMENTS,
    payload:newComment
  }
}
