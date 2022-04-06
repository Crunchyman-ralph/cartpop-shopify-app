import {
  Button,
  Card,
  Link,
  Stack,
  Subheading,
  TextContainer,
  TextField,
  TextStyle,
  Thumbnail,
} from "@shopify/polaris";
import { getIdFromGid, getShop } from "../helpers";

export function ProductList({
  products,
  handleVariantRemove,
  handleVariantQuantity,
}) {
  // Return message when no product is selected
  if (!products || !products.length) {
    return (
      <Stack vertical>
        <TextContainer>
          <TextStyle variation="subdued">
            No products selected.{" "}
            <TextStyle variation="strong">
              At least one product is required.
            </TextStyle>
          </TextStyle>
        </TextContainer>
      </Stack>
    );
  }

  // Return product list
  return products.map((product, productIndex) =>
    product.variants.map((variant, variantIndex) => (
      <Card.Subsection key={variant.id}>
        <Stack distribution="equalSpacing" wrap={false}>
          <Stack.Item fill>
            <Stack wrap={false}>
              {product.images && product.images.length ? (
                <Thumbnail
                  size="large"
                  source={product.images[0].originalSrc}
                />
              ) : null}
              <Stack.Item fill>
                <Stack vertical spacing="extraTight">
                  <TextStyle variation="strong">
                    <Link
                      monochrome
                      url={`https://${getShop()?.replace(
                        "https://",
                        ""
                      )}/admin/products/${getIdFromGid("Product", product.id)}`}
                      external
                    >
                      {product.title}
                    </Link>
                  </TextStyle>
                  <Subheading>
                    <TextStyle variation="subdued">{variant.title}</TextStyle>
                  </Subheading>
                  <TextStyle variation="subdued">{variant.sku}</TextStyle>
                </Stack>
              </Stack.Item>
            </Stack>
          </Stack.Item>
          <Stack.Item>
            <Stack vertical alignment="trailing">
              <TextField
                label="Quantity"
                type="number"
                labelHidden
                min={1}
                value={variant.quantity || "1"}
                onChange={(newQuantity) =>
                  handleVariantQuantity(productIndex, variantIndex, newQuantity)
                }
              />
              <Button
                onClick={() => handleVariantRemove(productIndex, variantIndex)}
                accessibilityLabel="Remove product"
              >
                Remove
              </Button>
            </Stack>
          </Stack.Item>
        </Stack>
      </Card.Subsection>
    ))
  );
}
