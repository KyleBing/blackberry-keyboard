#!/bin/bash
cd /var/www/html &&
if compgen -G "./bb-keyboard-*.zip" > /dev/null; then
    rm -Rf tools/bb-keyboard/* &&
    mv bb-* tools/bb-keyboard &&
    cd tools/bb-keyboard &&
    unzip bb-keyboard-* &&
    rm -f bb-keyboard-*
    echo 'BlackBerry deploy finished.'
else
    echo "bb-keyboard*.zip 不存在"
fi
