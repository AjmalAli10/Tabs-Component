import React from 'react';
import Tabs from './Tabs.js';
import { HTML, CSS, JavaScript } from './Panel.js';
import './style.css';

export default function App() {
  return (
    <div>
      <Tabs
        selectedTab={0}
        tabItems={[
          {
            id: 0,
            name: 'HTML',
            component: <HTML />,
          },
          {
            id: 1,
            name: 'CSS',
            component: <CSS />,
          },
          {
            id: 2,
            name: 'JavaScript',
            component: <JavaScript />,
          },
        ]}
      />
    </div>
  );
}
