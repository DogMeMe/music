export interface IRecommend {
  id: number;
  name: string;
  picUrl: string;
  playCount: number;
}
export interface IRecommendResponse {
  result: IRecommend[];
  code: number;
  hasTaste: boolean;
  category: number;
}
