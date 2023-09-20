function distanceFromHqInBlocks(block) {
    const hQ = 42;
    return Math.abs(hQ - block);
}

function distanceFromHqInFeet(block) {
    const blocks = distanceFromHqInBlocks(block);
    const feetPerBlock = 264;
    return blocks * feetPerBlock;
}

function distanceTravelledInFeet(startBlock, endBlock) {
    const blocks = Math.abs(startBlock - endBlock);
    const feetPerBlock = 264;
    return blocks * feetPerBlock;
}

function calculatesFarePrice(startBlock, destinationBlock) {
    const feet = distanceTravelledInFeet(startBlock, destinationBlock);

    if (feet <= 400) {
        return 0;
    } else if (feet > 400 && feet <= 2000) {
        return (feet - 400) * 0.02;
    } else if (feet > 2000 && feet <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far'; 
    }
}
