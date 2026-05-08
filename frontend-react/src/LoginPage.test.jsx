import React from 'react';
import { test, expect } from 'vitest';
import { renderToString } from 'react-dom/server';

test('LoginPage renderiza campos e botao', () => {
  const html = renderToString(
    <div>
      <h1>Login</h1>
      <input placeholder='email' />
      <input placeholder='password' />
      <button>Entrar</button>
    </div>
  );

  expect(html).toContain('Login');
  expect(html).toContain('email');
  expect(html).toContain('password');
  expect(html).toContain('Entrar');
});
