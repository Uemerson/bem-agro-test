export interface Map {
  results: {
    [index: number]: {
      geometry: {
        location: {
          lat: number;
          lng: number;
        };
      };
    };
  };
}
