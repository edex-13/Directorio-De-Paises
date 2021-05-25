const getHash = () =>  new URLSearchParams(window.location.search).get('name') || '/'

export default getHash;