import React from 'react';

const testimonials = [
  { name: 'John D.', rating: 5, review: 'Excellent food and service!' },
  { name: 'Sarah K.', rating: 4, review: 'Lovely atmosphere and tasty dishes.' },
];

function CustomersSay() {
  return (
    <section style={{ padding: '60px 20px', backgroundColor: '#f9f9f9', textAlign: 'center' }}>
      <h2 style={{ color: '#2c3e50' }}>What Our Customers Say</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap', marginTop: '30px' }}>
        {testimonials.map((cust, idx) => (
          <div key={idx} style={{ background: '#fff', padding: '20px', borderRadius: '12px', boxShadow: '0 4px 10px rgba(0,0,0,0.05)', maxWidth: '250px' }}>
            <strong>{cust.name}</strong>
            <p>{'⭐'.repeat(cust.rating)}</p>
            <p>{cust.review}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CustomersSay;
