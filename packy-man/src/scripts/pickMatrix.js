

const addBinArrays= (blocks, index) => {
aarToRetun = [];

    const checkingLeftBlockBin = (sideBin) => {
        if (sideBin.length > 4) {
            if (sideBin === "10000") {arrToReturn = all;}
            else {arrToReturn = leftClosed;}
        } else if (sideBin[2] === "0") {arrToReturn = leftClosed;
        } else if (sideBin[2] === "1") {arrToReturn = left;}
        return arrToReturn;
    };
    
    const checkingTopBlockBin = (sideBin) =>{
        if (sideBin.length > 4) {
            if (sideBin === "10000") {arrToReturn = all;}
            else {arrToReturn = topClosed;}
        } else if (sideBin[3] === "0") {arrToReturn = topClosed;
        } else if (sideBin[3] === "1") {arrToReturn = top;}
        return arrToReturn;
    };
    const checkingRightBlockBin = (sideBin) => {
        if (sideBin.length > 4) {
            if (sideBin === "10000") {arrToReturn = all;}
            else {arrToReturn = rightClosed;}
        } else if (sideBin[0] === "0") {arrToReturn = rightClosed;
        } else if (sideBin[0] === "1") {arrToReturn = right;}
        return arrToReturn;
    };
    const checkingBottomBlockBin = (sideBin) => {
        if (sideBin.length > 4) {
            if (sideBin === "10000") {arrToReturn = all;}
            else {arrToReturn = bottomClosed;}
        } else if (sideBin[1] === "0") {arrToReturn = bottomClosed;
        } else if (sideBin[1] === "1") {arrToReturn = bottom;}
        return arrToReturn;
    };
    
    const findCommonElements= (arrays) => {
        // Start with the first array and filter it
        return arrays.reduce((result, currentArray) => {
          return result.filter(element => currentArray.includes(element));
        }, arrays[0]);
      };
    let totalArray = [];

    let left = [8,9,10,11,12,13,14,15];
    let top = [4,5,6,7,12,13,14,15];
    let right = [2,3,6,7,10,11,14,15];
    let bottom = [1,3,5,7,9,11,13,15];
    let all = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    let leftClosed = [0,1,2,3,4,5,6,7];
    let topClosed = [0,1,2,3,8,9,10,11];
    let rightClosed = [0,1,4,5,8,9,12,13];
    let bottomClosed = [0,2,4,6,8,10,12,14];

    let blocksArray = [{name:"Empty",bin:"0000"},{name:"BottDE",bin:"0001"},{name:"LeftDE",bin:"0010"},{name:"LTC",bin:"0011"},{name:"TopDE",bin:"0100"},{name:"BlockSV",bin:"0101"},{name:"LBC",bin:"0110"},{name:"LeftT",bin:"0111"},{name:"RightDE",bin:"1000"},{name:"RTC",bin:"1001"},{name:"BlockSH",bin:"1010"},{name:"TopT",bin:"1011"},{name:"RBC",bin:"1100"},{name:"RightT",bin:"1101"},{name:"BotT",bin:"1110"},{name:"FW",bin:"1111"},{name:"Unchosen",bin:"10000"},{name:"CornBord",bin:"10001"},{name:"HorizBord",bin:"10010"},{name:"VertBord",bin:"10011"},];

    let leftBin =blocks[index-1].bin;
    let topBin = blocks[index-11].bin;
    let rightBin = blocks[index+1].bin;
    let bottBin = blocks[index+11].bin;

    totalArray.push(checkingLeftBlockBin(leftBin));
    totalArray.push(checkingTopBlockBin(topBin));
    totalArray.push(checkingRightBlockBin(rightBin));
    totalArray.push(checkingBottomBlockBin(bottBin));

    let matrix = leftBin+topBin+rightBin+bottBin;

    let arraysFinal = findCommonElements(totalArray);  
    let finalNameArray = [];
    arraysFinal.forEach((element) => finalNameArray.push(blocksArray[element].name));
    return finalNameArray;

} ;

 
    module.exports = {addBinArrays}; 