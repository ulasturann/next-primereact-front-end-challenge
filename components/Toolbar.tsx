import React, { useEffect, useRef, useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { StyleClass } from 'primereact/styleclass';
import { Ripple } from 'primereact/ripple';

function Toolbar() {
  const btnRef1 = useRef(null);

  return (
    <div className="flex justify-content-between px-4 align-items-center surface-0 border-bottom-1 surface-border sticky top-0 z-3">
      <StyleClass
        nodeRef={btnRef1}
        selector="#sidebar"
        enterClassName="hidden"
        enterActiveClassName="fadeinleft"
        leaveToClassName="hidden"
        leaveActiveClassName="fadeoutleft"
        hideOnOutsideClick
      >
        <a
          ref={btnRef1}
          className="p-ripple cursor-pointer block lg:hidden p-link  layout-menu-button layout-topbar-button"
        >
          <i className="pi pi-bars flex justify-self-end align-items-center text-500 text-xl"></i>
          <Ripple />
        </a>
      </StyleClass>
      <div className="hidden lg:flex lg:flex-row lg:h-4rem lg:justify-content-start lg:align-items-center">
        <span className="p-input-icon-left">
          <i className="pi pi-search"></i>
          <InputText
            className="border-none w-10rem sm:w-20rem"
            placeholder="Search"
          />
        </span>
      </div>
      <div className="flex flex-row h-4rem justify-content-start align-items-center">
        <i className="pi pi-search flex justify-self-end align-items-center pl-4 text-500 text-xl lg:hidden"></i>
        <i className="pi pi-inbox flex justify-self-end align-items-center pl-4 text-500 text-xl"></i>
        <i className="pi pi-bell flex justify-self-end align-items-center pl-4 text-500 text-xl"></i>
        <i className="pi pi-circle-fill flex justify-self-end align-items-center pl-4 text-500 text-2xl"></i>
      </div>
    </div>
  );
}

export default Toolbar;
