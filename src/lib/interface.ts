import { MarkovResult } from 'markov-strings';

export interface MessageRecord {
  id: string;
  string: string;
  attachment?: string;
}

export interface MarkbotMarkovResult extends MarkovResult {
  refs: Array<MessageRecord>;
}

export interface MessagesDB {
  messages: MessageRecord[];
}

export interface MarkbotConfig {
  game: string;
  prefix: string;
  stateSize: number;
  maxTries: number;
  minScore: number;
  suppressRespCat: string;
  increaseFreqCat: string;
  messagePrefix: string;
  inviteCmd: string;
  increasedMsgChance: number;
  randomMsgChance: number;
  crimMsgChance: number;
  token: string;
  pageSize: number;
}

export interface ResponseSettings {
  allowedToRespond?: boolean;
  increasedChance?: boolean;
}