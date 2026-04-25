// Post card + post list
function PostCard({ post, onOpen }) {
  return (
    <article className="kb-post" onClick={() => onOpen(post)}>
      <div className="kb-post-eyebrow">{post.tag}</div>
      <h3 className="kb-post-title"><span className="kb-post-title-inner">{post.title}</span></h3>
      <p className="kb-post-summary">{post.summary}</p>
      <div className="kb-post-meta">{post.date} · {post.readTime} · kittikawin.ball</div>
    </article>
  );
}

function Pagination({ page, pageCount, onChange, pageSize, onPageSizeChange, pageSizeOptions }) {
  const [gotoVal, setGotoVal] = React.useState('');
  if (pageCount <= 1 && !onPageSizeChange) return null;

  const go = (p) => {
    if (p < 1 || p > pageCount || p === page) return;
    onChange(p);
  };

  // Compact page list: first, last, current ± 1, with ellipses.
  const pages = [];
  for (let i = 1; i <= pageCount; i++) {
    if (i === 1 || i === pageCount || (i >= page - 1 && i <= page + 1)) {
      pages.push(i);
    } else if (pages[pages.length - 1] !== '…') {
      pages.push('…');
    }
  }

  const submitGoto = (e) => {
    e.preventDefault();
    const n = parseInt(gotoVal, 10);
    if (!isNaN(n)) go(n);
    setGotoVal('');
  };

  return (
    <nav className="kb-pager" aria-label="Pagination">
      <button
        type="button"
        className="kb-pager-chevron"
        onClick={() => go(page - 1)}
        disabled={page === 1}
        aria-label="Previous page"
      >
        <span aria-hidden="true">‹</span>
      </button>

      <ol className="kb-pager-nums">
        {pages.map((p, i) => (
          <li key={`${p}-${i}`}>
            {p === '…' ? (
              <span className="kb-pager-gap" aria-hidden="true">…</span>
            ) : (
              <button
                type="button"
                className={`kb-pager-num${p === page ? ' is-current' : ''}`}
                onClick={() => go(p)}
                aria-current={p === page ? 'page' : undefined}
                aria-label={`Page ${p}`}
              >
                {p}
              </button>
            )}
          </li>
        ))}
      </ol>

      <button
        type="button"
        className="kb-pager-chevron"
        onClick={() => go(page + 1)}
        disabled={page === pageCount}
        aria-label="Next page"
      >
        <span aria-hidden="true">›</span>
      </button>

      {onPageSizeChange && pageSizeOptions && (
        <div className="kb-pager-select">
          <select
            value={pageSize}
            onChange={(e) => onPageSizeChange(parseInt(e.target.value, 10))}
            aria-label="Posts per page"
          >
            {pageSizeOptions.map((n) => (
              <option key={n} value={n}>{n} / page</option>
            ))}
          </select>
          <span className="kb-pager-select-caret" aria-hidden="true">▾</span>
        </div>
      )}

      <form className="kb-pager-goto" onSubmit={submitGoto}>
        <label htmlFor="kb-pager-goto-input">Go to</label>
        <input
          id="kb-pager-goto-input"
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          value={gotoVal}
          onChange={(e) => setGotoVal(e.target.value.replace(/[^0-9]/g, ''))}
          placeholder={String(page)}
          aria-label="Jump to page"
        />
        <span className="kb-pager-goto-total">Page {page} of {pageCount}</span>
        <button type="submit" className="kb-pager-goto-submit" aria-label="Go">→</button>
      </form>
    </nav>
  );
}

function PostList({ posts, onOpen, limit, paginate, pageSize: initialPageSize = 5 }) {
  const [page, setPage] = React.useState(1);
  const [pageSize, setPageSize] = React.useState(initialPageSize);

  React.useEffect(() => { setPage(1); }, [posts.length, paginate]);
  React.useEffect(() => { setPage(1); }, [pageSize]);

  if (paginate) {
    const pageCount = Math.max(1, Math.ceil(posts.length / pageSize));
    const safePage = Math.min(page, pageCount);
    const start = (safePage - 1) * pageSize;
    const items = posts.slice(start, start + pageSize);
    const rangeStart = posts.length === 0 ? 0 : start + 1;
    const rangeEnd = start + items.length;

    return (
      <>
        <div className="kb-post-list">
          {items.map((p) => <PostCard key={p.slug} post={p} onOpen={onOpen} />)}
        </div>
        <div className="kb-pagination-wrap">
          <Pagination
            page={safePage}
            pageCount={pageCount}
            pageSize={pageSize}
            pageSizeOptions={[3, 5, 10, 15]}
            onPageSizeChange={setPageSize}
            onChange={(p) => {
              setPage(p);
              const scroller = document.querySelector('.kb-scroll');
              if (scroller) scroller.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
          <div className="kb-pagination-range">
            Page {safePage} of {pageCount} · {rangeStart}–{rangeEnd} of {posts.length} essays
          </div>
        </div>
      </>
    );
  }

  const items = limit ? posts.slice(0, limit) : posts;
  return (
    <div className="kb-post-list">
      {items.map((p) => <PostCard key={p.slug} post={p} onOpen={onOpen} />)}
    </div>
  );
}

window.PostCard = PostCard;
window.PostList = PostList;
window.Pagination = Pagination;
