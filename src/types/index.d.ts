/**
 * This file was generated using the GraphQL documentation from Fireflies.
 * https://docs.fireflies.ai/
 */

type AiFilter = {
  task: string;
  pricing: string;
  metric: string;
  question: string;
  dateAndTime: string;
  textCleanup: string;
  sentiment: string;
}

type Attendee = {
  displayName: string;
  email: string;
  phoneNumber: string;
}

type AudioUploadInput = {
  url: string;
  title: string;
  attendees: Attendee[];
  webhook: string;
}

type AudioUploadStatus = {
  success: boolean;
  title: string;
  message: string;
}

type MeetingAttendee = {
  displayName: string;
  email: string;
  phoneNumber: string;
  name: string;
  location: string;
}

type Sentence = {
  index: number;
  text: string;
  rawText: string;
  startTime: string;
  endTime: string;
  speakerId: number;
  speakerName: string;
  aiFilters: AiFilter;
}

type Transcript = {
  id: string;
  sentences: Sentence[];
  title: string;
  hostEmail: string;
  organizerEmail: string;
  user: UserResponse;
  firefliesUsers: string[];
  participants: string[];
  date: number;
  transcriptUrl: string;
  audioUrl: string;
  duration: number;
  meetingAttendees: MeetingAttendee[];
}

type UserResponse = {
  id: string;
  email: string;
  name: string;
  numTranscripts: number;
  recentTranscript: string;
  recentMeeting: string;
  minutesConsumed: number;
  isAdmin: boolean;
  integrations: string[];
}

type ClientUser = {
  id: string;
  email: string;
  token: string;
}

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export enum Role {
  Admin = 'admin',
  User = 'user',
  Viewer = 'viewer'
}
