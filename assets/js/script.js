$(document).ready(function(){


        
        $("#tobin").click(function(){
            $("#datoParticular").empty();
            $("#datoParticular").append(`
                                        <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1">Frecuencia Respiratoria</span>
                                        <input id="frTobin" type="number" class="form-control" placeholder="Ej.: 25" aria-label="Username" aria-describedby="basic-addon1">
                                        </div>
                                
                                        <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1">Volumen corriente (en litros) : </span>
                                        <input id="vtTobin" type="number" class="form-control" placeholder="Ej.: 0.450" aria-label="Username" aria-describedby="basic-addon1">
                                        </div>
                                
                                        <div class="d-grid gap-2 col-6 mx-auto">
                                
                                        <button id="calcularTobin" class="btn btn-primary" type="button">Calcular</button>
                                    
                                        </div>
                                        `);
            $("#calcularTobin").click(function(){
                let frTobin = $("#frTobin").val();
                let vtTobin = $("#vtTobin").val();
                let valorTobin = frTobin / vtTobin;
                $(".resultados").prepend(`
                                <div class="resultado" id="relTobin">
                                    <b>Tobin: ${valorTobin.toFixed()}</b>
                                    <br>Valores mayores a 105 indican una moderada probabilidad de fallo en el destete
                                </div>
                                    `);
                $("#relTobin").hide()
                $("#relTobin").slideDown(1000)
            })

        });

       






        $("#rox").click(function(){
            $("#datoParticular").empty();
            $("#datoParticular").append(`
                    <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">Saturacion:</span>
                    <input id="satRox" type="number" class="form-control" placeholder="Ej.: 95" aria-label="Username" aria-describedby="basic-addon1">
                    </div>

                    <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">FiO2: </span>
                    <input id="fioRox" type="number" class="form-control" placeholder="Ej.: 0.6" aria-label="Username" aria-describedby="basic-addon1">
                    </div>

                    <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">Frecuencia Respiratoria :  </span>
                    <input id="frRox" type="number" class="form-control" placeholder="Ej.: 25" aria-label="Username" aria-describedby="basic-addon1">
                    </div>

                    <div class="d-grid gap-2 col-6 mx-auto">

                    <button id="calcularRox" class="btn btn-primary" type="button">Calcular</button>
                
                    </div>

                    `);
            $("#calcularRox").click(function(){
                let satRox = $("#satRox").val();
                let fioRox = $("#fioRox").val();
                let frRox = $("#frRox").val();
                let roxCalc = ((satRox / fioRox) / frRox);
                $(".resultados").prepend(`
                                <div class="resultado"id="relRox">
                                <b>Rox: ${roxCalc.toFixed(2)}</b>
                                <br>Valores de referencia: <br>Predictores de falla: <br>< 3 a los 60min de inicio de OAF <br><3.5 a las 6hs <br><4a las 12hs <br>Cuando se mide 12 hs despues del inicio de OAF, un IROX >4.88 es un determinante de exito
                                </div>`)
                $("#relRox").hide()
                $("#relRox").slideDown(1000)
            })

        });








        $("#delta").click(function(){
            $("#datoParticular").empty();
            $("#datoParticular").append(`
                                        <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1">Plateau:</span>
                                        <input id="platDelta" type="number" class="form-control" placeholder="Ej.: 22" aria-label="Username" aria-describedby="basic-addon1">
                                        </div>

                                        <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1">PEEP Total: </span>
                                        <input id="peepDelta" type="number" class="form-control" placeholder="Ej.: 10" aria-label="Username" aria-describedby="basic-addon1">
                                        </div>

                                        <div class="d-grid gap-2 col-6 mx-auto">

                                        <button id="calcularDelta" class="btn btn-primary" type="button">Calcular</button>
                                    
                                        </div>

                                        `);
            $("#calcularDelta").click(function(){
                let platDelta = $("#platDelta").val();
                let peepDelta = $("#peepDelta").val();
                let deltaCalc = platDelta - peepDelta;
                $(".resultados").prepend(`
                                <div class="resultado"id="relDelta">
                                <b>Delta P : ${deltaCalc}</b>
                                <br>El valor debe ser <15 para prevenir el daño asociado a la ventilación
                                </div>`)
                $("#relDelta").hide()
                $("#relDelta").slideDown(1000)
            })

        });







        $("#pafi").click(function(){
            $("#datoParticular").empty();
            $("#datoParticular").append(`
                                        <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1">pO2:</span>
                                        <input id="poPafi" type="number" class="form-control" placeholder="Ej.: 85.5" aria-label="Username" aria-describedby="basic-addon1">
                                        </div>

                                        <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1">FiO2: </span>
                                        <input id="fioPafi" type="number" class="form-control" placeholder="Ej.: 0.6" aria-label="Username" aria-describedby="basic-addon1">
                                        </div>

                                        <div class="d-grid gap-2 col-6 mx-auto">

                                        <button id="calcularPafi" class="btn btn-primary" type="button">Calcular</button>
                                    
                                        </div>

                                        `);
            $("#calcularPafi").click(function(){
                let poPafi = $("#poPafi").val();
                let fioPafi = $("#fioPafi").val();
                let pafiCalc = poPafi / fioPafi;
                $(".resultados").prepend(`
                                    <div class="resultado"id="relPafi">
                                    <b>PAFI: ${pafiCalc.toFixed()}</b>
                                    <br>Valores de referencia: <br>200 - 300: Leve <br>100 - 200: Moderado <br><100: Severo
                                    </div>`)
                $("#relPafi").hide()
                $("#relPafi").slideDown(1000)
            })

        });






        $("#safi").click(function(){
            $("#datoParticular").empty();
            $("#datoParticular").append(`
                                        <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1">Saturacion:</span>
                                        <input id="satSafi" type="number" class="form-control" placeholder="Ej.: 95" aria-label="Username" aria-describedby="basic-addon1">
                                        </div>

                                        <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1">FiO2: </span>
                                        <input id="fioSafi" type="number" class="form-control" placeholder="Ej.: 0.6" aria-label="Username" aria-describedby="basic-addon1">
                                        </div>

                                        <div class="d-grid gap-2 col-6 mx-auto">

                                        <button id="calcularSafi" class="btn btn-primary" type="button">Calcular</button>
                                    
                                        </div>

                                        `);
            $("#calcularSafi").click(function(){
                let satSafi = $("#satSafi").val();
                let fioSafi = $("#fioSafi").val();
                let safiCalc = satSafi / fioSafi;
                $(".resultados").prepend(`
                                    <div class="resultado"id="relSafi">
                                    <b>SAFI: ${safiCalc.toFixed()}</b>
                                    </b><br>Valores de referencia: <br>310 - 460: Leve <br>160 - 310: Moderado <br><160: Severo
                                    </div>`);
                $("#relSafi").hide()
                $("#relSafi").slideDown(1000)
            });

        });





        $("#peso").click(function(){
            $("#datoParticular").empty();
            $("#datoParticular").append(`
                                        <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1">Altura (en cm):</span>
                                        <input id="altPeso" type="number" class="form-control" placeholder="Ej.: 145" aria-label="Username" aria-describedby="basic-addon1">
                                        </div>

                                        <div name="sexo" class="form-check" >
                                        <input id="mujer" class="form-check-input tipoSexo" type="radio" value="45.5"name="tipoSexo" id="flexRadioDefault1">
                                        <label class="form-check-label" for="flexRadioDefault1">
                                        Mujer
                                        </label>
                                        <br>
                                        <input id="hombre" class="form-check-input tipoSexo" type="radio" value="50" name="tipoSexo" id="flexRadioDefault2" checked>
                                        <label class="form-check-label" for="flexRadioDefault2">
                                        Hombre
                                        </label>
                                        </div>

                                        <div class="d-grid gap-2 col-6 mx-auto">

                                        <button id="calcularPeso" class="btn btn-primary" type="button">Calcular</button>
                                    
                                        </div>

                                        `);
            $("#calcularPeso").click(function(){
                let altPeso = $("#altPeso").val();
                let seleccion = $(".tipoSexo");
                    for (i=0;i<seleccion.length;i++){ 
                    if (seleccion[i].checked) 
                        break; 
                    } 
                    var valSexo = parseFloat(seleccion[i].value) ;
                
                if (valSexo==50){
                var valInd = parseFloat(0.75);
                }else{
                    var valInd = parseFloat(0.67);
                }
    
                let pesoCalc = ((altPeso-152.4) * valInd) + valSexo;
                $(".resultados").prepend(`
                                    <div class="resultado"id="relPeso">
                                    <b>Peso Teorico: ${pesoCalc.toFixed()}Kg</b>
                                    <br>Volumen corriente correspondiente al peso teorico: 
                                    <br> Por 6ml/kg: ${(pesoCalc.toFixed())*6} 
                                    <br> Por 7ml/kg:${(pesoCalc.toFixed())*7}
                                    <br> Por 8ml/kg:${(pesoCalc.toFixed())*8}
                                    </div>`);
                $("#relPeso").hide()
                $("#relPeso").slideDown(1000)
            });

        });




});

