// Used for getting longitude and latitude of an address/location
export async function getCordinates(address) {
    const baseUrl = "https://nominatim.openstreetmap.org/search";
    const params = new URLSearchParams({
        q: address,
        format: "json",
        limit: 1
    });
    try {
        const url = `${baseUrl}?${params.toString()}`;
        const response = await fetch(url, { mode: "cors" });
        const addressData = await response.json();
        console.log(addressData);
       return [addressData[0].lat, addressData[0].lon];
    } catch(error) {
        throw error;
    }

}