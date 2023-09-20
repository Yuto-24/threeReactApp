import "./Card.css"

export const Card = (props: any) => {
  const { pokemon } = props;
  return (
    <div className="card" style={{}}>
      <div className="cardImg">
        <img src={pokemon.sprites.front_default} alt="" />
        <img src={pokemon.sprites.front_shiny} alt="" />
      </div>

      <h3 className="cardName">{pokemon.name}</h3>

      <div className="typeContainer">
        <p>
          タイプ: {
            pokemon.types.map((type: any, i: number) => {
              return (
                <span key={type.type.name} className="typeName">{type.type.name}{pokemon.types.length !== i + 1 ? ", " : ""}</span>
              );
            })
          }
        </p>
      </div>

      <div className="cardInfo">
        <div className="cardData">

          <div className="title">
            <p>重さ：{pokemon.weight}</p>
          </div>
          <div className="title">
            <p>高さ：{pokemon.height}</p>
          </div>
          <div className="title">
            <p>アビリティ：{pokemon.abilities[0].ability.name}</p>
          </div>

        </div>
      </div>
    </div>
  );
}
import "./Card.css"

export const Card = (props: any) => {
  const { pokemon } = props;
  return (
    <div className="card" style={{}}>
      <div className="cardImg">
        <img src={pokemon.sprites.front_default} alt="" />
        <img src={pokemon.sprites.front_shiny} alt="" />
      </div>

      <h3 className="cardName">{pokemon.name}</h3>

      <div className="typeContainer">
        <p>
          タイプ: {
            pokemon.types.map((type: any, i: number) => {
              return (
                <span key={type.type.name} className="typeName">{type.type.name}{pokemon.types.length !== i + 1 ? ", " : ""}</span>
              );
            })
          }
        </p>
      </div>

      <div className="cardInfo">
        <div className="cardData">

          <div className="title">
            <p>重さ：{pokemon.weight}</p>
          </div>
          <div className="title">
            <p>高さ：{pokemon.height}</p>
          </div>
          <div className="title">
            <p>アビリティ：{pokemon.abilities[0].ability.name}</p>
          </div>

        </div>
      </div>
    </div>
  );
}
