// Single post reader view
function PostView({ post, onBack }) {
  return (
    <article className="kb-article">
      <a href="#" className="kb-back" onClick={(e) => { e.preventDefault(); onBack(); }}>
        ← Back to writing
      </a>
      <div className="kb-article-eyebrow">{post.tag}</div>
      <h1 className="kb-article-title">{post.title}</h1>
      <div className="kb-article-meta">{post.date} · {post.readTime} · by Kittikawin Ball</div>

      <p className="kb-lede">{post.summary}</p>

      <p>
        In most .NET codebases I've seen, the problem isn't the code you wrote — it's the coupling
        between the database and the message bus. You commit the transaction. Then you publish.
        Something fails in between. You now have data without its event, or an event without its data.
      </p>

      <p>
        The <a href="#">Outbox pattern</a> is a small discipline that closes that gap. You write the
        message as a row in the same transaction that writes the domain state, and a separate worker
        ships those rows to the bus and marks them done.
      </p>

      <h2>A minimal implementation</h2>
      <p>
        You don't need a framework for this. A plain class does the job:
      </p>

      <pre><code>{`public class OutboxProcessor
{
    private readonly AppDbContext _db;
    private readonly IBus _bus;

    public async Task RunAsync(CancellationToken ct)
    {
        var pending = await _db.Outbox
            .Where(x => x.SentAt == null)
            .OrderBy(x => x.OccurredAt)
            .Take(50)
            .ToListAsync(ct);

        foreach (var msg in pending)
        {
            await _bus.PublishAsync(msg.Type, msg.Payload, ct);
            msg.SentAt = DateTime.UtcNow;
        }

        await _db.SaveChangesAsync(ct);
    }
}`}</code></pre>

      <p>
        That's the whole idea. The rest is operational taste: batch size, backoff on failure, a
        dead-letter column when a message has failed <code>N</code> times. Keep it boring.
      </p>

      <blockquote>
        If you can't show it in six lines, it probably doesn't belong in the post.
      </blockquote>

      <h2>What you get</h2>
      <p>
        Atomicity. If the transaction rolls back, the event rolls back with it. Replayability — the
        outbox table is a perfectly good audit log for free. And a single place to reason about
        delivery, instead of a scattered set of try-catches around publish calls.
      </p>

      <div className="kb-article-footer">
        <div className="kb-eyebrow">Tags</div>
        <div className="kb-tags">
          <span className="kb-tag kb-tag-amber">.NET</span>
          <span className="kb-tag kb-tag-amber">C#</span>
          <span className="kb-tag kb-tag-blue">Architecture</span>
        </div>
      </div>
    </article>
  );
}
window.PostView = PostView;
