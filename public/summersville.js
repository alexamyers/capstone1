const baseURL = `http://localhost:4001/api/summersvilleroutes`

let routesContainer = document.getElementById('routes_container');

const getRoutes = () => {
    axios.get(baseURL).then((res) => (routesContainer.innerText = JSON.stringify(res.data, null, 1))).catch(err => console.log(err))
}

const getRouteNames = () => {
    axios.get(baseURL).then((res) => {
        const routeNamesList = res.data;

        console.log(routeNamesList);

        const routeName = routeNamesList.map((routes) => 
        `<section class="allTheRoutes">
        <div class="route_item">${routes.route_name}</div> 
        <div class="route_item">${routes.difficulty}</div> 
        <div class="route_item">${routes.style}</div> 
        <button onclick="sendToTicklist(${routes.route_id})" id="add_route">+</button>
        </section>`);
        
        const nameDiv = document.getElementById('route_name');

        nameDiv.innerHTML = routeName.join("")
    });
};

    const sendToTicklist = (id) => {
        axios.post('http://localhost:4001/api/ticklist', {route_id: id})
        .then(res => console.log(res.data))
    }

getRouteNames();