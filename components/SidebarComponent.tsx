import React, { useRef, useState } from 'react';
import SidebarMenu from './SidebarMenu';
import { StyleClass } from 'primereact/styleclass';
import { Ripple } from 'primereact/ripple';

const menus = [
  {
    categoryName: 'FEATURES',
    menuArray: [
      {
        key: 'dashboard',
        menuIconString: 'pi-home',
        menuTitle: 'Dashboard',
        isMenuSelected: true,
        notifications: {
          index: false,
        },
      },
      {
        key: 'bookmarks',
        menuIconString: 'pi-bookmark',
        menuTitle: 'Bookmarks',
        isMenuSelected: false,
        notifications: {
          index: false,
        },
      },
      {
        key: 'team',
        menuIconString: 'pi-users',
        menuTitle: 'Team',
        isMenuSelected: false,
        notifications: {
          index: false,
        },
      },
      {
        key: 'messages',
        menuIconString: 'pi-comments',
        menuTitle: 'Messages',
        isMenuSelected: false,
        notifications: {
          index: true,
          numberOfNotifications: 3,
        },
      },
      {
        key: 'calendar',
        menuIconString: 'pi-calendar',
        menuTitle: 'Calendar',
        isMenuSelected: false,
        notifications: {
          index: false,
        },
      },
    ],
  },
  {
    categoryName: 'APPLICATION',
    menuArray: [
      {
        key: 'projects',
        menuIconString: 'pi-folder',
        menuTitle: 'Projects',
        isMenuSelected: false,
        notifications: {
          index: false,
        },
      },
      {
        key: 'reports',
        menuIconString: 'pi-chart-bar',
        menuTitle: 'Reports',
        isMenuSelected: false,
        notifications: {
          index: false,
        },
      },
      {
        key: 'settings',
        menuIconString: 'pi-cog',
        menuTitle: 'Settings',
        isMenuSelected: false,
        notifications: {
          index: false,
        },
      },
    ],
  },
];

function SidebarComponent() {
  return (
    <nav
      id="sidebar"
      className="surface-section top-0 left-0 bg-bluegray-800 h-full lg:h-auto hidden flex-shrink-0 lg:block lg:static absolute w-18rem pl-3 surface-0 z-5 border-right-1 surface-border select-none border-y-none animation-duration-300 animation-ease-in-out border-white-alpha-10"
    >
      <div className="h-full fixed">
        <header>
          <div className="flex justify-content-start align-items-center mb-5 pl-3">
            <div className="flex flex-row justify-content-start align-items-center pt-3 text-base font-medium">
              <i className="pi pi-prime mr-2 text-4xl"></i>
              <span className="text-base">Front-end Challenge</span>
            </div>
          </div>
        </header>
        {/* Menu Lists by Categories */}
        {menus.map((menu) => {
          return (
            <div key={menu.categoryName} className="mb-6">
              <SidebarMenu
                categoryName={menu.categoryName}
                menuArray={menu.menuArray}
              />
            </div>
          );
        })}
        <div className="absolute bottom-0 w-15rem flex flex-column min-h-screen justify-content-end">
          <a className="absolute w-full my-2 flex align-items-center justify-content-between text-700">
            <div className="flex flex-column w-full">
              <div className="border-top-1 border-300 mb-2 surface-border" />
              <div className="p-ripple flex flex-row justify-content-between align-items-center py-3 px-1 border-round cursor-pointer hover:surface-100 transition-duration-150 transition-colors">
                <div className="flex justify-content-center align-items-center">
                  <i className="pi pi-circle-fill text-500 text-2xl mr-3"></i>
                  <span className="font-medium">Ulaş Turan</span>
                </div>
                <i className="pi pi-angle-up text-500 text-2xl"></i>
              </div>
            </div>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default SidebarComponent;
