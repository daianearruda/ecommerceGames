import { createGlobalStyle } from 'styled-components'

const cores = {
  cinza: '#333333',
  preta: '#111111',
  branca: '#EEEEEE',
  verde: '#10AC84'
}

export const GlobalCss = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
}

body{
  background-color: ${cores.preta};
  color:${cores.branca};
}


`
