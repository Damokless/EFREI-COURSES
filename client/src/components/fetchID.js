import React, { Component } from 'react'
import '../App.css'
import '../tailwind.output.css'

class FetchID extends Component {
  constructor() {
    super()
    this.state = {
      user: {},
      keys: []
    }
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit(event) {
    event.preventDefault()
    this.setState({ user: {} })
    // document.getElementById('dataDiv').innerHTML = ''
    const username = document.getElementById('nomInput').value
    fetch(`http://localhost:4242/users/${username}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        this.setState({ keys: Object.keys(data.data), user: data.data })
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div className="flex justify-around items-center px-16 py-16 mx-8 my-8 mb-0 pb-3">
            <div className=" w-1/2 -mx-3 mb-6">
              <div className="w-full px-3 mb-6 ">
                <label
                  className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                  htmlFor="nom"
                >
                  Pseudo GitHub
                </label>
                <input
                  className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3 dark:text-black"
                  id="nomInput"
                  name="nom"
                  type="text"
                  placeholder="Pseudo GitHub"
                ></input>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <a href="/users/:username">
              <button
                className="bg-gray-300 hover:bg-gray-400 hover:text-white px-8 py-5 outline-none shadow-md border-solid rounded-lg hover:shadow-inner dark:bg-gray-800 dark:hover:bg-gray-500"
                type="submit"
              >
                Rechercher
              </button>
            </a>
          </div>
        </form>
        <div id="dataDiv">
          <div className="my-12 mx-auto px-4">
            <div>
              <h1 className="text-4xl">Github Profil</h1>
              <hr className="border-b-2 border-black dark:border-white my-6"></hr>
            </div>
            {this.state.keys.map((key) => {
              return (
                <div key={key}>
                  <div className="grid grid-cols-1">
                    <table className="text-left w-full mr-8">
                      <thead className="bg-gray-300 dark:bg-gray-800 flex w-full rounded-lg mb-1">
                        <tr className="flex w-full mb-4">
                          <th className="p-4 w-full ">{key}</th>
                          <th className="p-4 w-full ">{this.state.user[key]}</th>
                        </tr>
                      </thead>
                    </table>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default FetchID
