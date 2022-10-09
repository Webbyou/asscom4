import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  if (session) {
    const { email, image, name } = session.user;
    return (
      <>
        <img src={image} width="150" /> <br />
        Signed in as {name} ({email}) <br />
        <button onClick={signOut}>Sign out</button>
      </>
    );
  }
  return <button onClick={signIn}>Prova a fare il login1</button>;
}
