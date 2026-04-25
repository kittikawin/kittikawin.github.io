// Site-wide header with sticky blur and ink rule
function SiteHeader({ route, setRoute }) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const root = document.querySelector('.kb-scroll') || window;
    const onScroll = () => {
      const y = root === window ? window.scrollY : root.scrollTop;
      setScrolled(y > 4);
    };
    root.addEventListener('scroll', onScroll);
    return () => root.removeEventListener('scroll', onScroll);
  }, []);

  const NavLink = ({ id, children }) => {
    const active = route === id;
    return (
      <a
        href="#"
        onClick={(e) => { e.preventDefault(); setRoute(id); }}
        className={'kb-nav-link' + (active ? ' is-active' : '')}
      >
        {children}
      </a>
    );
  };

  return (
    <header className={'kb-header' + (scrolled ? ' is-scrolled' : '')}>
      <div className="kb-header-inner">
        <a href="#" className="kb-brand" onClick={(e) => { e.preventDefault(); setRoute('home'); }}>
          <span className="kb-brand-rule" />
          <span className="kb-brand-name">Kittikawin Leasean</span>
          <span className="kb-brand-meta">BALL · INNOVATION DEVELOPER</span>
        </a>
        <nav className="kb-nav">
          <NavLink id="home">Home</NavLink>
          <NavLink id="writing">Writing</NavLink>
          <NavLink id="about">About</NavLink>
          <NavLink id="now">Now</NavLink>
        </nav>
      </div>
    </header>
  );
}

window.SiteHeader = SiteHeader;
