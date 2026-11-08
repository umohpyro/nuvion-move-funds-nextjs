export const metadata = { title: "Privacy" };

export default function Privacy() {
  return (
    <div className="page narrow">
      <p className="eyebrow">Mercato</p>
      <h1>Privacy</h1>
      <p className="lead">What this demo keeps about you, which is almost nothing.</p>
      <section className="card pad">
        <ul>
          <li>The app has no database and stores nothing about visitors.</li>
          <li>Your sandbox keys and the accounts you enter stay in this browser tab (session storage) and are cleared when you close it. They go to the server only so it can call Nuvion for you.</li>
          <li>Any names or account numbers you enter go to your own Nuvion sandbox and are saved there, in your tenant. This app does not keep a copy.</li>
          <li>Use fake details only. This is an independent demo, sandbox only, with no real payments.</li>
        </ul>
      </section>
    </div>
  );
}
