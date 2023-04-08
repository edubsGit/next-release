export default async function unReactionunction(idLei: string, type: string) {
  const res = await fetch('http://localhost:3000/api/unreactpost?id=' + idLei + '&type=' + type, {
    method: 'PUT'
  })

  console.log(type + ' REMOVED from ' + idLei)

  return res
}