const uuid = length => {
  const pool = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

  const a = pool.split(""),
        n = a.length

  for(let i = n - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1))
    let tmp = a[i]
    a[i] = a[j]
    a[j] = tmp
  }

  return a.join("").substring(0, length)
}

export default uuid