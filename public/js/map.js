// mapboxgl.accessToken=mapToken;

//     const map = new mapboxgl.Map({
//         // accessToken: 'pk.eyJ1IjoicGF5YWxuaWphdmUiLCJhIjoiY21xMXV3NXF2MGR6ODJzczZraXBtc3V0ZSJ9.1gKeKRUTjbIW1MspnLbEFQ',
//         container: 'map', // container ID
//         style:"mapbox://styles/mapbox/streets-v12",
//         center:[77.2090,28.6139 ],  // starting position [lng, lat]. Note that lat must be set between -90 and 90
//         zoom: 9 // starting zoom
//     });


    const map = new mapboxgl.Map({
        accessToken: 'pk.eyJ1IjoicGF5YWxuaWphdmUiLCJhIjoiY21xMXhuaG4wMDBudTJwcjFheW5jNGd1ZCJ9.LN_IuYJpbbocJ9OU65m7_w',
        container: 'map', // container ID
        center: listing.geometry.coordinates,// starting position [lng, lat]. Note that lat must be set between -90 and 90
        zoom: 9 // starting zoom
    });

const marker = new mapboxgl.Marker({color:"red"})
.setLngLat(listing.geometry.coordinates).
setPopup(new mapboxgl
    .Popup({offset:25}).setHTML(`<p><b>${listing.title}</b><i> (Exact location will be provided after booking)</i></p>`))
    .addTo(map);
