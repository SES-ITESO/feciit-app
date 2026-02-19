export function sendOtpEmail(otp: string) {
    const safeOtp = String(otp).trim();

    return `
<!doctype html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Codigo de verificacion FECIIT</title>
</head>
<body style="margin:0;padding:0;background:#f8fbff;font-family:Arial,Helvetica,sans-serif;color:#23364d;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="padding:24px 12px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:560px;background:#ffffff;border:1px solid #d7e6f7;border-radius:10px;overflow:hidden;">
          <tr>
            <td style="background:#0f59a6;padding:20px 24px;color:#ffffff;font-size:18px;font-weight:700;">
              FECIIT
            </td>
          </tr>
          <tr>
            <td style="padding:24px;">
              <h1 style="margin:0 0 12px 0;font-size:20px;line-height:1.3;color:#11263f;">
                Codigo de verificacion
              </h1>
              <p style="margin:0 0 18px 0;font-size:15px;line-height:1.6;color:#334660;">
                Usa este codigo para iniciar sesion en tu cuenta de personal.
              </p>

              <div style="margin:0 0 18px 0;padding:14px 16px;border:1px solid #bfd8f5;background:#e7f1ff;border-radius:8px;text-align:center;">
                <span style="display:inline-block;font-size:32px;letter-spacing:8px;font-weight:800;color:#1782fa;">
                  ${safeOtp}
                </span>
              </div>

              <p style="margin:0 0 8px 0;font-size:14px;line-height:1.6;color:#4e6078;">
                Si tu no solicitaste este codigo, puedes ignorar este correo.
              </p>
              <p style="margin:0;font-size:13px;line-height:1.6;color:#637289;">
                Este mensaje fue enviado automaticamente por FECIIT.
              </p>
            </td>
          </tr>
        </table>

        <p style="margin:12px 0 0 0;font-size:12px;color:#637289;">
          FECIIT · Correo de verificacion
        </p>
      </td>
    </tr>
  </table>
</body>
</html>
`.trim();
}
