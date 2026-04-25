// Footer — plain, tinted block with ink rule
function SiteFooter() {
  return (
    <footer className="kb-footer">
      <div className="kb-footer-rule" />
      <div className="kb-footer-inner">
        <div className="kb-footer-col">
          <div className="kb-eyebrow">Elsewhere</div>
          <ul className="kb-footer-list">
            <li><a href="https://medium.com/@kittikawin_ball">Medium</a></li>
            <li><a href="https://www.linkedin.com/in/kittikawin-ball/">LinkedIn</a></li>
            <li><a href="https://github.com/kittikawin">GitHub</a></li>
            <li><a href="mailto:kittikawinball@gmail.com">Email</a></li>
          </ul>
        </div>
        <div className="kb-footer-col">
          <div className="kb-eyebrow">Topics</div>
          <ul className="kb-footer-list">
            <li><a href="#">.NET</a></li>
            <li><a href="#">C#</a></li>
            <li><a href="#">Architecture</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
window.SiteFooter = SiteFooter;
