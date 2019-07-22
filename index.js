var planets = [];
fetch('https://swapi.co/api/planets/').then(function(response){
    return response.json();
}).then(function(json) {
    planets = json.results
    f_showdata(planets)
})

function f_filter(){
    var q = document.getElementById('filter').value;
    data=planets.filter(function(planet){
        return planet.name.toLowerCase().includes(q) || planet.rotation_period.includes(q) ||
        planet.orbital_period.includes(q) || planet.diameter.includes(q) || planet.climate.includes(q)||
        planet.gravity.includes(q) || planet.terrain.includes(q) || planet.surface_water.includes(q) ||
        planet.population.includes(q)
    });
    f_showdata(data)
}
function f_showdata(planets){
    var tbody= document.getElementById("isidata");
    var tr;
    var td;
    tbody.innerHTML='';
    for (var i = 0; i < planets.length;i++){
        tr = tbody.insertRow(tbody.rows.length);
        td=tr.insertCell(tr.cells.length);
        td.setAttribute("align","center");
        td.innerHTML=i+1;    
        td=tr.insertCell(tr.cells.length);
        td.setAttribute("align","center");
        td.innerHTML=planets[i].name;
        td=tr.insertCell(tr.cells.length);
        td.setAttribute("align","center");
        td.innerHTML=planets[i].rotation_period;
        td=tr.insertCell(tr.cells.length);
        td.setAttribute("align","center");
        td.innerHTML=planets[i].orbital_period;
        td=tr.insertCell(tr.cells.length);
        td.setAttribute("align","center");
        td.innerHTML=planets[i].diameter;
        td=tr.insertCell(tr.cells.length);
        td.setAttribute("align","center");
        td.innerHTML=planets[i].climate;
        td=tr.insertCell(tr.cells.length);
        td.setAttribute("align","center");
        td.innerHTML=planets[i].gravity;
        td=tr.insertCell(tr.cells.length);
        td.setAttribute("align","center");
        td.innerHTML=planets[i].terrain;
        td=tr.insertCell(tr.cells.length);
        td.setAttribute("align","center");
        td.innerHTML=planets[i].surface_water;    
        td=tr.insertCell(tr.cells.length);
        td.setAttribute("align","center");
        td.innerHTML=planets[i].population;
    }

}