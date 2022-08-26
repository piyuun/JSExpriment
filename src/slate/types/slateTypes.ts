import { BaseEditor } from 'slate';
import { ReactEditor } from 'slate-react';

export type CustomEditor = BaseEditor & ReactEditor;

export type QuoteElement = {
  type: 'block-quote';
  children: CustomText[];
};

export type Heading1Element = {
  type: 'heading-one';
  level: number;
  children: CustomText[];
};

export type Heading2Element = {
  type: 'heading-two';
  level: number;
  children: CustomText[];
};

export type ListElement = {
  type: 'list';
  children: CustomText[];
};

export type ParagraphElement = {
  type: 'paragraph';
  children: CustomText[];
};

export type CorrectElement = {
  type: 'correct';
  children: CustomText[];
};

export type ChangeElement = {
  type: 'change';
  children: CustomText[];
};

export type SentenceElement = {
  type: 'sentence';
  children: CustomText[];
};
export type EmptyElement = {
  type: 'empty';
  children: CustomText[];
};

export type CustomElement =
  | ParagraphElement
  | Heading1Element
  | Heading2Element
  | ListElement
  | ParagraphElement
  | ChangeElement
  | SentenceElement
  | EmptyElement;

export type FormattedText = {
  text: string;
  bold?: boolean;
  code?: boolean;
  italic?: boolean;
  underline?: boolean;
  custom?: boolean;
  blue?: boolean;
  red?: boolean;
};

export type CustomText = FormattedText;

declare module 'slate' {
  interface CustomTypes {
    Editor: CustomEditor;
    Element: CustomElement;
    Text: CustomText;
  }
}
