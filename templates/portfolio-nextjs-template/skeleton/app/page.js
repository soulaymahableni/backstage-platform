const skills = ['Docker', 'Kubernetes', 'GitHub Actions', 'Backstage', 'Next.js', 'Linux'];

export default function Home() {
  return (
    <main>
      <header>
        <h1>${{ values.fullName }}</h1>
        <p className="muted">${{ values.jobTitle }} · ${{ values.email }}</p>
      </header>

      <section className="card">
        <h2>À propos</h2>
        <p>${{ values.description }}</p>
      </section>

      <section className="card">
        <h2>Compétences</h2>
        <div className="tags">
          {skills.map((s) => (
            <span key={s} className="tag">{s}</span>
          ))}
        </div>
      </section>

      <section className="card">
        <h2>Contact</h2>
        <p>${{ values.email }}</p>
      </section>

      <footer>Version 1 · Déployé via Backstage</footer>
    </main>
  );
}
