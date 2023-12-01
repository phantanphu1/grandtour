import "./CardGridComponent.scss"

const CardGridComponent = ({children,className}) => {
  return (
    <div className={`CardGrid-wrapper container ${className}`}>
        {children}
    </div>
  )
}

export default CardGridComponent