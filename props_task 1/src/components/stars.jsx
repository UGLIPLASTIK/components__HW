import Star from "./star";

const Stars = ({ count }) => {
  return (
    <ul>
      { [...Array(count)].map((item, index) => <Star key={index}/> ) }
    </ul>
  )
}

export default Stars;