#!/usr/bin/env bash
# HyProject: abre o app de verdade e captura as telas principais (sem login).
source "$(dirname "$0")/screenshots-common.sh"
"$APP" > "$OUT/app.log" 2>&1 &
APP_PID=$!
sleep 30
maximize "HyProject"
shot abertura 2
click 800 652; shot autenticacao 4       # Continuar
click 800 632; sleep 4                   # Pular (sem conta)
click 800 632; shot boas-vindas-idioma 4 # Continuar (sem fontes de download)
click 1080 792; shot boas-vindas-2 3
click 1080 792; shot boas-vindas-3 3
click 1080 792; shot boas-vindas-4 3
for i in 1 2 3; do click 1080 792; sleep 2; click 1540 956; sleep 2; done
shot painel 4
click 693 945; shot noticias 5
click 755 945; shot perfis 4
click 827 945; shot instancias 4
click 901 945; shot configuracoes 4
click 622 945; shot painel-2 3
finish
