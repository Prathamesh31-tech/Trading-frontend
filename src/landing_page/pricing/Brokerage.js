export default function Brokerage() {
  return (
    <div className="container brokerage-section">
      <div className="row mt-5 p-4">
        <div className="col-md-8 col-12 p-4">
          <h3>Trading Charges</h3>

          <ul style={{ lineHeight: "1.8", fontSize: "15px" }}>
            <li>₹20 per order for intraday and derivatives trading.</li>

            <li>Zero brokerage for long term equity delivery investments.</li>

            <li>
              Secure online trading with real-time market data and fast
              execution.
            </li>

            <li>No hidden charges or extra platform fees for investors.</li>

            <li>
              Affordable pricing designed for beginners and professional
              traders.
            </li>
          </ul>
        </div>

        <div className="col-md-4 col-12 p-4 text-center">
          <h3>Trading Tools</h3>

          <p className="mt-3" style={{ color: "#cbd5f5" }}>
            Our trading platform provides portfolio tracking, analytics
            dashboards and advanced charts to help users make better investment
            decisions.
          </p>
        </div>
      </div>
    </div>
  );
}
