import { useState } from "react";
import { TitleBar, Toast } from "@shopify/app-bridge-react";
import {
  Badge,
  Card,
  Form,
  Heading,
  Layout,
  Page,
  PageActions,
  RadioButton,
  Stack,
  TextStyle,
  Link,
  Banner,
} from "@shopify/polaris";
import { CircleTickMajor } from "@shopify/polaris-icons";
import {
  useField,
  lengthLessThan,
  useForm,
  notEmpty,
  submitSuccess,
  makeCleanFields,
  useDynamicList,
} from "@shopify/react-form";

import { PAGE_STATES } from "../constants";
import { CheckoutLinkCard } from "./CheckoutLinkCard";
import { CustomerCard } from "./CustomerCard";
import { NameCard } from "./NameCard";
import { OrderCard } from "./OrderCard";
import { ProductsCard } from "./ProductsCard";
import SaveBar from "./SaveBar";

export function LinkForm({
  showSuccess,
  link,
  pageTitle,
  pageState,
  toast,
  handleSubmit,
  handleCopy,
  handlePreview,
  handleDelete,
}) {
  const products = useField({
    value: link.products,
    validates: [
      //notEmpty("At least one selected product is required"),
    ],
  });

  const customer = {
    email: useField((link.customer && link.customer.email) || ""),
    first_name: useField((link.customer && link.customer.first_name) || ""),
    last_name: useField((link.customer && link.customer.last_name) || ""),
    address1: useField((link.customer && link.customer.address1) || ""),
    address2: useField((link.customer && link.customer.address2) || ""),
    city: useField((link.customer && link.customer.city) || ""),
    province: useField((link.customer && link.customer.province) || ""),
    zipcode: useField((link.customer && link.customer.zipcode) || ""),
    country: useField((link.customer && link.customer.country) || ""),
  };

  const order = {
    note: useField({
      value: (link.order && link.order.note) || "",
      validates: [lengthLessThan("5000")],
    }),
    discountCode: useField({
      value: (link.order && link.order.discountCode) || "",
      validates: [lengthLessThan("255")],
    }),
    ref: useField((link.order && link.order.ref) || ""),
    useShopPay: useField((link.order && link.order.useShopPay) || false),
    attributes: useDynamicList([], () => ({ label: "", value: "" })),
  };

  const { fields, submit, submitting, dirty, reset, submitErrors, makeClean } =
    useForm({
      fields: {
        active: useField(link.active || false),
        alias: useField({
          value: link.alias,
          validates: [notEmpty("Link alias is required")],
        }),
        name: useField({
          value: link.name || "",
          validates: [notEmpty("Link name is required")],
        }),
        products,
        customer,
        order,
        accessToken: useField(link.accessToken || ""),
      },
      async onSubmit(form) {
        try {
          const result = await handleSubmit(form);

          // TODO: check result

          const remoteErrors = []; // your API call goes here
          if (remoteErrors.length > 0) {
            return { status: "fail", errors: remoteErrors };
          }

          console.log("hello~");
          makeCleanFields();

          return submitSuccess();
          //return {status: 'success'};
        } catch (err) {
          console.warn(err);
          return { status: "fail", errors: remoteErrors };
        }
      },
    });

  const errorBanner =
    submitErrors.length > 0 ? (
      <Layout.Section fullWidth>
        <Banner status="critical">
          <p>There were some issues with your form submission:</p>
          <ul>
            {submitErrors.map(({ message }, index) => {
              return <li key={`${message}${index}`}>{message}</li>;
            })}
          </ul>
        </Banner>
      </Layout.Section>
    ) : null;

  const secondaryActions = [];
  if ((pageState !== PAGE_STATES.submitting && handleCopy) || handlePreview) {
    if (handleCopy) {
      secondaryActions.push({
        content: "Duplicate",
        onAction: handleCopy,
      });
    }

    if (handlePreview) {
      secondaryActions.push({
        content: "Preview",
        onAction: () =>
          alert(
            "TODO: Make link work while disabled. Append a special session key"
          ),
      });
    }
  }

  return (
    <Form onSubmit={submit}>
      <Page
        breadcrumbs={[{ content: "Home", url: "/" }]}
        title={pageTitle}
        subtitle={
          <TextStyle variation="subdued">
            Last updated on{" "}
            {new Date(link.updatedAt || link.createdAt).toLocaleString()}
          </TextStyle>
        }
        primaryAction={{
          content: "Save",
          disabled: !dirty || pageState === PAGE_STATES.submitting,
          loading: pageState === PAGE_STATES.submitting,
          onAction: submit,
        }}
        secondaryActions={secondaryActions}
      >
        <SaveBar
          showBar={dirty}
          message="Unsaved products"
          save={[submit]}
          discard={[reset]}
          showSaveLoading={submitting}
          // saveAction={{
          //   onAction: submit,
          //   loading: submitting,
          //   disabled: false,
          // }}
          // discardAction={{
          //   onAction: reset,
          // }}
        />
        <TitleBar title={pageTitle} />
        {toast && toast.show ? (
          <Toast
            content={toast.content}
            onDismiss={() => setToast({})}
            error={toast.error}
          />
        ) : null}
        <Layout>
          {errorBanner}

          {showSuccess ? (
            <Layout.Section fullWidth>
              <Banner
                status="success"
                title={`${link.name || "Link"} created`}
                icon={CircleTickMajor}
              >
                <Link monochrome url="/links/new">
                  Create another checkout link
                </Link>
              </Banner>
            </Layout.Section>
          ) : null}

          <Layout.Section>
            <NameCard name={fields.name} />
            <ProductsCard products={fields.products} />
            <CustomerCard customer={fields.customer} />
            <OrderCard order={fields.order} />
            <CheckoutLinkCard
              link={link}
              alias={fields.alias}
              products={fields.products.value}
              customer={fields.customer}
              order={fields.order}
              accessToken={fields.accessToken}
            />
          </Layout.Section>
          <Layout.Section secondary>
            <Card
              sectioned
              title={
                <Stack alignment="center">
                  <Heading>Visibility</Heading>
                  {fields.active.value ? (
                    <Badge status="success">Live</Badge>
                  ) : (
                    <Badge>Disabled</Badge>
                  )}
                </Stack>
              }
            >
              <RadioButton
                label="Enabled"
                helpText="Customers will be able to check out with this link."
                id="enabled"
                name="visibility"
                checked={fields.active.value}
                onChange={() => active.onChange(!fields.active.value)}
              />
              <RadioButton
                label="Disabled"
                helpText="Customers will not be able to check out with this link."
                id="disabled"
                name="visibility"
                checked={fields.active.value === false}
                onChange={() => active.onChange(!fields.active.value)}
              />
            </Card>
            {link.isEnabled || link.analytics?.clicks ? (
              <Card title="Analytics" sectioned>
                // TODO: add analytics card
              </Card>
            ) : null}
            <Stack vertical alignment="center">
              <Stack.Item />
              <Stack.Item>
                Learn more about{" "}
                <Link
                  external
                  url="https://help.shopify.com/en/manual/products/details/checkout-link"
                >
                  checkout links
                </Link>
              </Stack.Item>
            </Stack>
          </Layout.Section>
          <Layout.Section>
            <PageActions
              primaryAction={{
                content: "Save",
                onAction: submit,
                loading: pageState === PAGE_STATES.submitting,
                disabled: !dirty,
              }}
              secondaryActions={
                handleDelete
                  ? [
                      {
                        content: "Delete link",
                        outline: true,
                        destructive: true,
                        loading: pageState === PAGE_STATES.submitting,
                        onAction: handleDelete,
                      },
                    ]
                  : []
              }
            ></PageActions>
          </Layout.Section>
        </Layout>
      </Page>
    </Form>
  );
}
