import { ICategory, ICategoriesData } from "@/types/types";
import axios from "axios";

export const getCategories = (): Promise<ICategory[]> =>
  axios.get('https://ymtaz.sa/api/client/digital-guide/categories')
    .then(function (response :ICategoriesData) {
      console.log(response)
      return response.data.data.categories
    })

