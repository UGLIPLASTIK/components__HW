import Star from "./star";

type Props = {
  count: number;
}

const Stars = (props: Props) => {
  return (
    <ul>
      {[...Array(props.count)].map((_item, index) => <Star key={index}/>)}
    </ul>
  )
}

export default Stars;