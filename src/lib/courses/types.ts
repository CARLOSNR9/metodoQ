export type CourseRecord = {
  id: string;
  name: string;
  description: string;
  professorId: string;
  studentIds: string[];
  isActive: boolean;
  createdAt: string | null;
};

export type CourseInput = {
  name: string;
  description: string;
};
