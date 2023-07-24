import {Component} from 'react'
import './index.css'
import {v4 as uuidv4} from 'uuid'
import PasswordItem from '../PasswordItem'

class PasswordManager extends Component {
  state = {
    passwordlist: [],
    website: '',
    username: '',
    password: '',
    mycheck: true,
    searching: '',
  }

  websitefunction = event => this.setState({website: event.target.value})

  usernamefunction = event => this.setState({username: event.target.value})

  passwordfunction = event => this.setState({password: event.target.value})

  submittingfunction = event => {
    event.preventDefault()
    const {website, username, password} = this.state
    const newitem = {
      id: uuidv4(),
      website,
      username,
      password,
      isActive: false,
    }
    return this.setState(prevState => ({
      passwordlist: [...prevState.passwordlist, newitem],
      website: '',
      username: '',
      password: '',
    }))
  }

  deletefunction = id => {
    const {passwordlist} = this.state
    const selecteditemsdeleted = passwordlist.filter(each => each.id !== id)
    this.setState({passwordlist: selecteditemsdeleted})
  }

  searchfunction = event => this.setState({searching: event.target.value})

  checkboxfunction = event => {
    console.log(event.target.checked)
    // this.setState((prev) => {
    //   return { mycheck: !prev.mycheck };
    // })
    this.setState(myprevious => ({
      mycheck: !myprevious.mycheck,
      passwordlist: myprevious.passwordlist.map(each => {
        if (each.isActive !== event.target.checked) {
          return {...each, isActive: !each.isActive}
        }
        return each
      }),
    }))
  }

  render() {
    const {
      passwordlist,
      website,
      username,
      password,
      mycheck,
      searching,
    } = this.state
    console.log(passwordlist)

    const searchedvalues = passwordlist.filter(each =>
      each.website.toLowerCase().includes(searching.toLowerCase()),
    )
    const lengthocfarray = searchedvalues.length
    return (
      <div className="bg_container">
        <div className="header">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
            className="image1"
          />
        </div>
        <div className="input_container">
          <form onSubmit={this.submittingfunction} className="form_container">
            <h1 className="form_heading">Add New Password</h1>
            <div className="inside_container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png "
                alt="website"
                className="image2"
              />
              <input
                onChange={this.websitefunction}
                placeholder="Enter Website"
                className="input1"
                type="text"
                value={website}
              />
            </div>
            <div className="inside_container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png "
                alt="username"
                className="image2"
              />
              <input
                onChange={this.usernamefunction}
                placeholder="Enter Username"
                className="input1"
                type="text"
                value={username}
              />
            </div>
            <div className="inside_container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png "
                alt="password"
                className="image2"
              />
              <input
                onChange={this.passwordfunction}
                placeholder="Enter Password"
                className="input1"
                name="password"
                type="password"
                value={password}
              />
            </div>
            <button type="submit" className="btn">
              Add
            </button>
          </form>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
              className="passwordimage"
            />
          </div>
        </div>
        <div className="resultcontainer">
          <div className="result_header_container">
            <h1 className="count_password">Your Passwords</h1>
            <p className="span0">{lengthocfarray}</p>
            <div className="allignkro">
              <img
                className="searchicon"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
              />
              <input
                value={searching}
                onChange={this.searchfunction}
                type="search"
                placeholder="Search"
                className="searchbar"
              />
            </div>
          </div>
          <hr className="horizontal" />
          <div className="checkbox_container">
            <input
              id="checkmybox"
              value={mycheck}
              onChange={this.checkboxfunction}
              type="checkbox"
            />
            <label htmlFor="checkmybox" className="checklro">
              Show passwords
            </label>
          </div>
          {searchedvalues.length !== 0 ? (
            <ul className="listitems_container">
              {searchedvalues.map(each => (
                <PasswordItem
                  key={each.id}
                  deleteitem={this.deletefunction}
                  listitem={each}
                />
              ))}
            </ul>
          ) : (
            <div className="nopassword_container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png "
                alt="no passwords"
                className="noitem"
              />
              <p className="nopasswordheading">No Passwords</p>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default PasswordManager
