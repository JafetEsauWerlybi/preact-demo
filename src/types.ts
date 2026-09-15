export type NotePriority = 1 | 2 | 3;

export interface Note {
  id: string;
  title: string;
  content: string;
  createdAt: number;
  /** 1 = baja, 2 = media, 3 = alta */
  priority: NotePriority;
}
