import moves from "./moves.js";

const shortestPath = (arr)=>{
    let short = arr[0];
    for(let i=1; i<arr.length; i++){
        if(arr[i].length === 0) continue;
        if(arr[i].length<short.length) short = arr[i];
    }
    return short;
}

function knightMovesRecursive(start, end, seen, path = {}){
    if(start.toString() === end.toString()) return [start];
    seen[start] = true;
    let paths = [];
    const possibleMoves = moves[start];

    for(let i=0; i<possibleMoves.length; i++){     
        let current = possibleMoves[i];

        if(path[current]){
            paths.push([start, ...path[current]]);
            continue;
        }
        if(current.toString() === end.toString()){
            paths.push([start, end]);
            continue;
        }
        if(seen[current]) continue;

        let possiblePaths = knightMovesRecursive(current, end, seen, path);
        if(possiblePaths && possiblePaths.length>0) paths.push([start,...possiblePaths]);
    }
    if(paths.length === 1){ 
        path[start] = paths[0];
        return paths[0];
    }
    if(paths.length > 1){
        let short = shortestPath(paths);
        path[start] = short;
        return short;
    }
    return;
}

function knightMoves(start, end){
    const seen = {};
    Object.keys(moves).forEach(move => seen[move] = false);
    const path = knightMovesRecursive(start, end, seen);
    console.log(`You made it in ${path.length-1} moves! Here's your path:`);
    path.forEach(node => {
        console.log(node);
    });
}

knightMoves([3,3],[4,3]);