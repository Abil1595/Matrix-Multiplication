function generateMatrixInputs()
 {
    const rowsA = parseInt(document.getElementById("rowsA").value);
    const colsA = parseInt(document.getElementById("colsA").value);
    const rowsB = parseInt(document.getElementById("rowsB").value);
    const colsB = parseInt(document.getElementById("colsB").value); 
    
    if (isNaN(rowsA) || isNaN(colsA) || isNaN(rowsB) || isNaN(colsB)) 
    {  
        alert("Please enter valid numbers for matrix dimensions");     
        return;
    } 
   
    if (colsA !== rowsB)      
     {
        alert("Matrix multiplication not possible. Columns of Matrix A must match rows of Matrix B.");
        return;
    }
 
    const matrixA = document.getElementById("matrixATable");
    const matrixB = document.getElementById("matrixBTable");

    matrixA.innerHTML = "";
    matrixB.innerHTML = "";

    for (let i = 0; i < rowsA; i++)
     {
        const row = document.createElement("tr");
        for (let j = 0; j < colsA; j++) 
        {
            const cell = document.createElement("td");
            const input = document.createElement("input");
            input.type = "number";
            cell.appendChild(input);
            row.appendChild(cell);
        }
        matrixA.appendChild(row);
    }

    for (let i = 0; i < rowsB; i++) 
    {
        const row = document.createElement("tr");
        for (let j = 0; j < colsB; j++) 
        {
            const cell = document.createElement("td");
            const input = document.createElement("input");
            input.type = "number";
            cell.appendChild(input);
            row.appendChild(cell);
        }
        matrixB.appendChild(row);
    }

    document.getElementById("matrixInputs").style.display = "block";
}

function multiplyMatrices() 
{
    const matrixA = readMatrix("matrixATable");
    const matrixB = readMatrix("matrixBTable");

    const result = multiply(matrixA, matrixB);
    displayResult(result);
}

function readMatrix(tableId) 
{
    const table = document.getElementById(tableId);
    const rows = table.querySelectorAll("tr");
    const matrix = [];

    rows.forEach(row => {
        const cells = row.querySelectorAll("input");
        const rowData = [];
        cells.forEach(cell => {
            rowData.push(parseFloat(cell.value));
        });
        matrix.push(rowData);
    });

    return matrix;
}

function multiply(matrixA, matrixB)
 {
    const rowsA = matrixA.length;
    const colsA = matrixA[0].length;
    const colsB = matrixB[0].length;

    const result = [];

    for (let i = 0; i < rowsA; i++) {
        const row = [];
        for (let j = 0; j < colsB; j++) {
            let sum = 0;
            for (let k = 0; k < colsA; k++) {
                sum += matrixA[i][k] * matrixB[k][j];
            }
            row.push(sum);
        }
        result.push(row);
    }

    return result;
}

function displayResult(resultMatrix) 
{
    const resultTable = document.getElementById("resultTable");
    resultTable.innerHTML = "";

    resultMatrix.forEach(rowData => {
        const row = document.createElement("tr");
        rowData.forEach(cellData => {
            const cell = document.createElement("td");
            cell.textContent = cellData;
            row.appendChild(cell);
        });
        resultTable.appendChild(row);
    });

    document.getElementById("result").style.display = "block";
}


