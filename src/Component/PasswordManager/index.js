import {Component} from 'react'
import './index.css'
import {v4 as uniqueId} from 'uuid'
import PasswordManagerItem from '../PasswordManagerItem'

const myListItem = [
  {id: 1, email: 'youtube.com', name: 'aman', password: 12345},
  {id: 2, email: 'youtube.com', name: 'aman', password: 12345},
]

class PasswordManager extends Component {
  state = {
    name: '',
    mailId: '',
    password: '',
    isActive: true,
    myArray: [],
    initialValue: '',
  }

  handleWebsite = event => {
    this.setState({mailId: event.target.value})
  }

  handleName = event => {
    this.setState({name: event.target.value})
  }

  handlePassword = event => {
    this.setState({password: event.target.value})
  }

  handleOnClick = event => {
    event.preventDefault()
    const {name, mailId, password} = this.state
    const newItem = {
      id: uniqueId(),
      mailId,
      name,
      password,
    }
    console.log('clicked', newItem)
    this.setState(prevState => ({
      myArray: [...prevState.myArray, newItem],
      name: '',
      mailId: '',
      password: '',
    }))
  }

  handleCheckbox = event => {
    console.log(event.target.checked)
    this.setState({isActive: !event.target.checked})
  }

  myDeleteItem = id => {
    const {myArray} = this.state
    const filteredArray = myArray.filter(each => each.id !== id)
    this.setState({myArray: filteredArray})
  }

  handleSearch = event => {
    this.setState({initialValue: event.target.value})
  }

  render() {
    const {name, mailId, password, isActive, myArray, initialValue} = this.state
    const filteredArraymy = myArray.filter(each =>
      each.mailId.toLowerCase().includes(initialValue.toLowerCase()),
    )
    // console.log(myArray, name, mailId, password)
    return (
      <div className="main_container">
        <img
          className="logo"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
        />
        <div className="card_container1">
          <img
            className="card_1_logo"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
            alt="password manager"
          />
          <form onSubmit={this.handleOnClick} className="form_container">
            <h1 className="form_heading">Add New Password</h1>
            <div className="input_container">
              <div className="mylogo">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                  className="input_logo"
                />
              </div>

              <input
                onChange={this.handleWebsite}
                value={mailId}
                type="text"
                className="input_class"
                placeholder="Enter Website"
              />
            </div>
            <div className="input_container">
              <div className="mylogo">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                  className="input_logo"
                />
              </div>

              <input
                onChange={this.handleName}
                value={name}
                type="text"
                className="input_class"
                placeholder="Enter Username"
              />
            </div>
            <div className="input_container">
              <div className="mylogo">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                  className="input_logo"
                />
              </div>

              <input
                onChange={this.handlePassword}
                value={password}
                type="password"
                className="input_class"
                placeholder="Enter Password"
              />
            </div>
            <button type="submit" className="addbtn">
              Add
            </button>
          </form>
        </div>
        <div className="card_container2 myheight">
          <div className="header_container">
            <div className="password_heading_container">
              <h1 className="password_heading">Your Passwords</h1>
              <p className="counter">{filteredArraymy.length}</p>
            </div>
            <div className="input_container_search">
              <div className="mylogo_search">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  alt="search"
                  className="input_logo_search"
                />
              </div>

              <input
                onChange={this.handleSearch}
                value={initialValue}
                type="search"
                className="input_class_search"
                placeholder="Search"
              />
            </div>
          </div>
          <hr className="horizontal_line" />
          <div className="show_password_container">
            <input id="pass" onChange={this.handleCheckbox} type="checkbox" />
            <label htmlFor="pass" className="show_password">
              Show Passwords
            </label>
          </div>
          <div className="footer">
            {filteredArraymy.length === 0 ? (
              <>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                  alt="no passwords"
                  className="no_password"
                />
                <p className="no_password_heading">No Passwords</p>
              </>
            ) : (
              <ul className="list_container">
                {filteredArraymy.map(each => (
                  <PasswordManagerItem
                    key={each.id}
                    eachItem={each}
                    isActive={isActive}
                    myDeleteItem={this.myDeleteItem}
                  />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default PasswordManager
