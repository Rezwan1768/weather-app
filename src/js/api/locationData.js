// Used for getting longitude and latitude of an address/location
export async function getCordinates(address) {
  const baseUrl = "https://nominatim.openstreetmap.org/search";
  // Parameters for the API call
  const params = new URLSearchParams({
    q: address,
    format: "json",
    limit: 1,
    addressdetails: 1,
  });
  const url = `${baseUrl}?${params.toString()}`;

  try {
    const response = await fetch(url, { mode: "cors" });
    const data = await response.json();

    // Extract the necessary data
    const extractedData = {
      coordinates: [data[0].lat, data[0].lon], // latitude and longitude
      location: {},
    };
    // Country and city may not be present, check before adding them
    const addressInfo = data[0].address;
    if (addressInfo && "country" in addressInfo)
      extractedData.location.country = data[0].address.country;
    if (addressInfo && "city" in addressInfo) {
      extractedData.location.city = data[0].address.city;
    }
    return extractedData;
  } catch (error) {
    throw error;
  }
}
