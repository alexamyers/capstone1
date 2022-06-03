const baseURL = `http://localhost:4000/api/routes`

let routesContainer = document.getElementById('routes_container');



const getRoutes = () => {
    axios.get(baseURL).then((res) => (routesContainer.innerText = JSON.stringify(res.data, null, 1))).catch(err => console.log(err))
}


// const getRouteNames =() => {
//     axios.get(baseURL).then(res => {
//         res.data.forEach(route => {
//             const name = `<div>${route.route_name}</div>`
//             routesContainer.innerHTML += routeElem
//         });
//     })
//     .catch(err => console.log(err))
// }

const getRouteNames = () => {
    axios.get(baseURL).then((res) => {
        const routeNamesList = res.data;

        console.log(routeNamesList);

        const routeName = routeNamesList.map((routes) => 
        `<section class="allTheRoutes">
        <div class="route_item">${routes.route_name}</div> 
        <div class="route_item">${routes.difficulty}</div> 
        <div class="route_item">${routes.style}</div> 
        <button id="add_route">add</button>
        </section>`);
        
        const nameDiv = document.getElementById('route_name');

        nameDiv.innerHTML = routeName.join("")
    });
};

// const sendToTicklist = ('add', id) => {
//     e.preventDefault()

// }

// getRoutes();
getRouteNames();