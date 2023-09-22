import { useEffect, useState } from 'react';
import { getAllPokemon, getPokemon } from './utils/pokemon';
import { Navbar } from './components/Navbar/Navbar'
import { Card } from './components/Card/Card'
import "./App.css"

function App() {

  const [pokePerPage, setPokePerPage] = useState(50);
  const initialURL = "https://pokeapi.co/api/v2/pokemon?limit=" + pokePerPage;
  const [loading, setLoading] = useState(true);
  const [pokemonData, setPokemonData] = useState<string[]>([]);
  const [nextURL, setNextURL] = useState("");
  const [prevURL, setPrevURL] = useState("");
  const [allPokeNum, setAllPokeNum] = useState(0);
  const [curPokeNum, setCurPokeNum] = useState(0);

  useEffect(() => {
    const fetchPokemonData = async () => {
      loadPage(initialURL);
    };
    fetchPokemonData();
  }, [])

  const loadPage = async (url: string) => {
    setLoading(true);

    // すべてのポケモンデータを取得
    let res: any = await getAllPokemon(url);
    console.log(res);
    setAllPokeNum(res.count);

    if (url === initialURL) {
      setCurPokeNum(pokePerPage);
    }

    // 各ポケモンの詳細データを取得
    let _pokemonData = await Promise.all(
      res.results.map((pokemon: any) => {
        let pokemonRecord = getPokemon(pokemon.url);
        return pokemonRecord
      })
    );
    setPokemonData(_pokemonData);

    setNextURL(res.next);
    setPrevURL(res.previous);

    setLoading(false);
  }

  const handlePrevPage = async () => {
    !prevURL || loadPage(prevURL);
    setCurPokeNum(curPokeNum - pokePerPage);
  };
  const handleNextPage = async () => {
    !nextURL || loadPage(nextURL);
    loadPage(nextURL);
    setCurPokeNum(curPokeNum + pokePerPage);
  };

  return (
    <>
      <Navbar />
      {
        loading ? (<h1 style={{ textAlign: 'center' }}> ロード中…</h1>) : (
          <div className="App">

            <div className="pageNum">
            </div>

            <div className="btn">
              {!prevURL || <button onClick={handlePrevPage}>前へ</button>}
              <span className='pageNum'>{curPokeNum / pokePerPage} / {Math.ceil(allPokeNum / pokePerPage)}</span>
              {!nextURL || <button onClick={handleNextPage}>次へ</button>}
            </div>

            <div className="pokemonCardContainer">
              {
                pokemonData.map((pokemon, i) => {
                  return (
                    <Card
                      key={i}
                      pokemon={pokemon}
                    />
                  );
                })
              }
            </div>

            <div className="btn">
              {!prevURL || <button onClick={handlePrevPage}>前へ</button>}
              {!nextURL || <button onClick={handleNextPage}>次へ</button>}
              <p>
                {curPokeNum / pokePerPage} / {Math.ceil(allPokeNum / pokePerPage)}
              </p>
            </div>

          </div>
        )
      }
    </>
  )
}

export default App;
