import { useState } from 'react';
import { Routes, Route, Link, Outlet } from 'react-router-dom';

import { Article } from '../Article/Article';

import entrys from '../../utils/articles.json';

export const Entrys = () => {
  const [entries, setEntries] = useState(entrys);
  console.log(entries);

  return (
    <div className="container mx-auto">
      <Outlet />

      <ul>
        {entries.map((item, i) => {
          return (
            <li key={i}>
              <Link to={item.path} className="text-sky-600 hover:text-sky-800">
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>

      <Routes>
        {entries.map((item) => {
          return (
            <Route
              path={item.path}
              element={
                <Article
                  title={item.title}
                  selectors={item.selectors}
                  content={item.content}
                />
              }
            />
          );
        })}
      </Routes>
    </div>
  );
};
