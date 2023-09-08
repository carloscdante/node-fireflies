import { UserRawResponse, UserResponse } from "../types/namespaces";

export const removeEmpty = (obj) => {
  let newObj = {};
  Object.keys(obj).forEach((key) => {
    if (obj[key] === Object(obj[key])) newObj[key] = removeEmpty(obj[key]);
    else if (obj[key] !== undefined) newObj[key] = obj[key];
  });
  return newObj;
};

export const convertUserToClient = (user: UserRawResponse): UserResponse => {
  return Object.assign({}, {
    id: user.user_id,
    email: user.email,
    name: user.name,
    numTranscripts: user.num_transcripts,
    recentTranscript: user.recent_transcript,
    recentMeeting: user.recent_meeting,
    minutesConsumed: user.minutes_consumed,
    isAdmin: user.is_admin,
    integrations: user.integrations,
});
}