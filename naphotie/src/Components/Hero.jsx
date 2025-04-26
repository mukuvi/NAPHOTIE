export const Hero = ({ Plants }) => {
  const { image, name, location, Quantity, openSpots } = Plants;

  const badgeInfo = openSpots === 0 ? "GET FREE" : "GO PRO";

  return (
    <div className="hero-sect">
      <div className="page-file">
        {badgeInfo && <div className="hero-badge">{badgeInfo}</div>}

        <img src={image} alt={name} />

        <h3>{name}</h3>
        <p>{location}</p>
        <p>Quantity: {Quantity ?? "N/A"}</p>
      </div>
    </div>
  );
};
