// connect4
// two players, drop disc into 7colx6row grid

export type Player = 'red' | 'yellow';
export type Cell = Player | null;
export type Grid = Cell[][];
export type CellPosition = number[]; // 0,0 is top left cell, 6,7 is bottom right
export type EndState = 'red' | 'yellow' | 'draw' | undefined;

export type Game = {
    grid: Grid,
    currentPlayer: Player,
    endState?: EndState,
}

export const initialGameState = (): Game => {
    return {
        grid: Array.from({ length: 6 }, () => Array(7).fill(null)),
        currentPlayer: 'red',
    }
}

// const winningStates: CellPosition[] = [
//     [[6,0],[6,1],[6,2],[6,3]],
//     [[6,1],[6,2],[],[]],
// ]
export function move(game: Game, position: CellPosition): Game {
    const row = position[0];
    const col = position[1];
    if (game.grid[row][col] != null) {
        return game;
    }
    const nextGame = structuredClone(game);
    nextGame.grid[row][col] = game.currentPlayer;
    nextGame.currentPlayer = nextGame.currentPlayer === 'red' ? 'yellow' : 'red';
    // nextGame.endState = 
    return nextGame;
}