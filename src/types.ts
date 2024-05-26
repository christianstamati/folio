export type ImageSource = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type Month = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export type ExperienceData = {
  from: {
    year: number;
    month: Month;
  };
  to:
    | {
        year: number;
        month: Month;
      }
    | "present";
  at: string;
  header: string;
  description?: string;
};
