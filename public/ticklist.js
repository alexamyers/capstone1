const baseURL = `http://localhost:4001/api/ticklist`;

const ticklistContainer = document.getElementById('ticked_routes_container');

const getRoutes = () => {
    axios.get(baseURL).then((res) => (routesContainer.innerText = JSON.stringify(res.data, null, 1))).catch(err => console.log(err))
}

const getTicklist = () => {
    axios.get(baseURL).then((res) => {
        const routeNamesList = res.data;

        console.log(routeNamesList);

        const routeName = routeNamesList.map((routes) => 
        `<section class="allTheRoutes">
        <div class="route_item">${routes.route_name}</div> 
        <div class="route_item">${routes.difficulty}</div> 
        <div class="route_item">${routes.style}</div> 
        <button onclick="deleteRoute(${routes.route_id})" id="remove_route">-</button>
        </section>`);
        
        const nameDiv = document.getElementById('route_name');

        nameDiv.innerHTML = routeName.join("")
    });
};

// const deleteRoute = (route_id) => {
//     axios.delete(baseURL + `/${route_id}`).then(alert(`${route_name} has been removed from your ticklist`))

// } 

getTicklist();
