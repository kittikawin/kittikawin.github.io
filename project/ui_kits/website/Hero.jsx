// Hero block for home page
function Hero({ onReadWriting }) {
  return (
    <section className="kb-hero">
      <div className="kb-hero-rule" />
      <div className="kb-eyebrow kb-hero-eyebrow">Writing on .NET, architecture</div>
      <h1 className="kb-hero-title">
        Hi there, I'm <span className="kb-hero-name">Ball</span> <span className="kb-wave">👋</span>
        <br />a Thai developer who writes about the work.
      </h1>
      <p className="kb-hero-lede">
        I build .NET systems at <strong>KrungSri Nimble</strong> and publish practical essays
        on patterns, refactors, and the small decisions that compound.
      </p>
      <div className="kb-hero-actions">
        <button className="kb-btn kb-btn-primary" onClick={onReadWriting}>Read the writing</button>
        <a className="kb-btn kb-btn-ghost" href="https://medium.com/@kittikawin_ball">More on Medium ➡️</a>
      </div>
    </section>
  );
}
window.Hero = Hero;
