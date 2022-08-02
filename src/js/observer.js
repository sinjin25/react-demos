export default function makeObserver(cb) {
    let options = {
        root: document.querySelector('#scrollArea'),
        rootMargin: '0px',
        threshold: 1.0
      }
      
    let observer = new IntersectionObserver(() => { console.log('idk lol')}, options);
    return observer
}