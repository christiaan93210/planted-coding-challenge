import plantationProjects from ".././data/plantationProjects.json";

const geolib = require("geolib");

const findProjects = (location) => {
  let newProjects = [];
  newProjects = plantationProjects.map((project) => ({
    ...project,
    distance:
      geolib.getDistance(
        location,
        { latitude: parseFloat(project.latitude), longitude: parseFloat(project.longitude) }
      ) / 1000,
  }));
  newProjects.sort((a, b) => parseFloat(a.distance) - parseFloat(b.distance));
  return newProjects.splice(0, 3);
};

export default findProjects;