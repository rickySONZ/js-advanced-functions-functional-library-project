const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      let values = []
      if (collection instanceof Array){
        values = collection
      } else if(typeof collection === "object"){
        values = Object.values(collection)
      }

      for (let i = 0; i < values.length; i++){
        callback(values[i])
      }

      return collection
    
    },

    map: function(collection, callback) {
      let values = []
      if (collection instanceof Array){
        values = collection
      } else if(typeof collection === "object"){
        values = Object.values(collection)
      }
      let newArray = []
      for (let i = 0; i < values.length; i++){
        newArray.push(callback(values[i]))
      }

      return newArray
    },

    reduce: function(collection, callback, acc = 0) {
      let values = collection

      if (!acc){
        acc = values[0]
        values = values.slice(1)
      }

      for (let i = 0; i < values.length; i++){
        acc = callback(acc, values[i], collection)
      }
      return acc
    },

    find: function(collection, predicate) {
      let values = Object.values(collection)
      if (collection instanceof Array){
        values = collection
      }
      for (let i = 0; i < collection.length; i++){
        if (predicate(values[i])){
          return values[i]
        }
      }
      return undefined
    },

    filter: function(collection, predicate) {
      let values = Object.values(collection)
      if (collection instanceof Array){
        values = collection
      }
      let newArray = []
      for (let i = 0; i < collection.length; i++){
        if (predicate(values[i])){
          newArray.push(values[i])
        }
      }
      return newArray
    },

    size: function(collection) {
      let values = Object.values(collection)
      if (collection instanceof Array){
        values = collection
      } 
      return values.length
    },

    first: function(collection, n) {
      if (!n){
      return collection[0]
      } else {
        return collection.slice(0, n)
      }
    },

    last: function(collection, n) {
      if (!n){
      return collection[collection.length - 1]
      } else {
        return collection.slice(collection.length - n, collection.length)
      }
    },

    compact: function(collection){
      return collection.filter(e => !!e)
    },

    sortBy: function(collection, callback){
      let values = [...collection]
      return values.sort((a, b) => callback(a) - callback(b))
    },
    
    keys: function(object) {
       return Object.keys(object)
    },

    values: function(object) {
      return Object.values(object)
   }

  }
})()

fi.libraryMethod()
