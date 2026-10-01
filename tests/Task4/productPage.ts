import { Page ,expect} from "@playwright/test";

export class ProductPage {

  constructor(private page: Page) {}

private getCard(productName: string) {
  return this.page
    .locator(".card")
    .filter({
      hasText: productName
    });
}


  async addProduct(productName: string, quantity: number) {
  const card = this.getCard(productName);

  if (await card.count() === 0) {
    console.log(`Product "${productName}" was not found. Skipping...`);
    return;
  }

  const addToCartButton = card.getByRole("button", {
    name: /Add To Cart/
  });

  await expect(addToCartButton).toBeVisible();

  for (let i = 0; i < quantity; i++) {
    await addToCartButton.click();
  }
}

  async buttonCart() {
    await this.page.locator('button[routerlink="/dashboard/cart"]').click();
  }
}