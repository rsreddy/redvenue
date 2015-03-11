angular.module('starter.services',['config']).factory('Events', ['$http', '$q', 'ENV', 'DSCacheFactory', Events]);

  function Events($http, $q, ENV, DSCacheFactory) {

    var baseUrl = ENV.apiEndpoint,
        _event = undefined,
        cacheKey = 'events',
        eventsCache = DSCacheFactory.get('eventsCache');

    eventsCache.setOptions({
        onExpire: function(key, value) {
          getEvents(true)
                .then(function() {

                }, function() {
                  console.log('Error getting updated event data. Putting expired data back in the cache.', new Date());
                  eventsCache.put(key, value);
                });
        }
    });

    function getEvents(forceRefresh){

      if (typeof forceRefresh === 'undefined') {forceRefresh = false; }

      var deferred = $q.defer(),
          events = null;

      if (forceRefresh === false) {
        events = eventsCache.get(cacheKey);
      
      }
      if (events) {
        deferred.resolve(events);

      } else {
        $http.get(baseUrl + 'events?venue.state=IL')
          .success(function(data) {
            eventsCache.put(cacheKey, data.events);
            deferred.resolve(data.events);

          }).error(function(error) {
            console.log(error);
            deferred.reject();
          });
      }
      return deferred.promise;
    };

    function getEventDetails(id, forceRefresh){
      if (typeof forceRefresh === 'undefined') {forceRefresh = false; }

      var deferred = $q.defer(),
          eventById = undefined;

      if (forceRefresh === false) {
        eventById = _event;
      }
      if (eventById !== undefined && eventById.id == id) {
        deferred.resolve(eventById);

      } else {

        fetchEventById(id).then(function(dis) {
          deferred.resolve(dis);
        },function(statusCode) {
          deferred.reject();
        });
      }
      return deferred.promise;
    };

    function fetchEventById(id) {
      var deferred = $q.defer();
      var context;

      $http.get(baseUrl + 'events/' + id )
        .success(function(data) {
          deferred.resolve(data);

        }).error(function(error) {
          console.log(error);
          deferred.reject();
        });
      return deferred.promise;
    }
    return {
      getEvents: getEvents,
      getEventDetails: getEventDetails
    };
  };