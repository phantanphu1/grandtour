
import "./CategoryTitle.scss"

const CategoryTitle = ({title, des}) => {
  return (
    <div className="title__wrapper">
        <h1 >{title}</h1>
        <p>{des}</p>
    </div>
  )
}

export default CategoryTitle