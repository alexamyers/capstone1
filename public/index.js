const baseURL = `http://localhost:4001/api/routes`

const routesContainer = document.getElementById('routes_container');

const getRoutes = () => {
    axios.get(baseURL).then(res => console.log(res.data)).catch(err => console.log(err))
}


getRoutes();



