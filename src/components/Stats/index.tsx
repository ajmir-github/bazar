export default function Stats({
  stats,
}: {
  stats: { deals: number; items: number; users: number };
}) {
  return (
    <div className="stats stats-vertical bg-base-100 shadow-lg">
      <div className="stat place-items-center">
        <div className="stat-title">Deals</div>
        <div className="stat-value">{stats.deals}</div>
      </div>

      <div className="stat place-items-center">
        <div className="stat-title">Items</div>
        <div className="stat-value text-secondary">{stats.items}</div>
      </div>

      <div className="stat place-items-center">
        <div className="stat-title">Registered Users</div>
        <div className="stat-value">{stats.users}</div>
      </div>
    </div>
  );
}
