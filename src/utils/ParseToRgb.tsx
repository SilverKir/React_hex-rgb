

const ParseToRgb = (hex: string) => {
    const hexColor = /#([a-f0-9]{6})\b/gi;
    if (!hexColor.test(hex)) {
        return 'Ошибка!'
    }

    // if (rgb.includes('NaN')) {
    //     return 'Ошибка!'
    // }
    return (
        `rgb(${parseInt(hex.slice(1, 3), 16)}, ${parseInt(hex.slice(3, 5), 16)}, ${parseInt(hex.slice(5, 7), 16)})`
    )
}

export default ParseToRgb