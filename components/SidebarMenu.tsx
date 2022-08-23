import React, { Key } from 'react';
import { Ripple } from 'primereact/ripple';

interface ISidebarProps {
  categoryName: string;
  menuArray: ISidebarMenuProps[];
}

interface ISidebarMenuProps {
  key?: Key;
  menuIconString: string;
  menuTitle: string;
  isMenuSelected?: boolean;
  notifications?: {
    index: boolean;
    numberOfNotifications?: number;
  };
}

function SidebarMenu(props: ISidebarProps) {
  return (
    <div className="flex flex-column justify-content-between">
      <div className="text-base text-600">
        <span className="block text-base text-600 mb-3 pl-3">
          {props.categoryName}
        </span>
        {props.menuArray.map((obj) => {
          return (
            <React.Fragment key={obj.key}>
              <ul className="list-none w-full" key={obj.key}>
                <li key={obj.key} className="flex">
                  <a
                    href="#"
                    className={`w-17rem z-5 flex align-items-center no-underline cursor-pointer list-none h-full transition-duration-150 transition-color py-3 pl-3 ${
                      obj.isMenuSelected
                        ? 'border-round border-noround-right shadow-2 bg-white'
                        : 'p-ripple hover:surface-100 hover:border-right-1 hover:surface-border border-round border-noround-right'
                    }`}
                  >
                    <i
                      className={
                        'mr-3 flex justify-content-center align-items-center pi' +
                        ' ' +
                        obj.menuIconString
                      }
                    ></i>
                    <span className="text-base text-800 text-800">
                      {obj.menuTitle}
                    </span>
                    {obj.notifications?.index ? (
                      <span
                        className="inline-flex align-items-center justify-content-center ml-auto bg-blue-500 text-white border-circle mr-1"
                        style={{ minWidth: '1.5rem', height: '1.5rem' }}
                      >
                        {obj.notifications?.numberOfNotifications}
                      </span>
                    ) : null}
                  </a>
                  {obj.isMenuSelected ? (
                    <div className="z-4 -ml-2 w-1rem h-auto bg-blue-500 text-gray-900 border-round-right-lg"></div>
                  ) : null}
                </li>
              </ul>
              <Ripple />
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

export default SidebarMenu;
