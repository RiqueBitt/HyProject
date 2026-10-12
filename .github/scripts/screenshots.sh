#!/usr/bin/env bash
# HyProject: abre o app de verdade e captura as telas principais (sem login).
source "$(dirname "$0")/screenshots-common.sh"
"$APP" > "$OUT/app.log" 2>&1 &
APP_PID=$!
sleep 30
maximize "HyProject"
shot abertura 2
click 800 652; shot autenticacao 4       # Continuar
click 800 632; shot apos-pular 5         # Pular (sem conta)
for i in 1 2 3 4 5; do
  click 800 652; shot "passo-$i" 4
  click 1540 956; sleep 1
done
shot painel 5
click 60 300; shot menu-1 3
click 60 380; shot menu-2 3
click 60 460; shot menu-3 3
click 60 540; shot menu-4 3
click 60 620; shot menu-5 3
finish
