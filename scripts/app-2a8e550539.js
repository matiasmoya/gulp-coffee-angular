(function() {
  angular.module('labs', ['ngAnimate', 'ngCookies', 'ngSanitize', 'ui.router', 'ngMaterial']);

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4Lm1vZHVsZS5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBQSxPQUFPLENBQUMsTUFBUixDQUFlLE1BQWYsRUFBdUIsQ0FBQyxXQUFELEVBQWMsV0FBZCxFQUEyQixZQUEzQixFQUF5QyxXQUF6QyxFQUFzRCxZQUF0RCxDQUF2QjtBQUFBIiwiZmlsZSI6ImluZGV4Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlICdsYWJzJywgWyduZ0FuaW1hdGUnLCAnbmdDb29raWVzJywgJ25nU2FuaXRpemUnLCAndWkucm91dGVyJywgJ25nTWF0ZXJpYWwnXVxuIl19
(function() {
  angular.module("labs").service("webDevTec", function() {
    var data, getTec;
    data = [
      {
        'title': 'AngularJS',
        'url': 'https://angularjs.org/',
        'description': 'HTML enhanced for web apps!',
        'logo': 'angular.png'
      }, {
        'title': 'BrowserSync',
        'url': 'http://browsersync.io/',
        'description': 'Time-saving synchronised browser testing.',
        'logo': 'browsersync.png'
      }, {
        'title': 'GulpJS',
        'url': 'http://gulpjs.com/',
        'description': 'The streaming build system.',
        'logo': 'gulp.png'
      }, {
        'title': 'Jasmine',
        'url': 'http://jasmine.github.io/',
        'description': 'Behavior-Driven JavaScript.',
        'logo': 'jasmine.png'
      }, {
        'title': 'Karma',
        'url': 'http://karma-runner.github.io/',
        'description': 'Spectacular Test Runner for JavaScript.',
        'logo': 'karma.png'
      }, {
        'title': 'Protractor',
        'url': 'https://github.com/angular/protractor',
        'description': 'End to end test framework for AngularJS applications built on top of WebDriverJS.',
        'logo': 'protractor.png'
      }, {
        'title': 'Angular Material Design',
        'url': 'https://material.angularjs.org/#/',
        'description': 'The Angular reference implementation of the Google\'s Material Design specification.',
        'logo': 'angular-material.png'
      }, {
        'title': 'Sass (Ruby)',
        'url': 'http://sass-lang.com/',
        'description': 'Original Syntactically Awesome StyleSheets implemented in Ruby',
        'logo': 'ruby-sass.png'
      }, {
        'title': 'CoffeeScript',
        'url': 'http://coffeescript.org/',
        'description': 'CoffeeScript, \'a little language that compiles into JavaScript\'.',
        'logo': 'coffeescript.png'
      }
    ];
    getTec = function() {
      return data;
    };
    this.getTec = getTec;
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvd2ViRGV2VGVjL3dlYkRldlRlYy5zZXJ2aWNlLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFBLE9BQU8sQ0FBQyxNQUFSLENBQWUsTUFBZixDQUNFLENBQUMsT0FESCxDQUNXLFdBRFgsRUFDd0IsU0FBQTtBQUNwQixRQUFBO0lBQUEsSUFBQSxHQUFPO01BQ0w7UUFDRSxPQUFBLEVBQVMsV0FEWDtRQUVFLEtBQUEsRUFBTyx3QkFGVDtRQUdFLGFBQUEsRUFBZSw2QkFIakI7UUFJRSxNQUFBLEVBQVEsYUFKVjtPQURLLEVBT0w7UUFDRSxPQUFBLEVBQVMsYUFEWDtRQUVFLEtBQUEsRUFBTyx3QkFGVDtRQUdFLGFBQUEsRUFBZSwyQ0FIakI7UUFJRSxNQUFBLEVBQVEsaUJBSlY7T0FQSyxFQWFMO1FBQ0UsT0FBQSxFQUFTLFFBRFg7UUFFRSxLQUFBLEVBQU8sb0JBRlQ7UUFHRSxhQUFBLEVBQWUsNkJBSGpCO1FBSUUsTUFBQSxFQUFRLFVBSlY7T0FiSyxFQW1CTDtRQUNFLE9BQUEsRUFBUyxTQURYO1FBRUUsS0FBQSxFQUFPLDJCQUZUO1FBR0UsYUFBQSxFQUFlLDZCQUhqQjtRQUlFLE1BQUEsRUFBUSxhQUpWO09BbkJLLEVBeUJMO1FBQ0UsT0FBQSxFQUFTLE9BRFg7UUFFRSxLQUFBLEVBQU8sZ0NBRlQ7UUFHRSxhQUFBLEVBQWUseUNBSGpCO1FBSUUsTUFBQSxFQUFRLFdBSlY7T0F6QkssRUErQkw7UUFDRSxPQUFBLEVBQVMsWUFEWDtRQUVFLEtBQUEsRUFBTyx1Q0FGVDtRQUdFLGFBQUEsRUFBZSxtRkFIakI7UUFJRSxNQUFBLEVBQVEsZ0JBSlY7T0EvQkssRUFxQ0w7UUFDRSxPQUFBLEVBQVMseUJBRFg7UUFFRSxLQUFBLEVBQU8sbUNBRlQ7UUFHRSxhQUFBLEVBQWUsc0ZBSGpCO1FBSUUsTUFBQSxFQUFRLHNCQUpWO09BckNLLEVBMkNMO1FBQ0UsT0FBQSxFQUFTLGFBRFg7UUFFRSxLQUFBLEVBQU8sdUJBRlQ7UUFHRSxhQUFBLEVBQWUsZ0VBSGpCO1FBSUUsTUFBQSxFQUFRLGVBSlY7T0EzQ0ssRUFpREw7UUFDRSxPQUFBLEVBQVMsY0FEWDtRQUVFLEtBQUEsRUFBTywwQkFGVDtRQUdFLGFBQUEsRUFBZSxvRUFIakI7UUFJRSxNQUFBLEVBQVEsa0JBSlY7T0FqREs7O0lBeURQLE1BQUEsR0FBUyxTQUFBO2FBQ1A7SUFETztJQUdULElBQUMsQ0FBQSxNQUFELEdBQVU7RUE3RFUsQ0FEeEI7QUFBQSIsImZpbGUiOiJjb21wb25lbnRzL3dlYkRldlRlYy93ZWJEZXZUZWMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlIFwibGFic1wiXG4gIC5zZXJ2aWNlIFwid2ViRGV2VGVjXCIsICgpIC0+XG4gICAgZGF0YSA9IFtcbiAgICAgIHtcbiAgICAgICAgJ3RpdGxlJzogJ0FuZ3VsYXJKUycsXG4gICAgICAgICd1cmwnOiAnaHR0cHM6Ly9hbmd1bGFyanMub3JnLycsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdIVE1MIGVuaGFuY2VkIGZvciB3ZWIgYXBwcyEnLFxuICAgICAgICAnbG9nbyc6ICdhbmd1bGFyLnBuZydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICd0aXRsZSc6ICdCcm93c2VyU3luYycsXG4gICAgICAgICd1cmwnOiAnaHR0cDovL2Jyb3dzZXJzeW5jLmlvLycsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdUaW1lLXNhdmluZyBzeW5jaHJvbmlzZWQgYnJvd3NlciB0ZXN0aW5nLicsXG4gICAgICAgICdsb2dvJzogJ2Jyb3dzZXJzeW5jLnBuZydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICd0aXRsZSc6ICdHdWxwSlMnLFxuICAgICAgICAndXJsJzogJ2h0dHA6Ly9ndWxwanMuY29tLycsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdUaGUgc3RyZWFtaW5nIGJ1aWxkIHN5c3RlbS4nLFxuICAgICAgICAnbG9nbyc6ICdndWxwLnBuZydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICd0aXRsZSc6ICdKYXNtaW5lJyxcbiAgICAgICAgJ3VybCc6ICdodHRwOi8vamFzbWluZS5naXRodWIuaW8vJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0JlaGF2aW9yLURyaXZlbiBKYXZhU2NyaXB0LicsXG4gICAgICAgICdsb2dvJzogJ2phc21pbmUucG5nJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgJ3RpdGxlJzogJ0thcm1hJyxcbiAgICAgICAgJ3VybCc6ICdodHRwOi8va2FybWEtcnVubmVyLmdpdGh1Yi5pby8nLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnU3BlY3RhY3VsYXIgVGVzdCBSdW5uZXIgZm9yIEphdmFTY3JpcHQuJyxcbiAgICAgICAgJ2xvZ28nOiAna2FybWEucG5nJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgJ3RpdGxlJzogJ1Byb3RyYWN0b3InLFxuICAgICAgICAndXJsJzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL3Byb3RyYWN0b3InLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnRW5kIHRvIGVuZCB0ZXN0IGZyYW1ld29yayBmb3IgQW5ndWxhckpTIGFwcGxpY2F0aW9ucyBidWlsdCBvbiB0b3Agb2YgV2ViRHJpdmVySlMuJyxcbiAgICAgICAgJ2xvZ28nOiAncHJvdHJhY3Rvci5wbmcnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAndGl0bGUnOiAnQW5ndWxhciBNYXRlcmlhbCBEZXNpZ24nLFxuICAgICAgICAndXJsJzogJ2h0dHBzOi8vbWF0ZXJpYWwuYW5ndWxhcmpzLm9yZy8jLycsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdUaGUgQW5ndWxhciByZWZlcmVuY2UgaW1wbGVtZW50YXRpb24gb2YgdGhlIEdvb2dsZVxcJ3MgTWF0ZXJpYWwgRGVzaWduIHNwZWNpZmljYXRpb24uJyxcbiAgICAgICAgJ2xvZ28nOiAnYW5ndWxhci1tYXRlcmlhbC5wbmcnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAndGl0bGUnOiAnU2FzcyAoUnVieSknLFxuICAgICAgICAndXJsJzogJ2h0dHA6Ly9zYXNzLWxhbmcuY29tLycsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdPcmlnaW5hbCBTeW50YWN0aWNhbGx5IEF3ZXNvbWUgU3R5bGVTaGVldHMgaW1wbGVtZW50ZWQgaW4gUnVieScsXG4gICAgICAgICdsb2dvJzogJ3J1Ynktc2Fzcy5wbmcnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAndGl0bGUnOiAnQ29mZmVlU2NyaXB0JyxcbiAgICAgICAgJ3VybCc6ICdodHRwOi8vY29mZmVlc2NyaXB0Lm9yZy8nLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnQ29mZmVlU2NyaXB0LCBcXCdhIGxpdHRsZSBsYW5ndWFnZSB0aGF0IGNvbXBpbGVzIGludG8gSmF2YVNjcmlwdFxcJy4nLFxuICAgICAgICAnbG9nbyc6ICdjb2ZmZWVzY3JpcHQucG5nJ1xuICAgICAgfVxuICAgIF1cblxuICAgIGdldFRlYyA9IC0+XG4gICAgICBkYXRhXG5cbiAgICBAZ2V0VGVjID0gZ2V0VGVjXG4gICAgcmV0dXJuXG4iXX0=
(function() {
  angular.module("labs").directive('acmeNavbar', function() {
    var NavbarController, directive;
    NavbarController = function(moment) {
      var vm;
      vm = this;
      vm.relativeDate = moment(vm.creationDate).fromNow();
    };
    return directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {
        creationDate: '='
      },
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbmF2YmFyL25hdmJhci5kaXJlY3RpdmUuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxNQUFmLENBQ0UsQ0FBQyxTQURILENBQ2EsWUFEYixFQUMyQixTQUFBO0FBRXZCLFFBQUE7SUFBQSxnQkFBQSxHQUFtQixTQUFDLE1BQUQ7QUFDakIsVUFBQTtNQUFBLEVBQUEsR0FBSztNQUVMLEVBQUUsQ0FBQyxZQUFILEdBQWtCLE1BQUEsQ0FBTyxFQUFFLENBQUMsWUFBVixDQUF1QixDQUFDLE9BQXhCLENBQUE7SUFIRDtXQU1uQixTQUFBLEdBQ0U7TUFBQSxRQUFBLEVBQVUsR0FBVjtNQUNBLFdBQUEsRUFBYSxtQ0FEYjtNQUVBLEtBQUEsRUFBTztRQUFBLFlBQUEsRUFBYyxHQUFkO09BRlA7TUFHQSxVQUFBLEVBQVksZ0JBSFo7TUFJQSxZQUFBLEVBQWMsSUFKZDtNQUtBLGdCQUFBLEVBQWtCLElBTGxCOztFQVRxQixDQUQzQjtBQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvbmF2YmFyL25hdmJhci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8iLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZSBcImxhYnNcIlxuICAuZGlyZWN0aXZlICdhY21lTmF2YmFyJywgLT5cblxuICAgIE5hdmJhckNvbnRyb2xsZXIgPSAobW9tZW50KSAtPlxuICAgICAgdm0gPSB0aGlzXG4gICAgICAjIFwidm0uY3JlYXRpb25cIiBpcyBhdmFpYmxlIGJ5IGRpcmVjdGl2ZSBvcHRpb24gXCJiaW5kVG9Db250cm9sbGVyOiB0cnVlXCJcbiAgICAgIHZtLnJlbGF0aXZlRGF0ZSA9IG1vbWVudCh2bS5jcmVhdGlvbkRhdGUpLmZyb21Ob3coKVxuICAgICAgcmV0dXJuXG5cbiAgICBkaXJlY3RpdmUgPVxuICAgICAgcmVzdHJpY3Q6ICdFJ1xuICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmh0bWwnXG4gICAgICBzY29wZTogY3JlYXRpb25EYXRlOiAnPSdcbiAgICAgIGNvbnRyb2xsZXI6IE5hdmJhckNvbnRyb2xsZXJcbiAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJ1xuICAgICAgYmluZFRvQ29udHJvbGxlcjogdHJ1ZVxuIl19
(function() {
  angular.module("labs").directive('acmeMalarkey', function() {
    var MalarkeyController, directive, linkFunc;
    MalarkeyController = function($log, githubContributor) {
      var activate, getContributors, vm;
      vm = this;
      activate = function() {
        return getContributors().then(function() {
          $log.info('Activated Contributors View');
        });
      };
      getContributors = function() {
        return githubContributor.getContributors(10).then(function(data) {
          vm.contributors = data;
          return vm.contributors;
        });
      };
      vm.contributors = [];
      activate();
    };
    linkFunc = function(scope, el, attr, vm) {
      var typist, watcher;
      watcher = void 0;
      typist = malarkey(el[0], {
        typeSpeed: 40,
        deleteSpeed: 40,
        pauseDelay: 800,
        loop: true,
        postfix: ' '
      });
      el.addClass('acme-malarkey');
      angular.forEach(scope.extraValues, function(value) {
        typist.type(value).pause()["delete"]();
      });
      watcher = scope.$watch('vm.contributors', function() {
        angular.forEach(vm.contributors, function(contributor) {
          typist.type(contributor.login).pause()["delete"]();
        });
      });
      scope.$on('$destroy', function() {
        watcher();
      });
    };
    return directive = {
      restrict: 'E',
      scope: {
        extraValues: '='
      },
      template: '&nbsp;',
      link: linkFunc,
      controller: MalarkeyController,
      controllerAs: 'vm'
    };
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbWFsYXJrZXkvbWFsYXJrZXkuZGlyZWN0aXZlLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFBLE9BQU8sQ0FBQyxNQUFSLENBQWUsTUFBZixDQUNFLENBQUMsU0FESCxDQUNhLGNBRGIsRUFDNkIsU0FBQTtBQUV6QixRQUFBO0lBQUEsa0JBQUEsR0FBcUIsU0FBQyxJQUFELEVBQU8saUJBQVA7QUFDbkIsVUFBQTtNQUFBLEVBQUEsR0FBSztNQUVMLFFBQUEsR0FBVyxTQUFBO2VBQ1QsZUFBQSxDQUFBLENBQWlCLENBQUMsSUFBbEIsQ0FBdUIsU0FBQTtVQUNyQixJQUFJLENBQUMsSUFBTCxDQUFVLDZCQUFWO1FBRHFCLENBQXZCO01BRFM7TUFLWCxlQUFBLEdBQWtCLFNBQUE7ZUFDaEIsaUJBQWlCLENBQUMsZUFBbEIsQ0FBa0MsRUFBbEMsQ0FBcUMsQ0FBQyxJQUF0QyxDQUEyQyxTQUFDLElBQUQ7VUFDekMsRUFBRSxDQUFDLFlBQUgsR0FBa0I7aUJBQ2xCLEVBQUUsQ0FBQztRQUZzQyxDQUEzQztNQURnQjtNQUtsQixFQUFFLENBQUMsWUFBSCxHQUFrQjtNQUNsQixRQUFBLENBQUE7SUFkbUI7SUFpQnJCLFFBQUEsR0FBVyxTQUFDLEtBQUQsRUFBUSxFQUFSLEVBQVksSUFBWixFQUFrQixFQUFsQjtBQUNULFVBQUE7TUFBQSxPQUFBLEdBQVU7TUFDVixNQUFBLEdBQVMsUUFBQSxDQUFTLEVBQUcsQ0FBQSxDQUFBLENBQVosRUFDUDtRQUFBLFNBQUEsRUFBVyxFQUFYO1FBQ0EsV0FBQSxFQUFhLEVBRGI7UUFFQSxVQUFBLEVBQVksR0FGWjtRQUdBLElBQUEsRUFBTSxJQUhOO1FBSUEsT0FBQSxFQUFTLEdBSlQ7T0FETztNQU1ULEVBQUUsQ0FBQyxRQUFILENBQVksZUFBWjtNQUNBLE9BQU8sQ0FBQyxPQUFSLENBQWdCLEtBQUssQ0FBQyxXQUF0QixFQUFtQyxTQUFDLEtBQUQ7UUFDakMsTUFBTSxDQUFDLElBQVAsQ0FBWSxLQUFaLENBQWtCLENBQUMsS0FBbkIsQ0FBQSxDQUEwQixDQUFDLFFBQUQsQ0FBMUIsQ0FBQTtNQURpQyxDQUFuQztNQUdBLE9BQUEsR0FBVSxLQUFLLENBQUMsTUFBTixDQUFhLGlCQUFiLEVBQWdDLFNBQUE7UUFDeEMsT0FBTyxDQUFDLE9BQVIsQ0FBZ0IsRUFBRSxDQUFDLFlBQW5CLEVBQWlDLFNBQUMsV0FBRDtVQUMvQixNQUFNLENBQUMsSUFBUCxDQUFZLFdBQVcsQ0FBQyxLQUF4QixDQUE4QixDQUFDLEtBQS9CLENBQUEsQ0FBc0MsQ0FBQyxRQUFELENBQXRDLENBQUE7UUFEK0IsQ0FBakM7TUFEd0MsQ0FBaEM7TUFNVixLQUFLLENBQUMsR0FBTixDQUFVLFVBQVYsRUFBc0IsU0FBQTtRQUNwQixPQUFBLENBQUE7TUFEb0IsQ0FBdEI7SUFsQlM7V0F1QlgsU0FBQSxHQUNFO01BQUEsUUFBQSxFQUFVLEdBQVY7TUFDQSxLQUFBLEVBQU87UUFBQSxXQUFBLEVBQWEsR0FBYjtPQURQO01BRUEsUUFBQSxFQUFVLFFBRlY7TUFHQSxJQUFBLEVBQU0sUUFITjtNQUlBLFVBQUEsRUFBWSxrQkFKWjtNQUtBLFlBQUEsRUFBYyxJQUxkOztFQTNDdUIsQ0FEN0I7QUFBQSIsImZpbGUiOiJjb21wb25lbnRzL21hbGFya2V5L21hbGFya2V5LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlIFwibGFic1wiXG4gIC5kaXJlY3RpdmUgJ2FjbWVNYWxhcmtleScsIC0+XG5cbiAgICBNYWxhcmtleUNvbnRyb2xsZXIgPSAoJGxvZywgZ2l0aHViQ29udHJpYnV0b3IpIC0+XG4gICAgICB2bSA9IHRoaXNcblxuICAgICAgYWN0aXZhdGUgPSAtPlxuICAgICAgICBnZXRDb250cmlidXRvcnMoKS50aGVuIC0+XG4gICAgICAgICAgJGxvZy5pbmZvICdBY3RpdmF0ZWQgQ29udHJpYnV0b3JzIFZpZXcnXG4gICAgICAgICAgcmV0dXJuXG5cbiAgICAgIGdldENvbnRyaWJ1dG9ycyA9IC0+XG4gICAgICAgIGdpdGh1YkNvbnRyaWJ1dG9yLmdldENvbnRyaWJ1dG9ycygxMCkudGhlbiAoZGF0YSkgLT5cbiAgICAgICAgICB2bS5jb250cmlidXRvcnMgPSBkYXRhXG4gICAgICAgICAgdm0uY29udHJpYnV0b3JzXG5cbiAgICAgIHZtLmNvbnRyaWJ1dG9ycyA9IFtdXG4gICAgICBhY3RpdmF0ZSgpXG4gICAgICByZXR1cm5cblxuICAgIGxpbmtGdW5jID0gKHNjb3BlLCBlbCwgYXR0ciwgdm0pIC0+XG4gICAgICB3YXRjaGVyID0gdW5kZWZpbmVkXG4gICAgICB0eXBpc3QgPSBtYWxhcmtleShlbFswXSxcbiAgICAgICAgdHlwZVNwZWVkOiA0MFxuICAgICAgICBkZWxldGVTcGVlZDogNDBcbiAgICAgICAgcGF1c2VEZWxheTogODAwXG4gICAgICAgIGxvb3A6IHRydWVcbiAgICAgICAgcG9zdGZpeDogJyAnKVxuICAgICAgZWwuYWRkQ2xhc3MgJ2FjbWUtbWFsYXJrZXknXG4gICAgICBhbmd1bGFyLmZvckVhY2ggc2NvcGUuZXh0cmFWYWx1ZXMsICh2YWx1ZSkgLT5cbiAgICAgICAgdHlwaXN0LnR5cGUodmFsdWUpLnBhdXNlKCkuZGVsZXRlKClcbiAgICAgICAgcmV0dXJuXG4gICAgICB3YXRjaGVyID0gc2NvcGUuJHdhdGNoKCd2bS5jb250cmlidXRvcnMnLCAtPlxuICAgICAgICBhbmd1bGFyLmZvckVhY2ggdm0uY29udHJpYnV0b3JzLCAoY29udHJpYnV0b3IpIC0+XG4gICAgICAgICAgdHlwaXN0LnR5cGUoY29udHJpYnV0b3IubG9naW4pLnBhdXNlKCkuZGVsZXRlKClcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgcmV0dXJuXG4gICAgICApXG4gICAgICBzY29wZS4kb24gJyRkZXN0cm95JywgLT5cbiAgICAgICAgd2F0Y2hlcigpXG4gICAgICAgIHJldHVyblxuICAgICAgcmV0dXJuXG5cbiAgICBkaXJlY3RpdmUgPVxuICAgICAgcmVzdHJpY3Q6ICdFJ1xuICAgICAgc2NvcGU6IGV4dHJhVmFsdWVzOiAnPSdcbiAgICAgIHRlbXBsYXRlOiAnJm5ic3A7J1xuICAgICAgbGluazogbGlua0Z1bmNcbiAgICAgIGNvbnRyb2xsZXI6IE1hbGFya2V5Q29udHJvbGxlclxuICAgICAgY29udHJvbGxlckFzOiAndm0nXG4iXX0=
(function() {
  angular.module("labs").factory('githubContributor', ["$log", "$http", function($log, $http) {
    var apiHost, getContributors, service;
    apiHost = 'https://api.github.com/repos/Swiip/generator-gulp-angular';
    getContributors = function(limit) {
      var getContributorsComplete, getContributorsFailed;
      getContributorsComplete = function(response) {
        return response.data;
      };
      getContributorsFailed = function(error) {
        $log.error('XHR Failed for getContributors.\n' + angular.toJson(error.data, true));
      };
      if (!limit) {
        limit = 30;
      }
      return $http.get(apiHost + '/contributors?per_page=' + limit).then(getContributorsComplete)["catch"](getContributorsFailed);
    };
    return service = {
      apiHost: apiHost,
      getContributors: getContributors
    };
  }]);

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZ2l0aHViQ29udHJpYnV0b3IvZ2l0aHViQ29udHJpYnV0b3Iuc2VydmljZS5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBQSxPQUFPLENBQUMsTUFBUixDQUFlLE1BQWYsQ0FDRSxDQUFDLE9BREgsQ0FDVyxtQkFEWCxFQUNnQyxTQUFDLElBQUQsRUFBTyxLQUFQO0FBQzVCLFFBQUE7SUFBQSxPQUFBLEdBQVU7SUFFVixlQUFBLEdBQWtCLFNBQUMsS0FBRDtBQUVoQixVQUFBO01BQUEsdUJBQUEsR0FBMEIsU0FBQyxRQUFEO2VBQ3hCLFFBQVEsQ0FBQztNQURlO01BRzFCLHFCQUFBLEdBQXdCLFNBQUMsS0FBRDtRQUN0QixJQUFJLENBQUMsS0FBTCxDQUFXLG1DQUFBLEdBQXNDLE9BQU8sQ0FBQyxNQUFSLENBQWUsS0FBSyxDQUFDLElBQXJCLEVBQTJCLElBQTNCLENBQWpEO01BRHNCO01BSXhCLElBQUcsQ0FBQyxLQUFKO1FBQ0UsS0FBQSxHQUFRLEdBRFY7O2FBRUEsS0FBSyxDQUFDLEdBQU4sQ0FBVSxPQUFBLEdBQVUseUJBQVYsR0FBc0MsS0FBaEQsQ0FBc0QsQ0FBQyxJQUF2RCxDQUE0RCx1QkFBNUQsQ0FBb0YsQ0FBQyxPQUFELENBQXBGLENBQTJGLHFCQUEzRjtJQVhnQjtXQWFsQixPQUFBLEdBQ0U7TUFBQSxPQUFBLEVBQVMsT0FBVDtNQUNBLGVBQUEsRUFBaUIsZUFEakI7O0VBakIwQixDQURoQztBQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvZ2l0aHViQ29udHJpYnV0b3IvZ2l0aHViQ29udHJpYnV0b3Iuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlIFwibGFic1wiXG4gIC5mYWN0b3J5ICdnaXRodWJDb250cmlidXRvcicsICgkbG9nLCAkaHR0cCkgLT5cbiAgICBhcGlIb3N0ID0gJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vcmVwb3MvU3dpaXAvZ2VuZXJhdG9yLWd1bHAtYW5ndWxhcidcblxuICAgIGdldENvbnRyaWJ1dG9ycyA9IChsaW1pdCkgLT5cblxuICAgICAgZ2V0Q29udHJpYnV0b3JzQ29tcGxldGUgPSAocmVzcG9uc2UpIC0+XG4gICAgICAgIHJlc3BvbnNlLmRhdGFcblxuICAgICAgZ2V0Q29udHJpYnV0b3JzRmFpbGVkID0gKGVycm9yKSAtPlxuICAgICAgICAkbG9nLmVycm9yICdYSFIgRmFpbGVkIGZvciBnZXRDb250cmlidXRvcnMuXFxuJyArIGFuZ3VsYXIudG9Kc29uKGVycm9yLmRhdGEsIHRydWUpXG4gICAgICAgIHJldHVyblxuXG4gICAgICBpZiAhbGltaXRcbiAgICAgICAgbGltaXQgPSAzMFxuICAgICAgJGh0dHAuZ2V0KGFwaUhvc3QgKyAnL2NvbnRyaWJ1dG9ycz9wZXJfcGFnZT0nICsgbGltaXQpLnRoZW4oZ2V0Q29udHJpYnV0b3JzQ29tcGxldGUpLmNhdGNoIGdldENvbnRyaWJ1dG9yc0ZhaWxlZFxuXG4gICAgc2VydmljZSA9XG4gICAgICBhcGlIb3N0OiBhcGlIb3N0XG4gICAgICBnZXRDb250cmlidXRvcnM6IGdldENvbnRyaWJ1dG9yc1xuIl19
(function() {
  angular.module("labs").controller("MainController", ["$timeout", "webDevTec", "toastr", function($timeout, webDevTec, toastr) {
    var activate, getWebDevTec, showToastr, vm;
    vm = this;
    activate = function() {
      getWebDevTec();
      $timeout((function() {
        vm.classAnimation = 'rubberBand';
      }), 4000);
    };
    showToastr = function() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    };
    getWebDevTec = function() {
      vm.awesomeThings = webDevTec.getTec();
      angular.forEach(vm.awesomeThings, function(awesomeThing) {
        awesomeThing.rank = Math.random();
      });
    };
    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1442101191271;
    vm.showToastr = showToastr;
    activate();
  }]);

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4vbWFpbi5jb250cm9sbGVyLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFBLE9BQU8sQ0FBQyxNQUFSLENBQWUsTUFBZixDQUNFLENBQUMsVUFESCxDQUNjLGdCQURkLEVBQ2dDLFNBQUMsUUFBRCxFQUFXLFNBQVgsRUFBc0IsTUFBdEI7QUFDNUIsUUFBQTtJQUFBLEVBQUEsR0FBSztJQUNMLFFBQUEsR0FBVyxTQUFBO01BQ1QsWUFBQSxDQUFBO01BQ0EsUUFBQSxDQUFTLENBQUMsU0FBQTtRQUNSLEVBQUUsQ0FBQyxjQUFILEdBQW9CO01BRFosQ0FBRCxDQUFULEVBR0csSUFISDtJQUZTO0lBUVgsVUFBQSxHQUFhLFNBQUE7TUFDWCxNQUFNLENBQUMsSUFBUCxDQUFZLGtIQUFaO01BQ0EsRUFBRSxDQUFDLGNBQUgsR0FBb0I7SUFGVDtJQUtiLFlBQUEsR0FBZSxTQUFBO01BQ2IsRUFBRSxDQUFDLGFBQUgsR0FBbUIsU0FBUyxDQUFDLE1BQVYsQ0FBQTtNQUNuQixPQUFPLENBQUMsT0FBUixDQUFnQixFQUFFLENBQUMsYUFBbkIsRUFBa0MsU0FBQyxZQUFEO1FBQ2hDLFlBQVksQ0FBQyxJQUFiLEdBQW9CLElBQUksQ0FBQyxNQUFMLENBQUE7TUFEWSxDQUFsQztJQUZhO0lBT2YsRUFBRSxDQUFDLGFBQUgsR0FBbUI7SUFDbkIsRUFBRSxDQUFDLGNBQUgsR0FBb0I7SUFDcEIsRUFBRSxDQUFDLFlBQUgsR0FBa0I7SUFDbEIsRUFBRSxDQUFDLFVBQUgsR0FBZ0I7SUFDaEIsUUFBQSxDQUFBO0VBMUI0QixDQURoQztBQUFBIiwiZmlsZSI6Im1haW4vbWFpbi5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUgXCJsYWJzXCJcbiAgLmNvbnRyb2xsZXIgXCJNYWluQ29udHJvbGxlclwiLCAoJHRpbWVvdXQsIHdlYkRldlRlYywgdG9hc3RyKSAtPlxuICAgIHZtID0gdGhpc1xuICAgIGFjdGl2YXRlID0gLT5cbiAgICAgIGdldFdlYkRldlRlYygpXG4gICAgICAkdGltZW91dCAoLT5cbiAgICAgICAgdm0uY2xhc3NBbmltYXRpb24gPSAncnViYmVyQmFuZCdcbiAgICAgICAgcmV0dXJuXG4gICAgICApLCA0MDAwXG4gICAgICByZXR1cm5cblxuICAgIHNob3dUb2FzdHIgPSAtPlxuICAgICAgdG9hc3RyLmluZm8gJ0ZvcmsgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9Td2lpcC9nZW5lcmF0b3ItZ3VscC1hbmd1bGFyXCIgdGFyZ2V0PVwiX2JsYW5rXCI+PGI+Z2VuZXJhdG9yLWd1bHAtYW5ndWxhcjwvYj48L2E+J1xuICAgICAgdm0uY2xhc3NBbmltYXRpb24gPSAnJ1xuICAgICAgcmV0dXJuXG5cbiAgICBnZXRXZWJEZXZUZWMgPSAtPlxuICAgICAgdm0uYXdlc29tZVRoaW5ncyA9IHdlYkRldlRlYy5nZXRUZWMoKVxuICAgICAgYW5ndWxhci5mb3JFYWNoIHZtLmF3ZXNvbWVUaGluZ3MsIChhd2Vzb21lVGhpbmcpIC0+XG4gICAgICAgIGF3ZXNvbWVUaGluZy5yYW5rID0gTWF0aC5yYW5kb20oKVxuICAgICAgICByZXR1cm5cbiAgICAgIHJldHVyblxuXG4gICAgdm0uYXdlc29tZVRoaW5ncyA9IFtdXG4gICAgdm0uY2xhc3NBbmltYXRpb24gPSAnJ1xuICAgIHZtLmNyZWF0aW9uRGF0ZSA9IDE0NDIxMDExOTEyNzFcbiAgICB2bS5zaG93VG9hc3RyID0gc2hvd1RvYXN0clxuICAgIGFjdGl2YXRlKClcbiAgICByZXR1cm5cbiJdfQ==
(function() {
  angular.module("labs").run(["$log", function($log) {
    return $log.debug('runBlock end');
  }]);

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnJ1bi5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBQSxPQUFPLENBQUMsTUFBUixDQUFlLE1BQWYsQ0FDRSxDQUFDLEdBREgsQ0FDTyxTQUFDLElBQUQ7V0FDSCxJQUFJLENBQUMsS0FBTCxDQUFXLGNBQVg7RUFERyxDQURQO0FBQUEiLCJmaWxlIjoiaW5kZXgucnVuLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUgXCJsYWJzXCJcbiAgLnJ1biAoJGxvZykgLT5cbiAgICAkbG9nLmRlYnVnICdydW5CbG9jayBlbmQnXG4iXX0=
(function() {
  angular.module("labs").config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
    $stateProvider.state("home", {
      url: "/",
      templateUrl: "app/main/main.html",
      controller: "MainController",
      controllerAs: "main"
    });
    return $urlRouterProvider.otherwise('/');
  }]);

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnJvdXRlLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFBLE9BQU8sQ0FBQyxNQUFSLENBQWUsTUFBZixDQUNFLENBQUMsTUFESCxDQUNVLFNBQUMsY0FBRCxFQUFpQixrQkFBakI7SUFDTixjQUNFLENBQUMsS0FESCxDQUNTLE1BRFQsRUFFSTtNQUFBLEdBQUEsRUFBSyxHQUFMO01BQ0EsV0FBQSxFQUFhLG9CQURiO01BRUEsVUFBQSxFQUFZLGdCQUZaO01BR0EsWUFBQSxFQUFjLE1BSGQ7S0FGSjtXQU9BLGtCQUFrQixDQUFDLFNBQW5CLENBQTZCLEdBQTdCO0VBUk0sQ0FEVjtBQUFBIiwiZmlsZSI6ImluZGV4LnJvdXRlLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUgXCJsYWJzXCJcbiAgLmNvbmZpZyAoJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikgLT5cbiAgICAkc3RhdGVQcm92aWRlclxuICAgICAgLnN0YXRlIFwiaG9tZVwiLFxuICAgICAgICB1cmw6IFwiL1wiXG4gICAgICAgIHRlbXBsYXRlVXJsOiBcImFwcC9tYWluL21haW4uaHRtbFwiXG4gICAgICAgIGNvbnRyb2xsZXI6IFwiTWFpbkNvbnRyb2xsZXJcIlxuICAgICAgICBjb250cm9sbGVyQXM6IFwibWFpblwiXG5cbiAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlICcvJ1xuIl19
(function() {
  angular.module('labs').constant('malarkey', malarkey).constant('toastr', toastr).constant('moment', moment);

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmNvbnN0YW50cy5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBQSxPQUFPLENBQUMsTUFBUixDQUFlLE1BQWYsQ0FDRSxDQUFDLFFBREgsQ0FDWSxVQURaLEVBQ3dCLFFBRHhCLENBRUUsQ0FBQyxRQUZILENBRVksUUFGWixFQUVzQixNQUZ0QixDQUdFLENBQUMsUUFISCxDQUdZLFFBSFosRUFHc0IsTUFIdEI7QUFBQSIsImZpbGUiOiJpbmRleC5jb25zdGFudHMuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8iLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZSgnbGFicycpXG4gIC5jb25zdGFudCAnbWFsYXJrZXknLCBtYWxhcmtleVxuICAuY29uc3RhbnQgJ3RvYXN0cicsIHRvYXN0clxuICAuY29uc3RhbnQgJ21vbWVudCcsIG1vbWVudFxuIl19
(function() {
  angular.module("labs").config(["$logProvider", "toastr", function($logProvider, toastr) {
    $logProvider.debugEnabled(true);
    toastr.options.timeOut = 3000;
    toastr.options.positionClass = 'toast-top-right';
    toastr.options.preventDuplicates = true;
    return toastr.options.progressBar = true;
  }]);

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmNvbmZpZy5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBQSxPQUFPLENBQUMsTUFBUixDQUFlLE1BQWYsQ0FDRSxDQUFDLE1BREgsQ0FDVSxTQUFDLFlBQUQsRUFBZSxNQUFmO0lBRU4sWUFBWSxDQUFDLFlBQWIsQ0FBMEIsSUFBMUI7SUFFQSxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQWYsR0FBeUI7SUFDekIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFmLEdBQStCO0lBQy9CLE1BQU0sQ0FBQyxPQUFPLENBQUMsaUJBQWYsR0FBbUM7V0FDbkMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFmLEdBQTZCO0VBUHZCLENBRFY7QUFBQSIsImZpbGUiOiJpbmRleC5jb25maWcuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8iLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZSBcImxhYnNcIlxuICAuY29uZmlnICgkbG9nUHJvdmlkZXIsIHRvYXN0cikgLT5cbiAgICAjIEVuYWJsZSBsb2dcbiAgICAkbG9nUHJvdmlkZXIuZGVidWdFbmFibGVkIHRydWVcbiAgICAjIFNldCBvcHRpb25zIHRoaXJkLXBhcnR5IGxpYlxuICAgIHRvYXN0ci5vcHRpb25zLnRpbWVPdXQgPSAzMDAwXG4gICAgdG9hc3RyLm9wdGlvbnMucG9zaXRpb25DbGFzcyA9ICd0b2FzdC10b3AtcmlnaHQnXG4gICAgdG9hc3RyLm9wdGlvbnMucHJldmVudER1cGxpY2F0ZXMgPSB0cnVlXG4gICAgdG9hc3RyLm9wdGlvbnMucHJvZ3Jlc3NCYXIgPSB0cnVlXG4iXX0=
angular.module("labs").run(["$templateCache", function($templateCache) {$templateCache.put("app/main/main.html","<div layout=\"vertical\" layout-fill=\"\"><md-content><header><acme-navbar creationdate=\"main.creationDate\"></acme-navbar></header><section class=\"jumbotron\"><h1>\'Allo, \'Allo!</h1><p class=\"lead\"><img src=\"assets/images/yeoman.png\" alt=\"I\'m Yeoman\"><br>Always a pleasure scaffolding your apps.</p><md-button class=\"md-raised animated infinite\" ng-class=\"main.classAnimation\" ng-click=\"main.showToastr()\">Splendid Toastr</md-button><p>With ♥ thanks to the contributions of<acme-malarkey extra-values=\"[\'Yeoman\', \'Gulp\', \'Angular\']\"></acme-malarkey></p></section><div class=\"techs\" layout-align=\"center\"><md-card ng-repeat=\"awesomeThing in main.awesomeThings | orderBy:\'rank\'\"><div class=\"thumbnail\"><img class=\"pull-right\" ng-src=\"assets/images/{{ awesomeThing.logo }}\" alt=\"{{ awesomeThing.title }}\"><div class=\"caption\"><h3>{{ awesomeThing.title }}</h3><p>{{ awesomeThing.description }}</p><p><a ng-href=\"{{ awesomeThing.url }}\">{{ awesomeThing.url }}</a></p></div></div></md-card></div></md-content></div>");
$templateCache.put("app/components/navbar/navbar.html","<md-toolbar layout=\"row\" layout-align=\"center center\"><md-button href=\"https://github.com/Swiip/generator-gulp-angular\">Gulp Angular</md-button><section flex=\"\" layout=\"row\" layout-align=\"left center\"><md-button href=\"#\" class=\"md-raised\">Home</md-button><md-button href=\"#\" class=\"md-raised\">About</md-button><md-button href=\"#\" class=\"md-raised\">Contact</md-button></section><md-button class=\"acme-navbar-text\">Application was created {{ vm.relativeDate }}.</md-button></md-toolbar>");}]);