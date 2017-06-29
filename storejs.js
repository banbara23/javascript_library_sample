const store = require('store')

var key = 'user'
var value = { name: 'ikemura' }

// 保存 JSON文字列に変換（JSON.stringify()）される
store.set(key, value)

// 取得
console.log(store.get(key))
console.log(store.get(key).name)
store.each(function (value, key) {
  console.log(`key = ${key}, value = ${value.name}`)
})

// 削除
store.remove(key)
// すべて削除
store.clearAll()