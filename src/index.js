/* eslint-disable no-unused-expressions */
import React from 'react'
import ReactDOM from 'react-dom'
import './tailwindcss.css'
import reportWebVitals from './reportWebVitals'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from '@apollo/client'
import { Doughnut } from 'react-chartjs-2'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faBuilding, faEnvelope, faGlobe, faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
require('dotenv').config()

if (module.hot) {
  module.hot.accept()
}

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  headers: {
    authorization: `Bearer ${process.env.REACT_APP_GithubToken}`
  },
  cache: new InMemoryCache()
})

const USER_INFOS = gql`
  query GetUserInfos {
    viewer {
      login
      avatarUrl
      bio
      company
      followers {
        totalCount
      }
      following {
        totalCount
      }
      location
      name
      url
      contributionsCollection {
        totalCommitContributions
      }
      repositories(ownerAffiliations: OWNER) {
        totalCount
      }
      twitterUsername
      websiteUrl
      email
    }   
  }
`

const USER_REPOSITORIES_INFOS = gql`
  query GetUserInfos {
    viewer {
      repositories(last: 100) {
        nodes {
          languages(first: 100) {
            nodes {
              name
            }
          }
          name
          createdAt
          owner {
            login
          }
        }
      }
    }
  }
`

const LANGUAGES_INFOS = gql`
  query GetUserInfos {
    viewer {
      repositories(last: 100) {
        nodes {
          languages(first: 100) {
            nodes {
              name
            }
          }
        }
      }
    }
  }
`

function UserInfos () {
  const { loading, error, data } = useQuery(USER_INFOS)
  if (loading) {
    return (
      <div className="h-screen w-full flex flex-row justify-center items-center">
      <div className="flex justify-center items-center space-x-1 text-sm text-gray-700">
        <svg fill='none' className="w-6 h-6 animate-spin" viewBox="0 0 32 32" xmlns='http://www.w3.org/2000/svg'>
          <path clipRule='evenodd' d='M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z' fill='currentColor' fillRule='evenodd' />
        </svg>
        <div>Loading User info card</div>
      </div>
    </div>
    )
  }
  if (error) return <p>Error :(</p>
  return (
    <div className="mt-32 mb-8 flex flex-row justify-center items-center">
      <div className="mx-auto bg-white border border-gray-500 rounded-lg shadow-lg  hover:shadow-2xl">
        <img className="w-32 mx-auto rounded-full -mt-20 border-8 border-white" src={`${data.viewer.avatarUrl}`} alt="" />
        <div className="text-center mt-2 text-3xl font-medium">{data.viewer.name}</div>
        <div className="text-center font-light text-sm underline"><a href={`${data.viewer.url}`} target='_blank' rel="noreferrer">@{data.viewer.login}</a></div>
        <div className="flex flex-nowrap items-center justify-center space-x-4 text-sm font-light mt-4">
          <p><FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />{data.viewer.location}</p>
          <p><FontAwesomeIcon icon={faBuilding} className="mr-2" />{data.viewer.company}</p>
          <p><FontAwesomeIcon icon={faTwitter} className="mr-2" />{data.viewer.twitterUsername}</p>
          <p><FontAwesomeIcon icon={faEnvelope} className="mr-2" />{data.viewer.email}</p>
          <p><FontAwesomeIcon icon={faGlobe} className="mr-2" />{data.viewer.websiteUrl}</p>
        </div>
        <div className="px-6 text-center mt-2 font-light text-sm"><FontAwesomeIcon icon={faPencilAlt} className="mr-2" />{data.viewer.bio}</div>
        <hr className="mt-8" />
        <div className="flex p-4">
          <div className="w-1/2 text-center mx-4">
            <span className="font-bold">{data.viewer.contributionsCollection.totalCommitContributions}</span> <br /> Commits
          </div>
          <div className="w-0 border border-gray-300"></div>
          <div className="w-1/2 text-center  mx-4">
            <span className="font-bold">{data.viewer.repositories.totalCount}</span> <br /> Repositories
          </div>
          <div className="w-0 border border-gray-300"></div>
          <div className="w-1/2 text-center whitespace-nowrap mx-4">
            <span className="font-bold ">N/A coming soon</span> <br /> Lines of code
          </div>
          <div className="w-0 border border-gray-300"></div>
          <div className="w-1/2 text-center  mx-4">
            <span className="font-bold">{data.viewer.followers.totalCount}</span> <br /> Followers
          </div>
          <div className="w-0 border border-gray-300"></div>
          <div className="w-1/2 text-center  mx-4">
            <span className="font-bold">{data.viewer.following.totalCount}</span> <br /> Following
          </div>
        </div>
      </div>
    </div>
  )
}

function LanguagesInfos () {
  const { loading, error, data } = useQuery(LANGUAGES_INFOS)

  if (loading) {
    return (
      <div className="h-screen w-full flex flex-row justify-center items-center">
      <div className="flex justify-center items-center space-x-1 text-sm text-gray-700">
        <svg fill='none' className="w-6 h-6 animate-spin" viewBox="0 0 32 32" xmlns='http://www.w3.org/2000/svg'>
          <path clipRule='evenodd' d='M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z' fill='currentColor' fillRule='evenodd' />
        </svg>
        <div>Loading repositories languages info card</div>
      </div>
    </div>
    )
  }
  if (error) return <p>Error :(</p>
  let dataLanguages = {}
  for (let i = 0; i < Object.keys(data.viewer.repositories.nodes).length; i++) {
    for (let j = 0; j < Object.keys(data.viewer.repositories.nodes[i].languages.nodes).length; j++) {
      // eslint-disable-next-line no-prototype-builtins
      dataLanguages.hasOwnProperty(data.viewer.repositories.nodes[i].languages.nodes[j].name) ? dataLanguages[`${data.viewer.repositories.nodes[i].languages.nodes[j].name}`] += 1 : dataLanguages[`${data.viewer.repositories.nodes[i].languages.nodes[j].name}`] = 1
    }
  }
  dataLanguages = Object.keys(dataLanguages).map((key) => [key, Number(dataLanguages[key])])
  const languagesLabels = []
  const languagesValues = []
  const arrayColors = []
  for (let i = 0; i < dataLanguages.length; i++) {
    languagesLabels.push(dataLanguages[i][0])
    languagesValues.push(dataLanguages[i][1])
    arrayColors.push(`#${Math.floor(Math.random() * 16777215).toString(16)}`)
  }
  const dataRepo = {
    labels: languagesLabels,
    datasets: [{
      label: 'My First Dataset',
      data: languagesValues,
      backgroundColor: arrayColors,
      hoverOffset: 4
    }]
  }
  return (
    <div className="mt-32 mb-8 w-auto flex flex-row justify-center items-center">
      <div className="mx-auto bg-white border border-gray-500 rounded-lg shadow-lg  hover:shadow-2xl">
        <div className="text-center w-32 -mt-10"><p className="text-center text-3xl font-medium">Languages</p></div>
        <Doughnut data= {dataRepo} />
      </div>
    </div>
  )
}

function UserRepositoriesInfos () {
  const { loading, error, data } = useQuery(USER_REPOSITORIES_INFOS)

  if (loading) {
    return (
      <div className="h-screen w-full flex flex-row justify-center items-center">
      <div className="flex justify-center items-center space-x-1 text-sm text-gray-700">
        <svg fill='none' className="w-6 h-6 animate-spin" viewBox="0 0 32 32" xmlns='http://www.w3.org/2000/svg'>
          <path clipRule='evenodd' d='M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z' fill='currentColor' fillRule='evenodd' />
        </svg>
        <div>Loading repositories info card</div>
      </div>
    </div>
    )
  }
  if (error) return <p>Error :(</p>
  return (
    <div className="mt-32 mb-8 flex flex-row justify-center items-center">
      <div className="mx-auto bg-white border border-gray-500 rounded-lg shadow-lg  hover:shadow-2xl">
        <div className="text-center w-32 -mt-10"><p className="text-center text-3xl font-medium">Repositories</p></div>
        <section className="py-1">
          <div className="block w-full overflow-x-auto">
            <table className="items-center bg-transparent w-full border-collapse ">
              <thead>
                <tr>
                  <th className="px-6 py-3 bg-blue-200 bg-opacity-25 uppercase border-b-2 whitespace-nowrap text-center">
                    Repository name
                  </th>
                  <th className="px-6 py-3 bg-blue-200 bg-opacity-25 uppercase border-b-2 whitespace-nowrap text-center">
                    Owner
                  </th>
                  <th className="px-6 py-3 bg-blue-200 bg-opacity-25 uppercase border-b-2 whitespace-nowrap text-center">
                    Commits
                  </th>
                  <th className="px-6 py-3 bg-blue-200 bg-opacity-25 uppercase border-b-2 whitespace-nowrap text-center">
                    Languages
                  </th>
                  <th className="px-6 py-3 bg-blue-200 bg-opacity-25 uppercase border-b-2 whitespace-nowrap text-center">
                    Creation date
                  </th>
                </tr>
              </thead>
                    {data.viewer.repositories.nodes.map((node, i) => {
                      return (
                        <tbody key={i}>
                          <tr>
                            <th className="px-6 text-xs whitespace-nowrap p-4 text-left">
                              {node.name}
                            </th>
                            <th className="px-6 text-xs whitespace-normal p-4 text-center">
                              {node.owner.login}
                            </th>
                            <td className="px-6 text-xs whitespace-nowrap p-4 text-center">
                              N/A coming soon
                            </td>
                            <td className="px-6 text-xs whitespace-nowrap p-4 text-center">
                              {node.languages.nodes.map((language, i) => {
                                return `${language.name} `
                              })}
                            </td>
                            <td className="px-6 text-xs whitespace-nowrap p-4 text-right">
                              {node.createdAt.slice(0, 10).split('-').reverse().join('/')}
                            </td>
                          </tr>
                        </tbody>
                      )
                    })}
            </table>
          </div>
        </section>
      </div>
    </div>
  )
}

ReactDOM.render(
  <ApolloProvider client={client}>
    <UserInfos />
    <LanguagesInfos />
    <UserRepositoriesInfos />
  </ApolloProvider>,
  document.getElementById('root')
)

reportWebVitals()
