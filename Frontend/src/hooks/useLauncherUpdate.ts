import { useState } from 'react';

/** Project Club: mensagem padrão sobre atualizações do launcher. */
export const PROJECT_CLUB_UPDATE_MESSAGE = 'O HyProject é atualizado pela aba Apps do Project Club.';

/**
 * Antes: escutava `hyprism:update:available` e expunha o asset de atualização do upstream.
 *
 * Project Club: o HyProject nunca se auto-atualiza (as atualizações vêm pela aba Apps do
 * Project Club), então este hook não escuta mais eventos e `updateAsset` é sempre `null`.
 * Assim nenhuma UI de atualização do launcher aparece. A assinatura foi mantida para
 * não quebrar quem consome o hook.
 *
 * @returns `{ updateAsset }` — sempre `null`.
 */
export function useLauncherUpdate() {
  const [updateAsset] = useState<any>(null);
  return { updateAsset };
}
