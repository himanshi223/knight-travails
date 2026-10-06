const moves = {};
const cells = 8;

for(let i=0;i<cells;i++){
    for(let j=0;j<cells;j++){
        moves[[i,j]] = [];
    }
}

for(let cell in moves){
    let x = +cell[0];
    let y = +cell[2];
    if(isMoveLegal(x-1,y-2)) moves[cell].push([x-1,y-2]);
    if(isMoveLegal(x-1,y+2)) moves[cell].push([x-1,y+2]);
    if(isMoveLegal(x+1,y-2)) moves[cell].push([x+1,y-2]);
    if(isMoveLegal(x+1,y+2)) moves[cell].push([x+1,y+2]);
    if(isMoveLegal(x-2,y-1)) moves[cell].push([x-2,y-1]);
    if(isMoveLegal(x-2,y+1)) moves[cell].push([x-2,y+1]);
    if(isMoveLegal(x+2,y-1)) moves[cell].push([x+2,y-1]);
    if(isMoveLegal(x+2,y+1)) moves[cell].push([x+2,y+1]);
}       

function isMoveLegal(i,j){
    if(i>=0 && i<8 && j>=0 && j<8)
        return true;
    return false;
}

export default moves;
