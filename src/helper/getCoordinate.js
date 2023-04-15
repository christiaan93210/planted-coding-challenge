import customerLocations from ".././data/customerLocations.json";

const getCoordinate = (props) => {
  for (let i = 0; i < customerLocations.length; i++) {
    if (customerLocations[i].name === props) {
      var result = {};
      result.latitude = customerLocations[i].latitude;
      result.longitude = customerLocations[i].longitude;
      return result;
    }
  }
  return false;
};

export default getCoordinate;
