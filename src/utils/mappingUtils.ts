export interface ICategory {
  [key: string]: ISubject;
}
interface ISubject {
  [key: string]: string[];
}

export interface IRouteMapping {
  routeMapping: ICategory;
  category: string;
  subject: string;
  origin: string;
}

type RouterMapping = (
  routeMapping: ICategory,
  category: string,
  subject: string,
  origin: string
) => void;

export const routeMapping: RouterMapping = (
  routeMapping,
  category,
  subject,
  origin
) => {
  if (routeMapping[category] === undefined) routeMapping[category] = {};
  if (routeMapping[category][subject] === undefined)
    routeMapping[category][subject] = [];
  routeMapping[category][subject].push(origin);
};
