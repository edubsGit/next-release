export default async function react(idLei: string, type: string) {
  const res = await fetch(`${window.location.origin}/api/react?id=${idLei}&type=${type}`, {
    method: 'PUT'
  })

  console.log(type + ' REACTED to ' + idLei)

  return res
}