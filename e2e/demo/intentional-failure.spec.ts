import { test, expect } from '@playwright/test';

test('falha intencional: texto esperado nao existe na tela', async ({ page }) => {
  await page.setContent('<main><h1>ScholarSync</h1><p>Ambiente de demonstracao</p></main>');

  await expect(page.getByText('Inscricao confirmada')).toBeVisible();
});
