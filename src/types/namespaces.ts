/**
 * This file was generated using the GraphQL documentation from Fireflies.
 * https://docs.fireflies.ai/
 */

export type AiFilter = {
  task: string;
  pricing: string;
  metric: string;
  question: string;
  dateAndTime: string;
  textCleanup: string;
  sentiment: string;
}

export type Attendee = {
  displayName: string;
  email: string;
  phoneNumber: string;
}

export type AudioUploadInput = {
  url: string;
  title: string;
  attendees: Attendee[];
  webhook: string;
}

export type AudioUploadStatus = {
  success: boolean;
  title: string;
  message: string;
}

export type MeetingAttendee = {
  displayName: string;
  email: string;
  phoneNumber: string;
  name: string;
  location: string;
}

export type Sentence = {
  index: number;
  text: string;
  rawText: string;
  startTime: string;
  endTime: string;
  speakerId: number;
  speakerName: string;
  aiFilters: AiFilter;
}

export type Transcript = {
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

export type UserRawResponse = {
  user_id: string;
  email?: string;
  name?: string;
  num_transcripts?: number;
  recent_transcript?: string;
  recent_meeting?: string;
  minutes_consumed?: number;
  is_admin?: boolean;
  integrations?: string[];
}

export type UserResponse = {
  id: string;
  email?: string;
  name?: string;
  numTranscripts?: number;
  recentTranscript?: string;
  recentMeeting?: string;
  minutesConsumed?: number;
  isAdmin?: boolean;
  integrations?: string[];
}

export type ClientUser = {
  id: string;
  email: string;
  token: string;
}

export type TranscriptRequest = {
  id: string;
  filter: string[];
}

export type TranscriptsRequest = {
  filter: string[];
}

export type UserRequest = {
  id?: string;
  filter: string[];
}

export type UserRoleRequest = {
  userId: string;
  role: Role;
  filter: string[];
}

export type DeleteTranscriptRequest = {
  transcriptId: string;
  filter: string[];
}

export type UploadAudioRequest = {
  url: string;
  title: string;
  attendees: Attendee[];
  webhook?: string;
}

export type UploadAudioResponse = {
  success: boolean;
  title: string;
  message: string;
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
