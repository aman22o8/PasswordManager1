import './index.css'

const PasswordManagerItem = props => {
  const {eachItem, isActive, myDeleteItem} = props
  const {id, mailId, name, password} = eachItem

  const handleDelete = () => {
    myDeleteItem(id)
  }

  //   const isPassword = true

  return (
    <li className="each_list_container">
      <p className="nickName">{name.slice(0, 1)}</p>
      <div className="name_details">
        <p className="user_heading">{mailId}</p>
        <p className="user_heading">{name}</p>
        {isActive ? (
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            alt="stars"
            className="Stars"
          />
        ) : (
          <p className="user_heading">{password}</p>
        )}
      </div>
      <button
        data-testid="delete"
        onClick={handleDelete}
        type="button"
        className="delete_btn"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png "
          alt="delete"
          className="delete_icon"
        />
      </button>
    </li>
  )
}

export default PasswordManagerItem
