const specialDishes = [
  { name: 'Greek Salad', price: '$12.99', description: 'Crispy lettuce, peppers, olives, and feta cheese.', image: 'greek-salad.jpg' },
  { name: 'Bruschetta', price: '$7.99', description: 'Grilled bread with tomato, garlic and basil.', image: 'bruschetta.jpg' },
  { name: 'Lemon Dessert', price: '$5.99', description: 'A sweet and tangy lemon treat.', image: 'lemon-dessert.jpg' },
];

function Specials() {
  return (
    <section style={{ padding: '60px 20px', backgroundColor: '#fff' }}>
      <h2 style={{ color: '#2c3e50', textAlign: 'center' }}>This Week's Specials</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginTop: '30px' }}>
        {specialDishes.map((dish, index) => (
          <div key={index} style={{ background: '#fafafa', padding: '20px', borderRadius: '12px', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
            <h3 style={{ color: '#34495e' }}>{dish.name}</h3>
            <p style={{ color: '#555' }}>{dish.description}</p>
            <span style={{ fontWeight: 'bold', color: '#27ae60' }}>{dish.price}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Specials;
