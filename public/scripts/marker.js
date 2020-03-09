//
const placeMarker = function(location) {
  let marker = new google.maps.Marker({
    postion: location,
    map: map
  });
};

module.exports = map;
