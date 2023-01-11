import {Image, Button} from './styledComponent'

const ImgButton = props => {
  const {item, imgButtonClick} = props
  const {id, imageUrl} = item
  const clickButton = () => {
    imgButtonClick(id)
  }

  return (
    <>
      <Button
        type="button"
        onClick={clickButton}
        data-testid={`${id.toLowerCase()}Button`}
      >
        <Image src={imageUrl} alt={id} />
      </Button>
    </>
  )
}

export default ImgButton
