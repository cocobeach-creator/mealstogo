import camelize from "camelize";
import { locations } from "./location.mock";

export const locationRequest = (searchTerm) => {
  return new Promise((resolve, reject) => {
    const locationMock = locations[searchTerm];
    if (!locationMock) {
      reject("not found");
    }
    resolve(locationMock);
  });
};

export const locationTransform = (result) => {
  const viewport = camelize(result.results)[0].geometry.viewport;
  const location = camelize(result.results)[0].geometry.location;
  const { lng, lat } = location;

  return { lat, lng, viewport: viewport };
};
