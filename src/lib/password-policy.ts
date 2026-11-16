/**
 * Política de contraseña personal (primer ingreso con contraseña temporal).
 * Deliberadamente sencilla: fácil de recordar, pero no trivial.
 */
export const PASSWORD_MIN_LENGTH = 8;

export type PasswordRuleId = "length" | "letter" | "number" | "differs";

export type PasswordRuleResult = {
  id: PasswordRuleId;
  label: string;
  ok: boolean;
};

export function evaluatePasswordRules(
  password: string,
  temporaryPassword: string,
): PasswordRuleResult[] {
  return [
    {
      id: "length",
      label: `Al menos ${PASSWORD_MIN_LENGTH} caracteres`,
      ok: password.length >= PASSWORD_MIN_LENGTH,
    },
    {
      id: "letter",
      label: "Al menos una letra",
      ok: /\p{L}/u.test(password),
    },
    {
      id: "number",
      label: "Al menos un número",
      ok: /\d/.test(password),
    },
    {
      id: "differs",
      label: "Diferente a la contraseña temporal",
      ok: password.length > 0 && password !== temporaryPassword,
    },
  ];
}

export function isPasswordAcceptable(password: string, temporaryPassword: string): boolean {
  return evaluatePasswordRules(password, temporaryPassword).every((rule) => rule.ok);
}
