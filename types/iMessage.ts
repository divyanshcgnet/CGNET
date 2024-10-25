import {
  MessageContentDelta,
  MessageContent,
} from 'openai/resources/beta/threads/messages.mjs'

export interface IMessage {
  id: string
  role: 'assistant' | 'user' | 'system'
  content: Array<MessageContentDelta | MessageContent>
}

export enum MessageTypeEnum {
  ASSISTANT = 'ASSISTANT',
  USER = 'USER',
}
