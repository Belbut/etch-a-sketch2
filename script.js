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

populateGrid(grid, 16, 16)