function render() {
  const productsStore = localStorageUtil.getProducts();

  headerPage.render(productsStore.length);
  productsPage.render();
}

let CATALOG = [];

fetch("server/catalog.json") // can add url json
  .then((res) => res.json())
  .then((body) => {
    CATALOG = body;
    render();
  })
  .catch((e) => {
    console.log(e);
  });
