// About + Now pages
function AboutPage() {
  return (
    <article className="kb-article">
      <div className="kb-article-eyebrow">About</div>
      <h1 className="kb-article-title">A few notes about me.</h1>

      <div className="kb-about-row">
        <div className="kb-avatar" aria-hidden="true">
          <span className="kb-avatar-initials">KB</span>
        </div>
        <div className="kb-about-body">
          <p className="kb-lede">
            I'm Kittikawin — most people call me <strong>Ball</strong>. I'm a Thai software developer,
            currently working on KrungSri Nimble, and writing one or two essays a month on Medium.
          </p>
          <p>
            I like <strong>.NET</strong>, quiet architectures, small refactors, and code that survives
            being read a year later. I write to force myself to explain things to another human — which is,
            so far, the most reliable way I've found to know I understand them.
          </p>
        </div>
      </div>

      <h2>Tools I reach for</h2>
      <div className="kb-stack">
        <img src="../../assets/tech-icons/csharp.svg" alt="C#" /> 
        <img src="../../assets/tech-icons/visual-studio.svg" alt="Visual Studio" /> 
        <img src="../../assets/tech-icons/vscode.svg" alt="VS Code" /> 
        <img src="../../assets/tech-icons/azure.svg" alt="Azure" /> 
        <img src="../../assets/tech-icons/typescript.svg" alt="TypeScript" /> 
        <img src="../../assets/tech-icons/javascript.svg" alt="JavaScript" /> 
        <img src="../../assets/tech-icons/html5.svg" alt="HTML5" /> 
        <img src="../../assets/tech-icons/css3.svg" alt="CSS3" /> 
        <img src="../../assets/tech-icons/github.svg" alt="GitHub" /> 
        <img src="../../assets/tech-icons/gitlab.svg" alt="GitLab" />
      </div>

      <h2>Contact</h2>
      <div className="kb-contact-row">
        <a href="mailto:kittikawinball@gmail.com">
          <img src="../../assets/tech-icons/gmail-light-30.svg" alt="" />Email
        </a>
        <a href="https://www.linkedin.com/in/kittikawin-ball/">
          <img src="../../assets/tech-icons/linkedin-light-30.svg" alt="" />LinkedIn
        </a>
      </div>
    </article>
  );
}

function NowPage() {
  return (
    <article className="kb-article">
      <div className="kb-article-eyebrow">Now · Apr 2026</div>
      <h1 className="kb-article-title">What I'm doing now.</h1>
      <p className="kb-lede">A small page, updated when the seasons change. Inspired by nownownow.com.</p>
      <ul className="kb-now-list">
        <li><span className="kb-now-emoji">🔭</span><span>Working on <strong>KrungSri Nimble</strong> — building reliable back-office .NET services.</span></li>
        <li><span className="kb-now-emoji">🌱</span><span>Currently learning everything 🤣 — this week, mostly <strong>Source Generators</strong>.</span></li>
        <li><span className="kb-now-emoji">✍️</span><span>Drafting a post on secrets hygiene for small .NET teams.</span></li>
        <li><span className="kb-now-emoji">⚡</span><span>Fun fact: I love to learn new technologies. Always have.</span></li>
      </ul>
    </article>
  );
}

window.AboutPage = AboutPage;
window.NowPage = NowPage;
