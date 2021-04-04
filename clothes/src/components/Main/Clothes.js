const Clothes = ({weather, clothing}) => {
  const {now} = weather;
  const {term, clothes} = clothing;
  return (
    <>
      <h2>오늘 뭐입지?</h2>
      {now !== '' && <article className="clothes">
        <div className="clothes-recommend">
          <strong>{`추천 ${term} 옷`}</strong>
          <ul>
            {clothes.map((c, index) => <li key={`${c}-${index}`}>{c}</li>)}
          </ul>
        </div>
      </article>}
    </>
  );
};

export default Clothes;
