function createMatrixA(){
        var MatrixA = document.getElementById("MatrixA");
      
        var matrixA = document.createElement("table");
        var matrixABody = document.createElement("tbody");

        var rowA = document.getElementById("rowA").value;
        var columnA = document.getElementById("columnA").value;

        for (var i = 1; i <= rowA; i++) {          
          var row = document.createElement("tr");
      
          for (var j = 1; j <= columnA; j++) {           
            var cell = document.createElement("td");
            var cellText = document.createElement("input");
            cellText.setAttribute("id",`matA-${""+i+j}`);
            cellText.setAttribute("type","text");
            cellText.setAttribute ("maxlength","3");
            cellText.setAttribute ("size","3");
            cell.appendChild(cellText);
            row.appendChild(cell);
          }       
          matrixABody.appendChild(row);
        }       
        matrixA.appendChild(matrixABody);
        MatrixA.appendChild(matrixA);
    }
function createMatrixB(){
        var MatrixB = document.getElementById("MatrixB");
      
        var matrixB = document.createElement("table");
        var matrixBBody = document.createElement("tbody");

        var rowB = document.getElementById("rowB").value;
        var columnB = document.getElementById("columnB").value;

        for (var i = 1; i <= rowB; i++) {          
          var row = document.createElement("tr");
      
          for (var j = 1; j <= columnB; j++) {           
            var cell = document.createElement("td");
            var cellText = document.createElement("input");
            cellText.setAttribute("id",`matB-${""+i+j}`);
            cellText.setAttribute("type","text");
            cellText.setAttribute ("maxlength","3");
            cellText.setAttribute ("size","3");
            cell.appendChild(cellText);
            row.appendChild(cell);
          }       
          matrixBBody.appendChild(row);
        }       
        matrixB.appendChild(matrixBBody);
        MatrixB.appendChild(matrixB);
    }

function createMatrixResultSumAndSub(){
        var MatrixResult = document.getElementById("matResult");
      
        var matrixResult = document.createElement("table");
        var matrixResultBody = document.createElement("tbody");

        var rowA = document.getElementById("rowA").value;
        var columnA = document.getElementById("columnA").value;

        for (var i = 1; i <= rowA; i++) {          
          var row = document.createElement("tr");
      
          for (var j = 1; j <= columnA; j++) {           
            var cell = document.createElement("td");
            var cellText = document.createElement("input");
            cellText.setAttribute("id",`matResult-${""+i+j}`);
            cellText.setAttribute("type","text");
            cellText.setAttribute ("maxlength","3");
            cellText.setAttribute ("size","3");
            cell.appendChild(cellText);
            row.appendChild(cell);
          }       
          matrixResultBody.appendChild(row);
        }       
        matrixResult.appendChild(matrixResultBody);
        MatrixResult.appendChild(matrixResult);
}
function sum(){
    createMatrixResultSumAndSub();
    document.getElementById('matrixResult').style.display = "block";
    

    var rowA = document.getElementById("rowA").value;
    var columnA = document.getElementById("columnA").value;

    for(var i=1; i<=rowA; i++){
        for(var j=1;j<=columnA; j++){
            document.getElementById(`matResult-${""+i+j}`).value = parseInt(document.getElementById(`matA-${""+i+j}`).value) + parseInt((document.getElementById(`matB-${""+i+j}`).value))
            
        }
    }
}
function sub(){
    createMatrixResultSumAndSub();
    document.getElementById('matrixResult').style.display = "block";
    

    var rowA = document.getElementById("rowA").value;
    var columnA = document.getElementById("columnA").value;

    for(var i=1; i<=rowA; i++){
        for(var j=1;j<=columnA; j++){
            document.getElementById(`matResult-${""+i+j}`).value = parseInt(document.getElementById(`matA-${""+i+j}`).value) - parseInt((document.getElementById(`matB-${""+i+j}`).value))
            
        }
    }
}
function createMatrixResultMultiply(){
  var MatrixResult = document.getElementById("matResult");
      
  var matrixResult = document.createElement("table");
  var matrixResultBody = document.createElement("tbody");

  var rowA = document.getElementById("rowA").value;
  var columnB = document.getElementById("columnB").value;
  for (var i = 1; i <= rowA; i++) {          
    var row = document.createElement("tr");

    for (var j = 1; j <= columnB; j++) {           
      var cell = document.createElement("td");
      var cellText = document.createElement("input");
      cellText.setAttribute("id",`matResult-${""+i+j}`);
      cellText.setAttribute("type","text");
      cellText.setAttribute ("maxlength","3");
      cellText.setAttribute ("size","3");
      cell.appendChild(cellText);
      row.appendChild(cell);
    }       
    matrixResultBody.appendChild(row);
  }       
  matrixResult.appendChild(matrixResultBody);
  MatrixResult.appendChild(matrixResult);
}
// function multiply(){
//   createMatrixResultMultiply();
  
//   document.getElementById('matrixResult').style.display = "block";
//   alert('To na funcao');

//   var rowA = document.getElementById("rowA").value;
//   var columnB = document.getElementById("columnB").value;

//   for(var i=1; i<=rowA; i++){
//       for(var j=1;j<=columnB; j++){
//         console.log(`MatA-${""+i+j} X MatB-${""+i+j} + MatA-${""+i+(j+1)} X MatB-${""+(i+1)+j} = MatResult-${""+i+j}`)

          
//       }
//   }


// }