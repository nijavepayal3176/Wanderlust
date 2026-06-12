

    const map = new mapboxgl.Map({
// accessToken="pk.eyJ1IjoicGF5YWxuaWphdmUiLCJhIjoiY21xMXhuaG4wMDBudTJwcjFheW5jNGd1ZCJ9.LN_IuYJpbbocJ9OU65m7_w",
accessToken=mapToken,
        container: 'map', // container ID
        center: listing.geometry.coordinates,// starting position [lng, lat]. Note that lat must be set between -90 and 90
        zoom: 9 // starting zoom
    });

const marker = new mapboxgl.Marker({color:"red"})
.setLngLat(listing.geometry.coordinates).
setPopup(new mapboxgl
    .Popup({offset:25}).setHTML(`<p><b>${listing.title}</b><i> (Exact location will be provided after booking)</i></p>`))
    .addTo(map);


// mapboxgl.accessToken = mapToken;

// const map = new mapboxgl.Map({
//     container: "map",
//     style: "mapbox://styles/mapbox/streets-v12",
//     center: listing.geometry.coordinates,
//     zoom: 9
// });

// const marker = new mapboxgl.Marker({ color: "red" })
//     .setLngLat(listing.geometry.coordinates)
//     .setPopup(
//         new mapboxgl.Popup({ offset: 25 })
//             .setHTML(
//                 `<p><b>${listing.title}</b><br>(Exact location will be provided after booking)</p>`
//             )
//     )
//     .addTo(map);