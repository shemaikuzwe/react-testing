export default function Message({ name }: { name?: string }) {
  if (name) return <h1>Hello {name}</h1>;
  return <button>Login</button>;
}
