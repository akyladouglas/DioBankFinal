interface ICard {
  id: number;
  paragraph: string;
  datails: string;
}

export const Card = ({ id, paragraph, datails }: ICard) => {
  return (
    <div>
      <h1> Card {id}</h1>
      <p>{paragraph}</p>
      <p>{datails}</p>
    </div>
  );
};
