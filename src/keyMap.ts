import {ref} from "vue";

interface KeyEntity{
    mainKey: string,
    secondaryKey: string,
    isIconKey: boolean,
    iconName: string
}

const KeyMap = ref<Array<Array<KeyEntity>>>([
    [
        {mainKey: 'Q', secondaryKey: '#', isIconKey: false, iconName: ''},
        {mainKey: 'W', secondaryKey: '1', isIconKey: false, iconName: ''},
        {mainKey: 'E', secondaryKey: '2', isIconKey: false, iconName: ''},
        {mainKey: 'R', secondaryKey: '3', isIconKey: false, iconName: ''},
        {mainKey: 'T', secondaryKey: '(', isIconKey: false, iconName: ''},
        {mainKey: 'Y', secondaryKey: ')', isIconKey: false, iconName: ''},
        {mainKey: 'U', secondaryKey: '_', isIconKey: false, iconName: ''},
        {mainKey: 'I', secondaryKey: '-', isIconKey: false, iconName: ''},
        {mainKey: 'O', secondaryKey: '+', isIconKey: false, iconName: ''},
        {mainKey: 'P', secondaryKey: '@', isIconKey: false, iconName: ''},
    ],
    [
        {mainKey: 'A', secondaryKey: '*', isIconKey: false, iconName: ''},
        {mainKey: 'S', secondaryKey: '4', isIconKey: false, iconName: ''},
        {mainKey: 'D', secondaryKey: '5', isIconKey: false, iconName: ''},
        {mainKey: 'F', secondaryKey: '6', isIconKey: false, iconName: ''},
        {mainKey: 'G', secondaryKey: '/', isIconKey: false, iconName: ''},
        {mainKey: 'H', secondaryKey: ':', isIconKey: false, iconName: ''},
        {mainKey: 'J', secondaryKey: ';', isIconKey: false, iconName: ''},
        {mainKey: 'K', secondaryKey: '\'', isIconKey: false, iconName: ''},
        {mainKey: 'L', secondaryKey: '"', isIconKey: false, iconName: ''},
        {mainKey: '←', secondaryKey: '', isIconKey: true, iconName: 'backspace'},
    ],
    [
        {mainKey: '', secondaryKey: 'alt', isIconKey: true, iconName: 'alt'},
        {mainKey: 'Z', secondaryKey: '7', isIconKey: false, iconName: ''},
        {mainKey: 'X', secondaryKey: '8', isIconKey: false, iconName: ''},
        {mainKey: 'C', secondaryKey: '9', isIconKey: false, iconName: ''},
        {mainKey: 'V', secondaryKey: '?', isIconKey: false, iconName: ''},
        {mainKey: 'B', secondaryKey: '!', isIconKey: false, iconName: ''},
        {mainKey: 'N', secondaryKey: ',', isIconKey: false, iconName: ''},
        {mainKey: 'M', secondaryKey: '.', isIconKey: false, iconName: ''},
        {mainKey: '$', secondaryKey: '', isIconKey: false, iconName: ''},
        {mainKey: '↙', secondaryKey: '', isIconKey: true, iconName: 'enter'},
    ],
])

export {
    KeyMap
}
