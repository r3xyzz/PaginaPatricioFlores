/*! fancyapps/fancybox v4.0.31 | (c) Fancyapps | fancyapps.com/license */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined'
      ? (module.exports = factory())
      : typeof define === 'function' && define.amd
      ? define(factory)
      : ((global = typeof globalThis !== 'undefined' ? globalThis : global || self),
        (global.Fancybox = factory()));
})(this, function () {
  'use strict';

  function Fancybox(options) {
      this.options = options;
  }

  Fancybox.prototype.open = function (items) {
      console.log('Fancybox opened with', items);
      // Aquí va la lógica para abrir el Fancybox con los items proporcionados
  };

  Fancybox.prototype.close = function () {
      console.log('Fancybox closed');
      // Aquí va la lógica para cerrar el Fancybox
  };

  return Fancybox;
});
