export interface ICategory {
  id: number,
  image: string,
  lawyers_count: number,
  need_license: number,
  title: string,
}
export interface ICategoriesData {
  data: {
    data: {
      categories: ICategory[]
    }
  }
}
export interface ILawyer {
  id?: number,
  name?: string,
  photo?: string,
  about?: string,
  rates_avg?: number | null,
  rates_count?: number | null,
  services?: ILawyerService[],
}
export interface ILawyerService{
  service_id?: number,
  title?: string,
  image?: string,
  intro?:string,
  ymtaz_price?:number
}