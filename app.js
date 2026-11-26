const map = new naver.maps.Map("map", {
  center: new naver.maps.LatLng(37.5444, 127.0374),
  zoom: 12,
});
const infoWindow = new naver.maps.InfoWindow({ content: "" });
let myMarker = null;

// Load park data and add markers
async function loadParks() {
  const response = await fetch("parks.json");
  const parks = await response.json();
  const list = document.getElementById("park-list");
  list.innerHTML = "";

  parks.forEach((park) => {
    addParkMarker(park);

    const li = document.createElement("li");
    li.className = "park-card";
    li.innerHTML = `<strong>${park.name}</strong><p>${park.info}</p>`;
    li.addEventListener("click", () => {
      map.setCenter(new naver.maps.LatLng(park.lat, park.lng));
      map.setZoom(15);
    });
    list.appendChild(li);
  });
}

function addParkMarker(park) {
  const marker = new naver.maps.Marker({
    position: new naver.maps.LatLng(park.lat, park.lng),
    map: map,
    title: park.name,
  });

  naver.maps.Event.addListener(marker, "click", () => {
    infoWindow.setContent(
      `<div class="popup"><strong>${park.name}</strong><br>${park.info}</div>`
    );
    infoWindow.open(map, marker);
  });
}

// Show the user's position
function showMyLocation() {
  navigator.geolocation.getCurrentPosition(
    (pos) => {
      const me = new naver.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
      if (myMarker) myMarker.setMap(null);
      myMarker = new naver.maps.Marker({
        position: me,
        map: map,
        icon: {
          content: '<div class="me-dot"></div>',
          anchor: new naver.maps.Point(11, 11),
        },
      });
      map.setCenter(me);
      map.setZoom(15);
    },
    (err) => alert("Could not get your location: " + err.message)
  );
}

// Wire everything up
document.getElementById("locate-btn").addEventListener("click", showMyLocation);
naver.maps.Event.addListener(map, "click", () => infoWindow.close());
loadParks();
showMyLocation();