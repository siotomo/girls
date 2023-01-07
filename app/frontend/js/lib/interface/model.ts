type BaseModel = {
  id: number;
  created_at: string;
  updated_at: string;
};

export type GirlModel = BaseModel & {
  name: string;
  age: number;
  score: number;
};
