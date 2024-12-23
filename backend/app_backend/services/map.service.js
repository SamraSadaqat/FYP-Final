var request = require('request');

let findPlace = async (obj) => {
    let {
        lat,
        lng,
        placeId
    } = obj;
    let url = "geocode/json?latlng=" + lat + "," + lng + "&sensor=true";
    if (placeId) {
        url = "place/details/json?placeid=" + placeId
    }
    let endPoint = `https://maps.googleapis.com/maps/api/${url}&key=AIzaSyAohZ7btYPVl4_ABdRmMOO7t2Jo9cQF7s4`;
    return new Promise((resolve, reject) => {
        request.get(endPoint, (error, response, body) => {
            if (!error && response.statusCode == 200) {
                body = JSON.parse(body);
                let placeName = "";
                if (placeId) {
                    placeName = body.result.formatted_address;
                } else {
                    let result = body.results.filter(address => {
                        let matchItems = address.types.filter(type => (type == 'route') || (type == 'street_address'));
                        if (matchItems.length > 0) {
                            return true;
                        }
                        return false;
                    })
                    if (result && result.length > 0) {
                        placeName = result[0].formatted_address;
                    } else {
                        placeName = body.results[0].formatted_address;
                    }
                }
                return resolve(placeName);
            }
            return resolve("");
        })
    });
}

let findCountryCity = async (obj) => {
    try {
        let {
            lat,
            lng
        } = obj;
        let url = "geocode/json?latlng=" + lat + "," + lng + "&sensor=true";
        let endPoint = `https://maps.googleapis.com/maps/api/${url}&key=${process.env.MAP_SECRET_KEY}`;
        return new Promise((resolve, reject) => {
            request.get(endPoint, (error, response, body) => {
                let obj = {
                    country: '',
                    city: ''
                }
                if (!error && response.statusCode == 200) {
                    body = JSON.parse(body);
                    let countryResult = body.results[0].address_components.filter(item => {
                        return item.types.includes('country')
                    })
                    let cityResult = body.results[0].address_components.filter(item => {
                        return item.types.includes('locality')
                    })
                    if (countryResult && countryResult.length > 0) {
                        obj.country = countryResult[0].long_name;
                    }
                    if (cityResult && cityResult.length > 0) {
                        obj.city = cityResult[0].long_name;
                    }
                    return resolve(obj);
                }
                return resolve(obj);
            })
        });
    } catch (error) {
        console.log("Error ---", error);
    }
}

module.exports = {
    findPlace: findPlace,
    findCountryCity: findCountryCity
}