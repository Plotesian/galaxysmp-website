async function getPlayerCount() {
  const res = await fetch('https://api.mcsrvstat.us/3/galaxysmp.ovh:25565');
  const data = await res.json();
  return {
    online: data.players?.online ?? 0,
    max: data.players?.max ?? 0,
    list: data.players?.list ?? []
  };
}

getPlayerCount().then(result => {
  document.getElementById('player-count').textContent = `${result.online} / ${result.max} `;
});
