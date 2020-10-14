"use strict";

var _Home = _interopRequireDefault(require("./views/Home.js"));

var _Location = _interopRequireDefault(require("./views/Location.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
} // for the history API


var navigateTo = function navigateTo(url) {
  history.pushState(null, null, url);
  router();
};

var router = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var routes, potentialMatches, match, view;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            routes = [// the root path of the webpage
            {
              path: "/",
              view: _Home["default"]
            }, {
              path: "/location",
              view: _Location["default"]
            }]; // test each route for potential match

            potentialMatches = routes.map(function (route) {
              return {
                route: route,
                isMatch: location.pathname === route.path
              };
            });
            match = potentialMatches.find(function (potentialMatch) {
              return potentialMatch.isMatch;
            });

            if (!match) {
              match = {
                route: routes[0],
                isMatch: true
              };
            }

            view = new match.route.view();
            _context.next = 7;
            return view.getHtml();

          case 7:
            document.querySelector("#app").innerHTML = _context.sent;

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function router() {
    return _ref.apply(this, arguments);
  };
}(); // adding the popstate event so that we can press the back button without it refreshing the page


window.addEventListener("popstate", router);
document.addEventListener("DOMContentLoaded", function () {
  document.body.addEventListener("click", function (e) {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });
  router();
});