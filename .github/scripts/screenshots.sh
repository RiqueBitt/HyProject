#!/usr/bin/env bash
# HyProject: abre o app de verdade e captura as telas principais.
source "$(dirname "$0")/screenshots-common.sh"
"$APP" > "$OUT/app.log" 2>&1 &
APP_PID=$!
sleep 25
maximize "HyProject"
shot inicio 2
sleep 15; shot inicio-2 1
sleep 15; shot inicio-3 1
key Tab; key Return; shot passo-1 4
key Tab; key Return; shot passo-2 4
key Tab; key Return; shot passo-3 4
finish
