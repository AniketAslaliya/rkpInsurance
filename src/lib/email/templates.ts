export function renewalReminderTemplate({ clientName, policyNumber, renewalDate }: { clientName: string; policyNumber: string; renewalDate: string; }) {
  return {
    subject: `Renewal reminder for policy ${policyNumber}`,
    html: `<div style="font-family:Inter,Arial,sans-serif;color:#111">
      <h2>Hi ${clientName},</h2>
      <p>This is a friendly reminder that your policy <strong>${policyNumber}</strong> is due for renewal on <strong>${renewalDate}</strong>.</p>
      <p>If you have any questions, reply to this email.</p>
      <p>Best regards,<br/>Your Insurance Agent</p>
    </div>`
  };
}

export function welcomeTemplate({ name }: { name: string }) {
  return {
    subject: `Welcome to IMS, ${name}!`,
    html: `<div style="font-family:Inter,Arial,sans-serif;color:#111">
      <h2>Welcome, ${name}</h2>
      <p>We’re excited to help you manage your insurance portfolio.</p>
    </div>`
  };
}


