function createScreenSizes(sizesArray) {
    let output = '';
    for (let i = 0; i < sizesArray.length; i++) {
        const currentSizeInches = sizesArray[i];
        const currentSizeCm = Math.round(sizesArray[i] * 2.54);

        output = output + `${currentSizeInches} inch (${currentSizeCm} cm)`;

        if (i < sizesArray.length - 1) {
            output = `${output} | `;
        }
    }

    return output;
}

export default createScreenSizes;



