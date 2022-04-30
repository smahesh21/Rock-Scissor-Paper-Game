import {ListItem, Image, Button} from './styledComponents'

const GameOptions = props => {
  const {eachChoice, setUserChoice} = props
  const {imageUrl, id} = eachChoice
  const onClickChoice = () => {
    setUserChoice(id)
  }
  return (
    <ListItem>
      <Button
        type="button"
        data-testid={`${id.toLowerCase()}Button`}
        onClick={onClickChoice}
      >
        <Image src={imageUrl} alt={id} />
      </Button>
    </ListItem>
  )
}
export default GameOptions
