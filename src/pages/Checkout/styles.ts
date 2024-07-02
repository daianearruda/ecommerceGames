import styled from 'styled-components'
import { cores } from '../../styles'

type InputGroupProps = {
  maxWidth?: string
}

type RowProps = {
  marginTop?: string
}

export const Row = styled.div<RowProps>`
  margin-top: ${(props) => props.marginTop || '0'};
  display: flex;
  column-gap: 24px;
`
export const InputGroup = styled.div<InputGroupProps>`
  max-width: ${(props) => props.maxWidth || 'auto'};
  flex: auto;
  label {
    font-size: 14px;
    margin-bottom: 8px;
    display: block;
  }
  input {
    width: 100%;
    background-color: ${cores.branca};
    border: 1px solid ${cores.branca};
    height: 32px;
    padding: 0 8px;
  }
`
