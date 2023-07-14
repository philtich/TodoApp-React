export type TODO = {
  id?: number;
  title: string;
 isDone:boolean
};

export type Inputs = {
  title: string;
};

// strapi
export interface TODOS {
  id: number
  attributes: Attributes
}

export interface Attributes {
  title: string
  createdAt: string
  isDone:boolean
  updatedAt: string
  publishedAt: string
}
