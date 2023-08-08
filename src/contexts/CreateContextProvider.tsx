import * as React from 'react'

const Context = React.createContext<any>(null) //CHANGE TYPE

const baseUrl = 'https://api.github.com/search/users?q='

type Props = {
  children: string
}

export const CreateContextProvider = ({ children }: Props) => {
  

  return (
    <Context.Provider
      value={{ requestResults, results, query, setQuery, loading }}
    >
      {children}
    </Context.Provider>
  )
}

export const useContextProvider = () => React.useContext(Context)
