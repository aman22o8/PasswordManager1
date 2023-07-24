import './index.css'

const PasswordItem = props => {
  const {listitem, deleteitem} = props
  const {website, username, id, password, isActive} = listitem
  const clickingdelete = () => {
    deleteitem(id)
  }
  return (
    <li className="eachitems">
      <h1 className="singleletter">Y</h1>
      <div className="middle_container">
        <p className="heading_website">{website}</p>
        <p className="heading_username">{username}</p>
        {isActive ? (
          <p className="heading_password">{password}</p>
        ) : (
          <img
            className="sratsimage"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            alt="stars"
          />
        )}
      </div>
      <div className="delete_container">
        <button
          data-testid="delete"
          onClick={clickingdelete}
          type="button"
          className="btn_delete"
        >
          <img
            className="dlt"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default PasswordItem
