interface User {
  id: string;
  name: string;
  email: string;
  isActive: boolean;
}

async function getActiveUserEmails(users: User[]): Promise<string[]> {
  return users
    .filter((user) => user.isActive)
    .map((user) => user.email);
}

function formatGreeting(name: string): string {
  return `Hello, ${name}!`;
}

async function sendWelcomeEmails(users: User[]): Promise<void> {
  const emails = await getActiveUserEmails(users);

  for (const email of emails) {
    await sendEmail(email, formatGreeting("there"));
  }
}

async function sendEmail(to: string, body: string): Promise<void> {
  await fetch("/api/email", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ to, body }),
  });
}
