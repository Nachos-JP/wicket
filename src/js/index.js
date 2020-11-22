"use strict";

import "../scss/style.scss";

export default class {
  constructor(options){
    this.options = {};

    this.initializeOptions(options ?? {});
    this._setup();
  }

  defaultOptions = {};

  initializeOptions(options){
    const keys = Object.keys(options);
    const defaultKeys = Object.keys(this.defaultOptions);

    keys.forEach(key=>{
      if(!defaultKeys.includes(key)){
        console.warn("Wicket Warn - invalid option: ", key);
      }
    })

    defaultKeys.forEach(key=>{
      if(keys.includes(key)){
        this.options[key] = options[key];
      }else{
        this.options[key] = this.defaultOptions[key];
      }
    })
  }

  _setup(){}

  _styleEditor(target, obj){
    Object.keys(obj).forEach(key=>{
      target.style[key] = obj[key];
    })
  }
}
