import { mockImages, mocks } from "./";
import camelize from "camelize";

export const restaurantsRequest = (location = "37.7749295,-122.4194155") => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("not found");
    }
    resolve(mock);
  });
};

export const transformRestaurants = (results) => {
  const mappedResults = results.map((r) => {
    r.photos = r.photos.map((p) => {
      return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
    });
    return {
      ...r,
      isOpenNow: r.opening_hours && r.opening_hours.open_now,
      isClosedTemporarily: r.business_status === "CLOSED_TEMPORARILY",
    };
  });
  return camelize(mappedResults);
};

// restaurantsRequest().then((result) => {
//    transformRestaurants(result.results);
// }).catch((err)=>{
//     console.log(err);
// });
