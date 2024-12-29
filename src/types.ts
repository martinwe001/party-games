export type Song = {
  id: string;
  lyric1: string;
  lyric2: string;
  lyric3: string;
  lyric4: string;
  lyric5: string;
  lyric6: string;
};

export type Category = {
  id: string;
  name: string;
  question1: string;
  question2: string;
  question3: string;
  question4: string;
  question5: string;
};

export type Jeopardy = {
  categories: Category[];
};
