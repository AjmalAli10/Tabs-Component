import React, { useState } from 'react';
export default function Tabs({ selectedTab, tabItems }) {
  const [activeTab, setActiveTab] = useState(selectedTab);
  const handleActiveTab = (id) => {
    setActiveTab(id);
  };
  return (
    <div>
      {tabItems.map(({ id, name }) => {
        return (
          <div role="tab" key={id} className="display">
            <button
              type="button"
              onClick={() => handleActiveTab(id)}
              className={activeTab === id ? 'activeTab' : ''}
            >
              {name}
            </button>
          </div>
        );
      })}
      {tabItems.map(({ id, component }) => {
        return (
          <div key={id} role="tabpanel">
            {id === activeTab ? component : ''}
          </div>
        );
      })}
    </div>
  );
}
