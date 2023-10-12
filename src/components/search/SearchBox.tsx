import { useSearchBox } from 'react-instantsearch'

import { StylishSearchBox } from './StylishSearchBox'

export const SearchBox = ({ ...props }) => {
  const { refine } = useSearchBox(props)

  const handleChange = (e: any) => {
    refine(e.target.value)
  }

  return <StylishSearchBox callback={handleChange} />
}
