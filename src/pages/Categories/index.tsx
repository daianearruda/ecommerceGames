import ProductList from '../../components/ProductList'

import {
  useGetActionGamesQuery,
  useGetSportGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulationGamesQuery,
  useGetFightGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames } = useGetActionGamesQuery()
  const { data: sportGames } = useGetSportGamesQuery()
  const { data: rpgGames } = useGetRpgGamesQuery()
  const { data: simulationGames } = useGetSimulationGamesQuery()
  const { data: fightGames } = useGetFightGamesQuery()

  if (actionGames && fightGames && sportGames && rpgGames && simulationGames) {
    return (
      <>
        <ProductList games={actionGames} title="Ação" background="black" />
        <ProductList games={sportGames} title="Esportes" background="gray" />
        <ProductList games={fightGames} title="Luta" background="black" />
        <ProductList games={rpgGames} title="RPG" background="gray" />
        <ProductList
          games={simulationGames}
          title="Simulação"
          background="black"
        />
      </>
    )
  }
  return <h4>Carregando</h4>
}

export default Categories
