


let botonTobin = document.getElementById("tobin");
botonTobin.addEventListener("click", datoTobin);


function datoTobin(){
    let dato = document.getElementById("datos");
    let datoParticular = document.getElementById("datoParticular");
    dato.removeChild(datoParticular);
    let div = document.createElement("div");
    div.setAttribute("id","datoParticular");
    let Input = `
    <div class="input-group mb-3">
    <span class="input-group-text" id="basic-addon1">Frecuencia Respiratoria</span>
    <input id="frTobin" type="text" class="form-control" placeholder="Ej.: 25" aria-label="Username" aria-describedby="basic-addon1">
    </div>

    <div class="input-group mb-3">
    <span class="input-group-text" id="basic-addon1">Volumen corriente (en litros) : </span>
    <input id="vtTobin" type="text" class="form-control" placeholder="Ej.: 0.450" aria-label="Username" aria-describedby="basic-addon1">
    </div>

    <div class="d-grid gap-2 col-6 mx-auto">

    <button id="calcularTobin" class="btn btn-primary" type="button">Calcular</button>
  
    </div>
    `;
    div.innerHTML = Input;
   
    dato.appendChild(div);
    let calcularTobin = document.getElementById("calcularTobin");
    calcularTobin.addEventListener("click", calculoTobin);
    
}


function calculoTobin() {
    let frTobin = document.getElementById("frTobin").value;
    let vtTobin = document.getElementById("vtTobin").value;
    let valorTobin = frTobin / vtTobin;
    let resultadoTobin = document.getElementById("contenedor");
    let resultados = document.createElement("div");
    resultados.setAttribute("class", "resultados");
    resultados.innerHTML = "<b>Tobin: " + valorTobin.toFixed()+ "</b><br>Valores mayores a 105 indican una moderada probabilidad de fallo en el destete";
    resultadoTobin.appendChild(resultados);

}






let botonRox = document.getElementById("rox");
botonRox.addEventListener("click", datoRox);

function datoRox(){
    let dato = document.getElementById("datos");
    let datoParticular = document.getElementById("datoParticular");
    dato.removeChild(datoParticular);
    let div = document.createElement("div");
    div.setAttribute("id","datoParticular");
    let Input = `
    <div class="input-group mb-3">
    <span class="input-group-text" id="basic-addon1">Saturacion:</span>
    <input id="satRox" type="text" class="form-control" placeholder="Ej.: 95" aria-label="Username" aria-describedby="basic-addon1">
    </div>

    <div class="input-group mb-3">
    <span class="input-group-text" id="basic-addon1">FiO2: </span>
    <input id="fioRox" type="text" class="form-control" placeholder="Ej.: 0.6" aria-label="Username" aria-describedby="basic-addon1">
    </div>

    <div class="input-group mb-3">
    <span class="input-group-text" id="basic-addon1">Frecuencia Respiratoria :  </span>
    <input id="frRox" type="text" class="form-control" placeholder="Ej.: 25" aria-label="Username" aria-describedby="basic-addon1">
    </div>

    <div class="d-grid gap-2 col-6 mx-auto">

    <button id="calcularRox" class="btn btn-primary" type="button">Calcular</button>
  
    </div>

    `;
    div.innerHTML = Input;
   
    dato.appendChild(div);
    
    let calcularRox = document.getElementById("calcularRox");
    calcularRox.addEventListener("click", calculoRox);
    
}
function calculoRox() {
    let satRox = document.getElementById("satRox").value;
    let fioRox = document.getElementById("fioRox").value;
    let frRox = document.getElementById("frRox").value;
    let roxCalc = ((satRox / fioRox) / frRox);
    let resultadoRox = document.getElementById("contenedor");
    let resultados = document.createElement("div");
    resultados.setAttribute("class", "resultados");
    resultados.innerHTML = "Rox: " + roxCalc.toFixed() + "<br>Valores de referencia: <br>Predictores de falla: <br>< 3 a los 60min de inicio de OAF <br><3.5 a las 6hs <br><4a las 12hs <br>Cuando se mide 12 hs despues del inicio de OAF, un IROX >4.88 es un determinante de exito";
    resultadoRox.appendChild(resultados);

}






let botonDelta = document.getElementById("delta");
botonDelta.addEventListener("click", datoDelta);

function datoDelta(){
    let dato = document.getElementById("datos");
    let datoParticular = document.getElementById("datoParticular");
    dato.removeChild(datoParticular);
    let div = document.createElement("div");
    div.setAttribute("id","datoParticular");
    let Input = `
    <div class="input-group mb-3">
    <span class="input-group-text" id="basic-addon1">Plateau:</span>
    <input id="platDelta" type="text" class="form-control" placeholder="Ej.: 22" aria-label="Username" aria-describedby="basic-addon1">
    </div>

    <div class="input-group mb-3">
    <span class="input-group-text" id="basic-addon1">PEEP Total: </span>
    <input id="peepDelta" type="text" class="form-control" placeholder="Ej.: 10" aria-label="Username" aria-describedby="basic-addon1">
    </div>

    <div class="d-grid gap-2 col-6 mx-auto">

    <button id="calcularDelta" class="btn btn-primary" type="button">Calcular</button>
  
    </div>

    `;
    div.innerHTML = Input;
   
    dato.appendChild(div);
    let calcularDelta = document.getElementById("calcularDelta");
    calcularDelta.addEventListener("click", calculoDelta);
}

function calculoDelta() {
    let platDelta = document.getElementById("platDelta").value;
    let peepDelta = document.getElementById("peepDelta").value;
    let deltaCalc = platDelta - peepDelta;
    let resultadoDelta = document.getElementById("contenedor");
    let resultados = document.createElement("div");
    resultados.setAttribute("class", "resultados");
    resultados.innerHTML = "Delta P : " + deltaCalc + "<br>El valor debe ser <15 para prevenir el daño asociado a la ventilación";
    resultadoDelta.appendChild(resultados);

}






let botonPafi = document.getElementById("pafi");
botonPafi.addEventListener("click", datoPafi);


function datoPafi(){
    let dato = document.getElementById("datos");
    let datoParticular = document.getElementById("datoParticular");
    dato.removeChild(datoParticular);
    let div = document.createElement("div");
    div.setAttribute("id","datoParticular");
    let Input = `
    <div class="input-group mb-3">
    <span class="input-group-text" id="basic-addon1">pO2:</span>
    <input id="poPafi" type="text" class="form-control" placeholder="Ej.: 85.5" aria-label="Username" aria-describedby="basic-addon1">
    </div>

    <div class="input-group mb-3">
    <span class="input-group-text" id="basic-addon1">FiO2: </span>
    <input id="fioPafi" type="text" class="form-control" placeholder="Ej.: 0.6" aria-label="Username" aria-describedby="basic-addon1">
    </div>

    <div class="d-grid gap-2 col-6 mx-auto">

    <button id="calcularPafi" class="btn btn-primary" type="button">Calcular</button>
  
    </div>
    

    `;
    div.innerHTML = Input;
   
    dato.appendChild(div);
    let calcularPafi = document.getElementById("calcularPafi");
    calcularPafi.addEventListener("click", calculoPafi);
    
}

function calculoPafi() {
    let poPafi = document.getElementById("poPafi").value;
    let fioPafi = document.getElementById("fioPafi").value;
    let deltaCalc = poPafi - fioPafi;
    let resultadoPafi = document.getElementById("contenedor");
    let resultados = document.createElement("div");
    resultados.setAttribute("class", "resultados");
    resultados.innerHTML = "PAFI: " + deltaCalc + "<br>Valores de referencia: <br>200 - 300: Leve <br>100 - 200: Moderado <br><100: Severo";
    resultadoPafi.appendChild(resultados);

}







let botonSafi = document.getElementById("safi");
botonSafi.addEventListener("click", datoSafi);

function datoSafi(){
    let dato = document.getElementById("datos");
    let datoParticular = document.getElementById("datoParticular");
    dato.removeChild(datoParticular);
    let div = document.createElement("div");
    div.setAttribute("id","datoParticular");
    let Input = `
    <div class="input-group mb-3">
    <span class="input-group-text" id="basic-addon1">Saturacion:</span>
    <input id="satSafi" type="text" class="form-control" placeholder="Ej.: 95" aria-label="Username" aria-describedby="basic-addon1">
    </div>

    <div class="input-group mb-3">
    <span class="input-group-text" id="basic-addon1">FiO2: </span>
    <input id="fioSafi" type="text" class="form-control" placeholder="Ej.: 0.6" aria-label="Username" aria-describedby="basic-addon1">
    </div>

    <div class="d-grid gap-2 col-6 mx-auto">

    <button id="calcularSafi" class="btn btn-primary" type="button">Calcular</button>
  
    </div>

    `;
    div.innerHTML = Input;
   
    dato.appendChild(div);
    let calcularSafi = document.getElementById("calcularSafi");
    calcularSafi.addEventListener("click", calculoSafi);
    
}

function calculoSafi() {
    let satSafi = document.getElementById("satSafi").value;
    let fioSafi = document.getElementById("fioSafi").value;
    let safiCalc = satSafi / fioSafi;
    let resultadoSafi = document.getElementById("contenedor");
    let resultados = document.createElement("div");
    resultados.setAttribute("class", "resultados");
    resultados.innerHTML = "SAFI: " + safiCalc.toFixed() + "<br>Valores de referencia: <br>310 - 460: Leve <br>160 - 310: Moderado <br><160: Severo";
    resultadoSafi.appendChild(resultados);

}







