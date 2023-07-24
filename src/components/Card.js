function Card(props) {
  const title = props.title;
  const componentsImage = props.componentsImage;
  const description = props.description;

  return (
    <li className="concept">
      <img src={componentsImage} alt="TODO: TITLE" />
      <h2>{title}</h2>
      <p>{description}</p>
    </li>
  );
}

export default Card;
