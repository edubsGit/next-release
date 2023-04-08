export default async function unReactionunction(idLei: string, type: string) {
  const res = await fetch(`${window.location.origin}/api/reactpost?id=${idLei}&type=${type}`, {
    method: 'PUT'
  })

  console.log(type + ' REMOVED from ' + idLei)

  return res
}