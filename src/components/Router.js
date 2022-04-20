import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from '../pages/Home'
import List from '../pages/List'
import NewList from '../pages/NewList'
import NewTask from '../pages/NewTask'
import MyLists from '../pages/MyLists'

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function Router() {
  return (
      <BrowserRouter>
    <Routes>
      <Route path="/" element={
        <PageContainer>
          <Home />
        </PageContainer>
      }/>
      <Route path="/list" element={<List />} />
      <Route path="/new-list" element={<NewList />} />
      <Route path="/new-task" element={<NewTask />} />
      <Route path="/my-lists" element={<MyLists />} />
    </Routes>
  </BrowserRouter>
  );
}