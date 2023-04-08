export default async function reactionFunction(idLei: string, type: string) {
  const res = await fetch(`${window.location.origin}/api/reactpost?id=${idLei}&type=${type}`, {
    method: 'PUT'
  })

  console.log(type + ' ADDED to ' + idLei)

  return res
}