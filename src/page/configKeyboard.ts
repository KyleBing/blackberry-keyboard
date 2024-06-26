const keyboardWidth = 500
const keyboardHeight = 310
const keyWidth = keyboardWidth / 10
const trackPadWidth= 42
const functionPanelHeight = 70

const normalKeyRatio = 1
const normalKeyRatio9900 = 1.08
const bottomKeyRatio = 0.95

const functionKeyWidth = (keyboardWidth - trackPadWidth) / 5


enum EnumKeyboardModel {
    bb9900,
    bbq10,
    bbq20
}

const ModelNameMap = new Map([
    [EnumKeyboardModel.bbq10, "BlackBerry Q10"],
    [EnumKeyboardModel.bbq20, "BlackBerry Q20"],
    [EnumKeyboardModel.bb9900, "BlackBerry 9900"],
])

export  {
    keyboardHeight,
    keyboardWidth,
    keyWidth,
    trackPadWidth,
    functionKeyWidth,
    functionPanelHeight,
    normalKeyRatio,
    normalKeyRatio9900,
    bottomKeyRatio,
    EnumKeyboardModel,
    ModelNameMap
}
