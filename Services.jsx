export default function Services() {
  const plans = [
    {
      name: "Starter",
      price: "₹4,999",
      features: ["1-page website", "Custom Logo", "Basic SEO"],
      highlight: false,
    },
    {
      name: "Growth",
      price: "₹12,999",
      features: ["5-page site", "Branding kit", "Social templates", "Priority Support"],
      highlight: true, // This one will look more prominent
    },
    {
      name: "Pro",
      price: "₹24,999+",
      features: ["Full website", "AI systems", "Automation", "Maintenance"],
      highlight: false,
    },
  ];

  return (
    <div className="container" style={{ flexDirection: 'column' }}>
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h2 style={{ fontSize: '3rem' }}>Our Services</h2>
        <p style={{ color: '#94a3b8' }}>Scalable solutions for creators and startups.</p>
      </div>

      <div style={serviceStyles.grid}>
        {plans.map((plan) => (
          <div 
            key={plan.name} 
            className="card" 
            style={{ 
              ...serviceStyles.planCard, 
              border: plan.highlight ? '2px solid #22d3ee' : '1px solid rgba(255,255,255,0.1)',
              transform: plan.highlight ? 'scale(1.05)' : 'scale(1)'
            }}
          >
            <div className="card-inner" style={{ padding: '40px 30px' }}>
              {plan.highlight && (
                <span style={serviceStyles.badge}>Most Popular</span>
              )}
              <h3 style={{ fontSize: '1.5rem', marginBottom: '10px', color: '#fff' }}>{plan.name}</h3>
              <div style={serviceStyles.price}>{plan.price}</div>
              
              <ul style={serviceStyles.featureList}>
                {plan.features.map((feature) => (
                  <li key={feature} style={serviceStyles.featureItem}>
                    <span style={{ color: '#22d3ee', marginRight: '10px' }}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button 
                className={plan.highlight ? "btn btn-primary" : "btn btn-outline"} 
                style={{ width: '100%', marginTop: '20px' }}
              >
                Choose {plan.name}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const serviceStyles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "30px",
    width: "100%",
  },
  planCard: {
    transition: "all 0.3s ease",
  },
  price: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#fff",
    margin: "20px 0",
  },
  featureList: {
    listStyle: "none",
    padding: 0,
    textAlign: "left",
    marginBottom: "30px",
  },
  featureItem: {
    color: "#94a3b8",
    marginBottom: "12px",
    fontSize: "0.95rem",
  },
  badge: {
    background: "#22d3ee",
    color: "#020617",
    padding: "4px 12px",
    borderRadius: "99px",
    fontSize: "0.7rem",
    fontWeight: "bold",
    textTransform: "uppercase",
    position: "absolute",
    top: "-15px",
    left: "50%",
    transform: "translateX(-50%)",
  }
};
