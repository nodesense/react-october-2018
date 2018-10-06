// state/api.js

export const getProducts = () => {
    return window.fetch('http://api.nodesense.ai:7070/api/products')
                 .then (response => response.json() );
}