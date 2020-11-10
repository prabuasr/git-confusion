
import * as ActionTypes from './ActionTypes';
export const Feedbacks = (state = { errMess: null, feedback:[]}, action) => {
   // alert('action  typ ' + action) 
  switch (action.type) {
   case ActionTypes.ADD_FEEDBACKS:
      return {...state, errMess: null, feedback: action.payload};

    case ActionTypes.FEEDBACK_FAILED:
      return {...state, errMess: action.payload};

    case ActionTypes.ADD_FEEDBACK:
        var feedback = action.payload;
      console.log('Current State is: ' + JSON.stringify(feedback));
       alert('Current State is: ' + JSON.stringify(feedback));
        
         // console.log('Current State is: ' + feedback);
         //  alert('Current State =  : ' + feedback);
        
        return { ...state, feedback: state.feedback.concat(feedback)};

    default:
      return state;
  }
};