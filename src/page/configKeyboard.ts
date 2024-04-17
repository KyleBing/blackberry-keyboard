const keyboardWidth = 500
const keyboardHeight = 310
const keyWidth = keyboardWidth / 10
const trackPadWidth= 42
const functionPanelHeight = 70

const normalKeyRatio = 1
const functionKeyWidth = (keyboardWidth - trackPadWidth) / 5


enum EnumModel {
    bb9900,
    bbq10,
    bbq20
}

const ModelNameMap = new Map([
    [EnumModel.bbq10, "BlackBerry Q10"],
    [EnumModel.bbq20, "BlackBerry Q20"],
    [EnumModel.bb9900, "BlackBerry 9900"],
])

export  {
    keyboardHeight,
    keyboardWidth,
    keyWidth,
    trackPadWidth,
    functionKeyWidth,
    functionPanelHeight,
    normalKeyRatio,
    EnumModel,
    ModelNameMap
}
