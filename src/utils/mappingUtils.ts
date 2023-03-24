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

export const routeMapping = (
  routeMapping: ICategory,
  category: string,
  subject: string,
  origin: string
) => {
  if (routeMapping[category] === undefined) routeMapping[category] = {};
  if (routeMapping[category][subject] === undefined)
    routeMapping[category][subject] = [];
  routeMapping[category][subject].push(origin);
};
