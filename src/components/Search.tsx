type SearchProps = {
    loadUser: (userName: string) => Promise <void>
};

import { useState } from 'react';

import { BsSearch } from 'react-icons/bs';

export const Search = ({loadUser}: SearchProps) => {

    const [userName, setUserName] = useState("");

  return (
    <div>
        <h2>Bisque por um usuário:</h2>
        <p>Conheça seus melhores repositórios</p>
        <div>
            <input type="text" placeholder='Digite o nome do usuário' onChange={(e) => (e.target.value)}/>
            <button onClick={() => loadUser(userName)}>
                <BsSearch /></button>
        </div>
    </div>
  )
}
