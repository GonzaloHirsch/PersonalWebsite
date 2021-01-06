import { cloneDeep } from 'lodash'

export const DIMENSIONS = {
  xs: { rows: 14, cols: 10 },
  sm: { rows: 14, cols: 17 },
  md: { rows: 14, cols: 25 },
  lg: { rows: 14, cols: 25 },
  xl: { rows: 14, cols: 25 }
}

export function createBoard (rows, cols) {
  const board = []
  for (let i = 0; i < rows; i++) {
    board.push(new Array(cols))
    for (let j = 0; j < cols; j++) {
      board[i][j] = 0
    }
  }
  return board
}

export function runStep (board) {
  let tmp = cloneDeep(board)
  const maxI = board.length
  const maxJ = board[0].length
  for (let i = 0; i < maxI; i++) {
    for (let j = 0; j < maxJ; j++) {
      tmp[i][j] = updateCell(board, i, j, maxI, maxJ)
    }
  }
  return tmp
}

function updateCell (board, i, j, maxI, maxJ) {
  const live = countLiveNeighbours(board, i, j, maxI, maxJ)
  const isAlive = board[i][j] === 1
  if (isAlive) {
    return (live < 2 || live > 3) ? 0 : 1
  } else {
    return live === 3 ? 1 : 0
  }
}

function countLiveNeighbours (board, i, j, maxI, maxJ) {
  let live = 0
  for (let _i = -1; _i <= 1; _i++) {
    for (let _j = -1; _j <= 1; _j++) {
      if (_i !== 0 || _j !== 0) {
        live += board[myMod(i + _i, maxI)][myMod(j + _j, maxJ)] === 1 ? 1 : 0
      }
    }
  }
  return live
}

function myMod (n, mod) {
  let val = n % mod
  return val < 0 ? mod + val : val
}
