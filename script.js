const grid = document.querySelector(".grid")

function populateGrid(gridElement, x, y) {
    for (let line = 1; line <= y; line++) {
        lineElement = document.createElement("div")
        lineElement.classList.add("line")
        lineElement.classList.add(`line${line}`)
        for (let row = 1; row <= x; row++) {
            squareElement = document.createElement("div")
            squareElement.classList.add("square")
            squareElement.classList.add(`row${row}`)
            lineElement.appendChild(squareElement)
        }
        gridElement.appendChild(lineElement)
    }
}

function addHoverEffect(grid) {
    grid.addEventListener("mouseover", (e) => {
        e.target.classList.add("painted")
    })
}

populateGrid(grid, 16, 16)
addHoverEffect(grid)
bindControls()


function bindControls() {

    const controlGrid = document.querySelector("#lines")
    const controlLabel = document.querySelector("#label-line")

    controlGrid.addEventListener("input", (e) => {
        gridSize = e.target.value;
        controlLabel.textContent = `${gridSize} Lines`
        grid.replaceChildren()
        populateGrid(grid, gridSize, gridSize)
    })
}

