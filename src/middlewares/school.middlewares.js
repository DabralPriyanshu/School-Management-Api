import BadRequestError from "../errors/BadRequestError.js";
const validateCreateSchoolRequest = async (req, res, next) => {
  if (!req.body?.name) {
    throw new BadRequestError("name");
  }
  if (!req.body?.address) {
    throw new BadRequestError("address");
  }
  if (!req.body?.latitude) {
    throw new BadRequestError("latitude");
  }
  if (!req.body?.longitude) {
    throw new BadRequestError("longitude");
  }

  const lat = parseFloat(req.body.latitude);
  const lon = parseFloat(req.body.longitude);

  if (isNaN(lat) || isNaN(lon)) {
    throw new BadRequestError("latitude and longitude");
  }

  if (lat < -90 || lat > 90) {
    throw new BadRequestError("Latitude must be between -90 and 90.");
  }
  if (lon < -180 || lon > 180) {
    throw new BadRequestError("Longitude must be between -180 and 180.");
  }
  req.body.latitude = lat;
  req.body.longitude = lon;
  next();
};
export default { validateCreateSchoolRequest };
