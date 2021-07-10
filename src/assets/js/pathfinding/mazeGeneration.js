import { randomNumber } from '../lib'

export const CONSTANTS = {
  WALL: 0,
  SPACE: 1
}

class Cell {
  constructor (x, y) {
    this.x = x
    this.y = y
  }
  rep () {
    return this.x + '-' + this.y
  }
}

// Direction constants
const DIRECTIONS = [new Cell(1, 0), new Cell(-1, 0), new Cell(0, 1), new Cell(0, -1)]
const SEEK_DIRECTIONS = [new Cell(2, 0), new Cell(-2, 0), new Cell(0, 2), new Cell(0, -2)]

export const DIMENSIONS = {
  xs: { rows: 15, cols: 10 },
  sm: { rows: 15, cols: 17 },
  md: { rows: 15, cols: 40 },
  lg: { rows: 15, cols: 40 },
  xl: { rows: 15, cols: 40 }
}

// Computes the frontiers and
function computeFrontier (maze, frontier, frontierSet, curr, w, h) {
  let nx, ny, cell
  SEEK_DIRECTIONS.forEach(dir => {
    nx = curr.x + dir.x
    ny = curr.y + dir.y
    if (nx < w && nx >= 0 && ny < h && ny >= 0 && maze[nx][ny] === CONSTANTS.WALL) {
      cell = new Cell(nx, ny)
      if (!frontierSet[cell.rep()]) {
        frontier.push(cell)
        frontierSet[cell.rep()] = true
      }
    }
  })
}

function createMaze (rows, cols) {
  // Inits the maze
  const maze = []
  for (let i = 0; i < rows; i++) {
    maze.push(new Array(cols))
    for (let j = 0; j < cols; j++) {
      maze[i][j] = CONSTANTS.WALL
    }
  }
  return maze
}

export function generateMaze (rows, cols) {
  // Creating the maze
  const maze = createMaze(rows, cols)
  // Declare variables
  let frontier = [], neighbours = [], frontierSet = {}, curr, currIndex, currNeighbour, dir
  let sx, sy, nx, ny
  // Create first cell
  curr = new Cell(randomNumber(0, rows), randomNumber(0, cols))
  // Mark cell as space
  maze[curr.x][curr.y] = CONSTANTS.SPACE
  // Compute frontiers of cell
  computeFrontier(maze, frontier, frontierSet, curr, rows, cols)

  while (frontier.length > 0) {
    // Reset neighbours
    neighbours = []
    // Choose current frontier
    currIndex = randomNumber(0, frontier.length)
    curr = frontier[currIndex]
    // Remove item from arr
    frontier = frontier.filter((v, i, arr) => {
      return currIndex !== i
    })

    // Calculate neighbours
    SEEK_DIRECTIONS.forEach((dir, index) => {
      sx = curr.x + dir.x
      sy = curr.y + dir.y
      nx = curr.x + DIRECTIONS[index].x
      ny = curr.y + DIRECTIONS[index].y
      if (sx < rows && sx >= 0 && sy < cols && sy >= 0 && maze[sx][sy] === CONSTANTS.SPACE && maze[nx][ny] === CONSTANTS.WALL) {
        neighbours.push(DIRECTIONS[index])
      }
    })

    // Recompute frontiers
    computeFrontier(maze, frontier, frontierSet, curr, rows, cols)

    // Get random neighbour
    if (neighbours.length > 0) {
      currNeighbour = randomNumber(0, neighbours.length)
      dir = neighbours[currNeighbour]
      maze[curr.x][curr.y] = CONSTANTS.SPACE
      maze[curr.x + dir.x][curr.y + dir.y] = CONSTANTS.SPACE
    }
  }

  console.log(maze)

  return maze
}
