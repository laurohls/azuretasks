export interface IAtividades {
  Id: number;
  WorkItemType: string;
  Title: string;
  State: string;
  AreaPath: string;
  IterationPath: string;
  CreatedDate: Date;
  ActivatedDate: Date;
  ResolvedDate: Date;
  ClosedDate: Date;
  OriginalEstimate: number;
  Remaining: number;
  Completed: number;
  DataInicio: Date;
  TempoAtivado: number;
}
