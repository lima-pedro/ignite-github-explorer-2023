import '../styles/repository-list.scss';

import { useState, useEffect } from 'react';

import { RepositoryItem } from "./RepositoryItem";

// const repository = {
//     name: 'unform',
//     description: 'Forms in React',
//     link: 'https://github.com/unform/unform'
// }

const URL = 'https://api.github.com/users/lima-pedro/repos';

export function RepositoryList() {
  const [repositories, setRepositories] = useState([]);

  async function getRepositories () {
    const response = await fetch(URL);
    const data = await response.json();
    setRepositories(data);
  }
  
  useEffect(() => {
    getRepositories();
  }, [])

  return (
    <section className="repository-list">
    <h1>Lista de repositórios</h1>

      <ul>
        {repositories.map(repo => (
          <RepositoryItem key={repo.id} repository={repo} />
        ))}
      </ul>
    </section>
  );
}
