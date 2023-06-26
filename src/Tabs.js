import React, { useState, Fragment } from 'react';
export default function Tabs({ selectedTab, tabItems }) {
  const [activeTab, setActiveTab] = useState(selectedTab);
  const handleActiveTab = (id) => {
    setActiveTab(id);
  };
  return (
    <>
      <div
        role="tab"
        className="d-flex justify-content-center justify-content-evenly"
      >
        {tabItems.map(({ id, name }) => {
          const activeBtn = id === activeTab;
          return (
            <span role="tab" key={id}>
              <button
                type="button"
                onClick={() => handleActiveTab(id)}
                className={[
                  'btn btn-outline-secondary tab-btn',
                  activeBtn && 'btn btn-outline-success',
                ]
                  .filter(Boolean)
                  .join(' ')}
              >
                {name}
              </button>
            </span>
          );
        })}
      </div>
      {tabItems.map(({ id, component }) => {
        const activePanel = id === activeTab;
        return (
          activePanel && (
            <div
              key={id}
              role="tabpanel"
              className={[activePanel && 'card mt-4 w-100 h-100']
                .filter(Boolean)
                .join(' ')}
            >
              {component}
            </div>
          )
        );
      })}
    </>
  );
}
